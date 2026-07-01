package testespectra;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class LeituraImagem extends JFrame implements ActionListener{
    
    JButton escImage;
    JLabel imgEscolhida;
    
    LeituraImagem(){
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(new FlowLayout());
        
        escImage = new JButton("Escolha a Imagem");
        escImage.addActionListener(this);
        
        imgEscolhida = new JLabel("Placeholder");
        
        this.add(escImage);
        this.add(imgEscolhida);
        
        this.pack();
        this.setVisible(true);
    }
        
    

    @Override
    public void actionPerformed(ActionEvent e) {
        JFileChooser chooser= new JFileChooser();

        int choice = chooser.showDialog(this, "Escolher");

        if (choice != JFileChooser.APPROVE_OPTION) return;

        File chosenFile = chooser.getSelectedFile();
        String caminho = chosenFile.getPath();
        
        System.out.println(caminho);
        ImageIcon imgIcon = new ImageIcon(caminho);
        
        imgEscolhida.setIcon(imgIcon);
    }
}
