package controller;

import com.github.sarxos.webcam.Webcam;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;

public class FotoController {

    public File FotoController() throws IOException {
        //abre a camera default
	Webcam webcam = Webcam.getDefault();
	webcam.open();

	//pega a imagem
	BufferedImage img = webcam.getImage();

	//salva a imagem num png
        File arquivo = new File("foto.png");
	ImageIO.write(img, "PNG", arquivo);
        
        return arquivo; 
    }
}
