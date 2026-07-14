package controller;

import java.io.File;
import java.io.IOException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;
import java.awt.Color;
import model.CorDomModel;
import model.FotoModel;
import model.NomeCoresModel;

@RestController
@CrossOrigin(origins = "*")
public class SpectraController {

    @GetMapping("/cor")
    public Map<String, Object> descobrirCor() throws IOException {
        FotoModel foto = new FotoModel();

        File arquivo = foto.TirarFoto();

        CorDomModel corDom = new CorDomModel();
        String hex = corDom.hexadec(arquivo, foto);
        NomeCoresModel nome = new NomeCoresModel();
        Map<String, String> cor = nome.resultado(hex);
        String nomeCor = cor.get("nome");
        String hexCor = cor.get("hex");
        Color color = Color.decode("#" + hexCor.replace("#", ""));

        return Map.of(
            "nome", nomeCor,
            "hex", "#" + hexCor,
            "r", color.getRed(),
            "g", color.getGreen(),
            "b", color.getBlue()
        );

    }

}