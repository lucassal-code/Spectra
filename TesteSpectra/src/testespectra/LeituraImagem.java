package testespectra;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import javax.swing.JButton;
import javax.swing.JFileChooser;
import javax.swing.JFrame;

public class LeituraImagem extends JFrame implements ActionListener{
    
    JButton escImage;
    
    LeituraImagem(){
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(new FlowLayout());
        
        escImage = new JButton("Escolha a Imagem");
        escImage.addActionListener(this);
        
        this.add(escImage);
        
        this.pack();
        this.setVisible(true);
    }
        
    

    @Override
    public void actionPerformed(ActionEvent e) {
        JFileChooser chooser= new JFileChooser(); //inicia o escolhedor de arquivo

        int choice = chooser.showDialog(this, "Escolher"); //abre a caixa de diálogo para o usuário escolher

        if (choice != JFileChooser.APPROVE_OPTION) return; //fecha se n escolher nada

        //guarda o arquivo escolhido num File e o caminho pro arquivo num String
        File chosenFile = chooser.getSelectedFile();
        String caminho = chosenFile.getPath();
        
        System.out.println(caminho);
        
            MostrarImagem mostrarImg = new MostrarImagem(caminho);
    }
}
