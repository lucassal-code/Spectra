package nomedascores;

import java.awt.Color;
import java.util.HashMap;
import java.util.Map;

public class CorIdentificada extends javax.swing.JFrame {
    
    Map<String, String> lista = new HashMap<>();

    public CorIdentificada(String hexadecimal) {
        initComponents();

        NomeDasCores.LerArquivo(lista);

        String cor = NomeDasCores.encontrarCorMaisProxima(hexadecimal, lista);

        nome.setText(lista.get(cor));
        
        int[] rgb = NomeDasCores.hexParaRgb(cor);
        
        painelCor.setBackground(new Color(rgb[0], rgb[1], rgb[2]));
    }
    
    private static final java.util.logging.Logger logger = java.util.logging.Logger.getLogger(CorIdentificada.class.getName());

    public CorIdentificada() {
        initComponents();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel2 = new javax.swing.JPanel();
        nome = new javax.swing.JLabel();
        painelCor = new javax.swing.JPanel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setBackground(new java.awt.Color(26, 26, 40));
        setCursor(new java.awt.Cursor(java.awt.Cursor.DEFAULT_CURSOR));
        setMinimumSize(new java.awt.Dimension(400, 400));
        setResizable(false);
        getContentPane().setLayout(null);

        jPanel2.setBackground(new java.awt.Color(26, 26, 40));
        jPanel2.setLayout(null);

        nome.setFont(new java.awt.Font("Swis721 Blk BT", 0, 18)); // NOI18N
        nome.setForeground(new java.awt.Color(255, 255, 255));
        nome.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        nome.setHorizontalTextPosition(javax.swing.SwingConstants.CENTER);
        jPanel2.add(nome);
        nome.setBounds(0, 300, 400, 30);

        painelCor.setBackground(new java.awt.Color(204, 255, 255));
        painelCor.setMaximumSize(new java.awt.Dimension(200, 200));
        painelCor.setMinimumSize(new java.awt.Dimension(200, 200));

        javax.swing.GroupLayout painelCorLayout = new javax.swing.GroupLayout(painelCor);
        painelCor.setLayout(painelCorLayout);
        painelCorLayout.setHorizontalGroup(
            painelCorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 200, Short.MAX_VALUE)
        );
        painelCorLayout.setVerticalGroup(
            painelCorLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 200, Short.MAX_VALUE)
        );

        jPanel2.add(painelCor);
        painelCor.setBounds(100, 60, 200, 200);

        getContentPane().add(jPanel2);
        jPanel2.setBounds(0, 0, 400, 400);

        pack();
    }// </editor-fold>//GEN-END:initComponents

    public static void main(String args[]) {
        
        java.awt.EventQueue.invokeLater(() -> new CorIdentificada().setVisible(true));
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JPanel jPanel2;
    private javax.swing.JLabel nome;
    private javax.swing.JPanel painelCor;
    // End of variables declaration//GEN-END:variables
}
