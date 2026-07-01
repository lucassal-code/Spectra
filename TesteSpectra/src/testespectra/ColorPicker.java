package testespectra;

import java.awt.Color;
import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JColorChooser;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class ColorPicker extends JFrame implements ActionListener {
    
    JButton botao1, botao2;
    JLabel texto;
    
    ColorPicker(){
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(new FlowLayout());
        
        botao1 = new JButton("Texto");
        botao2 = new JButton("Background");
        botao1.addActionListener(this);
        botao2.addActionListener(this);
        
        texto = new JLabel();
        texto.setBackground(Color.white);
        texto.setOpaque(true);
        texto.setText("Texto de teste :D");
        texto.setFont(new Font("Comic Sans", Font.PLAIN, 100));
        
        this.add(botao1);
        this.add(botao2);
        this.add(texto);
        
        this.pack();
        this.setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        
        int valor = 0;
        JColorChooser colorchooser = new JColorChooser();
        
        if(e.getSource() == botao1){
            valor = 1;
        }
        if(e.getSource() == botao2) {
            valor = 2;
        }
        
        switch(valor){
            
            case 1:
                Color corF = JColorChooser.showDialog(null, "Teste de cor", Color.yellow);
                
                int red = corF.getRed();
                int blue = corF.getBlue();
                int green = corF.getGreen();
                
                int hex = corF.getRGB();

                this.texto.setForeground(corF);
                System.out.println("Vermelho: " + red + "; Verde: " + green + "; Azul: " + blue);
                System.out.println(hex);
                break;
                
            case 2:
                Color corB = JColorChooser.showDialog(null, "Teste de cor", Color.yellow);

                this.texto.setBackground(corB);
                break;
                
            default:
                System.out.println("invalido");
        }
        
        
    }
    
}
