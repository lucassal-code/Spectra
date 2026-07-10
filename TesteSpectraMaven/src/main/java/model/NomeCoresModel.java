package model;

import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.Map;

public class NomeCoresModel {

    public String resultado(String hexadecimal) {
        
        Map<String, String> lista = new HashMap<>();
        
        lerArquivo(lista);
        
        String corMaisProxima = null;
        double menorDistancia = Double.MAX_VALUE;
        
        for(Map.Entry<String, String> entrada : lista.entrySet()) {
            double distancia = calcDistancia(hexadecimal, entrada.getKey());

            if(distancia < menorDistancia) {
                menorDistancia = distancia;
                corMaisProxima = entrada.getKey();
            }
        }
        
        return corMaisProxima;
    }  
    
    //Métodos
    
    public void lerArquivo(Map<String, String> mapa) { //Puxa o documento e coloca seus conteúdos em um map
        File lista = new File("src/model/cores.txt");
        try (Scanner scanner = new Scanner(lista)) {
            while(scanner.hasNextLine()) {
                String linha = scanner.nextLine();
                String[] partes = linha.split("#");
                mapa.put(partes[1].trim(), partes[0].trim());
            }
        } catch(FileNotFoundException e) {
            System.out.println("Arquivo não encontrado!");
        }
    }
    
    public String rgbParaHex(int rR, int gG, int bB) {
        return String.format("#%02X%02X%02X", rR, gG, bB);
    }
    
    public int[] hexParaRgb(String hex) {
        if (hex.startsWith("#")) {
            hex = hex.substring(1);
        }
        
        int r = Integer.parseInt(hex.substring(0, 2), 16);
        int g = Integer.parseInt(hex.substring(2, 4), 16);
        int b = Integer.parseInt(hex.substring(4, 6), 16);

        return new int[]{r, g, b};
    }
    
    public double calcDistancia(String cor, String corTemporaria) {
        int[] rgb1 = hexParaRgb(cor);
        int[] rgb2 = hexParaRgb(corTemporaria);

        int dr = rgb1[0] - rgb2[0];
        int dg = rgb1[1] - rgb2[1];
        int db = rgb1[2] - rgb2[2];

        return Math.sqrt(dr * dr + dg * dg + db * db);
    }
    
    public String encontrarCorMaisProxima(String hexadecimal, Map<String, String> lista) {
        if (hexadecimal.startsWith("#")) {
            hexadecimal = hexadecimal.substring(1);
        }

        String corMaisProxima = null;
        double menorDistancia = Double.MAX_VALUE;

        for (Map.Entry<String, String> entrada : lista.entrySet()) {
            double distancia = calcDistancia(hexadecimal, entrada.getKey());

            if (distancia < menorDistancia) {
                menorDistancia = distancia;
                corMaisProxima = entrada.getKey();
            }
        }
        return corMaisProxima;
    }
}