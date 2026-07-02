package testespectra;

import java.awt.Graphics;
import java.awt.Image;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class MostrarImagem extends JFrame {
    
    int tamanhoTela = 600;
    
    public MostrarImagem(String path){
        JPanel tela = new JPanel()
        {
            @Override
            protected void paintComponent(Graphics g) {
                ImageIcon imagem = new ImageIcon(path);
                Image img = imagem.getImage();
                
                if (img != null){ //checa se tem imagem
                    
                    //posiciona a imagem no meio horizontalmente e verticalmente com x e y
                    int x = (getWidth() - img.getWidth(null)) / 2;
                    int y = (getHeight()- img.getHeight(null)) / 2;
                    
                    //desenha a imagem selecionada na posição x e y
                    g.drawImage(img, x, y, this);
                }
            }
          
        };
        
        //cria a janela com a imagem
        this.getContentPane().add(tela);
        
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        //fazendo com 600 px por enquanto mas se pa que pode ser até menos
        setSize(tamanhoTela, tamanhoTela);
        setLocationRelativeTo(null); //abre no meio da tela
        setVisible(true);
    }    
}
    

