package nomedascores;

import nomedascores.CorIdentificada;

public class Buscar extends javax.swing.JFrame {
    
    private static final java.util.logging.Logger logger = java.util.logging.Logger.getLogger(Buscar.class.getName());

    public Buscar() {
        initComponents();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel2 = new javax.swing.JPanel();
        txtHex = new javax.swing.JTextField();
        btnBuscar = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setBackground(new java.awt.Color(26, 26, 40));
        setCursor(new java.awt.Cursor(java.awt.Cursor.DEFAULT_CURSOR));
        setMinimumSize(new java.awt.Dimension(400, 400));
        setResizable(false);
        getContentPane().setLayout(null);

        jPanel2.setBackground(new java.awt.Color(26, 26, 40));
        jPanel2.setLayout(null);

        txtHex.setFont(new java.awt.Font("Swis721 BT", 0, 14)); // NOI18N
        txtHex.setHorizontalAlignment(javax.swing.JTextField.CENTER);
        txtHex.setBorder(null);
        txtHex.addActionListener(this::txtHexActionPerformed);
        jPanel2.add(txtHex);
        txtHex.setBounds(50, 150, 300, 40);

        btnBuscar.setBackground(new java.awt.Color(218, 216, 235));
        btnBuscar.setFont(new java.awt.Font("Swis721 Blk BT", 0, 18)); // NOI18N
        btnBuscar.setForeground(new java.awt.Color(26, 26, 40));
        btnBuscar.setText("BUSCAR");
        btnBuscar.setBorder(null);
        btnBuscar.addActionListener(this::btnBuscarActionPerformed);
        jPanel2.add(btnBuscar);
        btnBuscar.setBounds(130, 220, 140, 50);

        getContentPane().add(jPanel2);
        jPanel2.setBounds(0, 0, 400, 400);

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void txtHexActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_txtHexActionPerformed
        
    }//GEN-LAST:event_txtHexActionPerformed

    private void btnBuscarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnBuscarActionPerformed
        String hexadecimal = txtHex.getText();

        CorIdentificada tela = new CorIdentificada(hexadecimal);
        tela.setVisible(true);

        this.dispose();
    }//GEN-LAST:event_btnBuscarActionPerformed

    public static void main(String args[]) {
        
        java.awt.EventQueue.invokeLater(() -> new Buscar().setVisible(true));
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnBuscar;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JTextField txtHex;
    // End of variables declaration//GEN-END:variables
}
