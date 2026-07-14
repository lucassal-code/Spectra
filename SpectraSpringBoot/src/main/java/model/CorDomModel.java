package model;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import javax.imageio.ImageIO;
import javax.imageio.ImageReader;
import javax.imageio.stream.ImageInputStream;

public class CorDomModel {
    
    public String hexadec(File arquivo, FotoModel foto) throws IOException{
        
        ImageInputStream is = ImageIO.createImageInputStream(arquivo);
        Iterator iter = ImageIO.getImageReaders(is);

        // Se não tiver entrada, retorna que nao foi possivel carregar
        if (!iter.hasNext())
        {
            System.out.println("Cannot load the specified file "+ foto);
            System.exit(1);
        }
        ImageReader imageReader = (ImageReader)iter.next();
        imageReader.setInput(is);

        BufferedImage image = imageReader.read(0);

        int height = image.getHeight();
        int width = image.getWidth();

        // Mapeia a imagem a partir da leitura feita acima
        Map m = new HashMap();
        for(int i=0; i < width ; i++)
        {
            for(int j=0; j < height ; j++)
            {
                int rgb = image.getRGB(i, j);
                int[] rgbArr = this.getRGBArr(rgb);                        
                Integer counter = (Integer) m.get(rgb);
                if (counter == null)
                    counter = 0;
                counter++;                      
                m.put(rgb, counter);             
            }
        }        
        String colourHex = this.getMostCommonColour(m);
        //System.out.println(colourHex);
        return colourHex;
    }
    
    public String getMostCommonColour(Map map) {
        List list = new LinkedList(map.entrySet());
        Collections.sort(list, new Comparator() {
              public int compare(Object o1, Object o2) {
                return ((Comparable) ((Map.Entry) (o1)).getValue())
                  .compareTo(((Map.Entry) (o2)).getValue());
              }
        });
        // O erro aqui era que ele resultava num array vazio e procurava a posição -1 que não existia
        Map.Entry me = (Map.Entry )list.get(list.size()-1);
        if (!list.isEmpty()) {
            me = (Map.Entry) list.getLast();
        }
        int[] rgb= getRGBArr((Integer)me.getKey());
        //return Integer.toHexString(rgb[0])+" "+Integer.toHexString(rgb[1])+" "+Integer.toHexString(rgb[2]);       
        return String.format("%02X%02X%02X",
            rgb[0],
            rgb[1],
            rgb[2]
        );
    }    

    public int[] getRGBArr(int pixel) {
        int alpha = (pixel >> 24) & 0xff;
        int red = (pixel >> 16) & 0xff;
        int green = (pixel >> 8) & 0xff;
        int blue = (pixel) & 0xff;
        return new int[]{red,green,blue};

  }
}
