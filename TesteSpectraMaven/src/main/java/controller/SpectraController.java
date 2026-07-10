package controller;

import model.CorDomModel;
import model.FotoModel;
import java.io.File;
import java.io.IOException;
import model.NomeCoresModel;

public class SpectraController {
    
    //tirar uma foto e salvar

    public static void main(String[] args) throws IOException {
        FotoModel foto = new FotoModel();
        File arquivo = foto.TirarFoto();
        
        CorDomModel c = new CorDomModel();
        String hexadec = c.hexadec(arquivo, foto);
        
        NomeCoresModel nc = new NomeCoresModel();
        String corMaisProx = nc.resultado(hexadec);
        
        System.out.println("Hexadecimal mais próximo: " + corMaisProx);
        //System.out.println("Nome da cor: " + nc.lista.get(corMaisProx));
    }
}
