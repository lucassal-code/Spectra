package com.mycompany.testespectramaven;

import controller.CorDominante;
import controller.FotoController;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import javax.imageio.ImageIO;
import javax.imageio.ImageReader;
import javax.imageio.stream.ImageInputStream;

public class TesteSpectraMaven {
    
    //tirar uma foto e salvar

    public static void main(String[] args) throws IOException {
        FotoController foto = new FotoController();
        File arquivo = foto.FotoController();
        CorDominante cd = new CorDominante();
        
        /*File file = new File( // Basicamente pronto, só falta escolher o arquivo e demonstrar a porcentagem
                "C:\\Users\\0081998\\Documents\\NetBeansProjects\\Spectra\\TesteSpectra\\src\\mediadominante\\ImagensTeste\\teste3.png"
        );*/
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
                int[] rgbArr = cd.getRGBArr(rgb);                
                // Removi o filtro de cinza mas vou deixar mesmo em comentário caso precise
                //if (!isGray(rgbArr)) {                
                        Integer counter = (Integer) m.get(rgb);   
                        if (counter == null)
                            counter = 0;
                        counter++;                                
                        m.put(rgb, counter);                
                //}                
            }
        }        
        String colourHex = cd.getMostCommonColour(m);
        System.out.println(colourHex);
	}
}
