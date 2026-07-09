/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package porcentagemdecor;

import java.util.ArrayList;
import java.util.List;

public class CalculadoraMistura {

    private List<Cor> cores = new ArrayList<>();

    // Primeiro cadastramos as cores-base
    public CalculadoraMistura() {

        cores.add(new Cor("Vermelho",255,0,0));
        cores.add(new Cor("Amarelo",255,255,0));
        cores.add(new Cor("Azul",0,0,255));
        cores.add(new Cor("Branco",255,255,255));
        cores.add(new Cor("Preto",0,0,0));

    }
    
    // Agora criamos uma função que calcula a média ponderada
    private int[] calcularRGB(List<Mistura> mistura){

        double r=0;
        double g=0;
        double b=0;

        for(Mistura m : mistura){

            r += m.getCor().getR() * (m.getPorcentagem()/100.0);
            g += m.getCor().getG() * (m.getPorcentagem()/100.0);
            b += m.getCor().getB() * (m.getPorcentagem()/100.0);

        }

        return new int[]{
            (int)Math.round(r),
            (int)Math.round(g),
            (int)Math.round(b)
        };

    }
    
    // Agora calculamos o erro
    private double erro(int[] alvo, int[] teste){

    return Math.sqrt(

            Math.pow(alvo[0]-teste[0],2)+
            Math.pow(alvo[1]-teste[1],2)+
            Math.pow(alvo[2]-teste[2],2)

    );

    }
    
    /* Agora vem a parte interessante.
    Vamos testar várias combinações automaticamente.
    Para simplificar, vamos variar de 10 em 10% */
    
    public void procurarMelhorMistura(int r, int g, int b){

        int[] alvo = {r,g,b};

        double menorErro = Double.MAX_VALUE;

        List<Mistura> melhor = null;

        for(int vr=0; vr<=100; vr+=10){

            for(int va=0; va<=100-vr; va+=10){

                for(int vz=0; vz<=100-vr-va; vz+=10){

                    for(int vb=0; vb<=100-vr-va-vz; vb+=10){

                        int vp = 100-vr-va-vz-vb;

                        List<Mistura> mistura = new ArrayList<>();

                        mistura.add(new Mistura(cores.get(0),vr));
                        mistura.add(new Mistura(cores.get(1),va));
                        mistura.add(new Mistura(cores.get(2),vz));
                        mistura.add(new Mistura(cores.get(3),vb));
                        mistura.add(new Mistura(cores.get(4),vp));

                        int[] rgb = calcularRGB(mistura);

                        double e = erro(alvo,rgb);

                        if(e < menorErro){

                            menorErro = e;
                            melhor = mistura;

                        }

                    }

                }

            }

        }

        System.out.println("Melhor mistura");

        for(Mistura m : melhor){

            if(m.getPorcentagem()>0)

                System.out.println(
                        m.getCor().getNome()
                        +" "
                        +m.getPorcentagem()
                        +"%");

        }

        System.out.println("Erro = "+menorErro);

    }
}
