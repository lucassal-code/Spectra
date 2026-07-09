package porcentagemdecor;

public class Mistura {

    private Cor cor;
    private int porcentagem;

    public Mistura(Cor cor, int porcentagem) {
        this.cor = cor;
        this.porcentagem = porcentagem;
    }

    public Cor getCor() {
        return cor;
    }

    public int getPorcentagem() {
        return porcentagem;
    }

}
