package itensdeteste;

import java.util.Scanner;

public class TesteSpectra {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        
        System.out.println("Color Picker (1) ou Leitura de Imagem (2)");
        int app = entrada.nextInt();
        
        switch(app){
            case 1:
                ColorPicker colorpicker = new ColorPicker();
                
            case 2:
                LeituraImagem lerImage = new LeituraImagem();
        }
        
        
    }
    
}
