package controller;

import model.CorDominante;
import model.FotoModel;
import java.io.File;
import java.io.IOException;
import model.NomeDasCores;

public class TesteSpectraMaven {
    
    //tirar uma foto e salvar

    public static void main(String[] args) throws IOException {
        FotoModel foto = new FotoModel();
        File arquivo = foto.TirarFoto();
        
        CorDominante c = new CorDominante();
        String hexadec = c.hexadec(arquivo, foto);
        
        NomeDasCores nc = new NomeDasCores();
        String corMaisProx = nc.resultado(hexadec);
        
        System.out.println("Hexadecimal mais próximo: " + corMaisProx);
        //System.out.println("Nome da cor: " + nc.lista.get(corMaisProx));
    }
}
