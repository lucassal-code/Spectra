package controller;

import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public class CorDominante {
    public static String getMostCommonColour(Map map) {
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

    public static int[] getRGBArr(int pixel) {
        int alpha = (pixel >> 24) & 0xff;
        int red = (pixel >> 16) & 0xff;
        int green = (pixel >> 8) & 0xff;
        int blue = (pixel) & 0xff;
        return new int[]{red,green,blue};

  }
}
