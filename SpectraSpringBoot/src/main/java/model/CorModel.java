package model;

public class CorModel {

    private String nome;
    private int r, g, b;

    public CorModel(String nome, int r, int g, int b) {
        this.nome = nome;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    public String getNome() {
        return nome;
    }

    public int getR() {
        return r;
    }

    public int getG() {
        return g;
    }

    public int getB() {
        return b;
    }

}
