 
package MainPackage;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;
import java.util.Vector;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;
  
public class changePassWordGUI extends javax.swing.JFrame
{

    public changePassWordGUI() throws IOException {
        initComponents();
        Database.saveData();
        Database.loadData();
        this.setVisible(true);
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jTextField1 = new javax.swing.JTextField();
        jTextField2 = new javax.swing.JTextField();
        jTextField3 = new javax.swing.JTextField();
        jButton1 = new javax.swing.JButton();
        jLabel1 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        jTextField4 = new javax.swing.JTextField();
        jLabel4 = new javax.swing.JLabel();
        jLabel6 = new javax.swing.JLabel();
        jLabel5 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        getContentPane().setLayout(new java.awt.GridLayout(1, 0));

        jPanel1.setBackground(new java.awt.Color(204, 204, 255));
        jPanel1.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jTextField1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextField1ActionPerformed(evt);
            }
        });
        jPanel1.add(jTextField1, new org.netbeans.lib.awtextra.AbsoluteConstraints(130, 140, 164, -1));
        jPanel1.add(jTextField2, new org.netbeans.lib.awtextra.AbsoluteConstraints(130, 190, 164, -1));
        jPanel1.add(jTextField3, new org.netbeans.lib.awtextra.AbsoluteConstraints(130, 240, 164, -1));

        jButton1.setFont(new java.awt.Font("Times New Roman", 1, 18)); // NOI18N
        jButton1.setText("Changing");
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });
        jPanel1.add(jButton1, new org.netbeans.lib.awtextra.AbsoluteConstraints(250, 370, 127, -1));

        jLabel1.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jLabel1.setText("Name");
        jPanel1.add(jLabel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 140, 50, -1));

        jLabel2.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jLabel2.setText("Password");
        jPanel1.add(jLabel2, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 240, 72, -1));

        jLabel3.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jLabel3.setText("New Password");
        jPanel1.add(jLabel3, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 290, -1, -1));
        jPanel1.add(jTextField4, new org.netbeans.lib.awtextra.AbsoluteConstraints(130, 290, 164, -1));

        jLabel4.setFont(new java.awt.Font("Tahoma", 1, 14)); // NOI18N
        jLabel4.setText("L.Name");
        jPanel1.add(jLabel4, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 188, -1, -1));
        jPanel1.add(jLabel6, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 351, -1, -1));

        jLabel5.setIcon(new javax.swing.ImageIcon(getClass().getResource("/MainPackage/password.png"))); // NOI18N
        jPanel1.add(jLabel5, new org.netbeans.lib.awtextra.AbsoluteConstraints(390, 10, 350, 410));

        getContentPane().add(jPanel1);

        pack();
    }// </editor-fold>//GEN-END:initComponents

   
    public static String changePassword(String Ad,String Soyad,String Sifre,String yeniSifre) throws FileNotFoundException, IOException
    {
           for(int i=0 ; i<Database.EmployeerData.size(); i++)
        {
            if((Database.EmployeerData.elementAt(i).Soyad.equals(Soyad))&&
                    (Database.EmployeerData.elementAt(i).Ad.equals(Ad))&&
                    (Database.EmployeerData.elementAt(i).Sifre.equals(Sifre)))
            {
                Database.EmployeerData.elementAt(i).Sifre=yeniSifre;
                return "2";
            }
        }
         for(int i=0 ; i<Database.CutomerData.size(); i++)
        {
            if(Database.CutomerData.elementAt(i).Ad.equals(Ad)&&
            Database.CutomerData.elementAt(i).Soyad.equals(Soyad)&&
            Database.CutomerData.elementAt(i).Sifre.equals(Sifre))
            {
                Database.CutomerData.elementAt(i).Sifre=yeniSifre; 
                return "1"; 
            }
        }
       
           for(int i=0 ; i<Database.ManagerData.size(); i++)
        {
            if(Database.ManagerData.elementAt(i).Ad.equals(Ad)&&
            Database.ManagerData.elementAt(i).Soyad.equals(Soyad)&&
            Database.ManagerData.elementAt(i).Sifre.equals(Sifre))
            {
                Database.ManagerData.elementAt(i).Sifre=yeniSifre; 
                return "3";
            }
        }
           
        return "0"; 
    }
    
    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        // TODO add your handling code here:
      
        String Ad=jTextField1.getText().toString();
        String Soyad=jTextField2.getText().toString();
        String eskiParola=jTextField3.getText().toString();
        String yeniParola=jTextField4.getText().toString();
        try {
            // here to changePassword input and change the file itself
            
            String str=changePassword( Ad , Soyad , eskiParola , yeniParola ) ;  
            switch (str) {
                case "1":
                    {
                        JOptionPane.showMessageDialog(null,  "Done Successfully for customer\n"
                                + "Your New Password  =  "+yeniParola, "OUTPUT", JOptionPane.PLAIN_MESSAGE);
                        this.setVisible(false);
                        Database.saveData();
                        showDataBaseOfCustomer ob=new showDataBaseOfCustomer(); 
                        this.setVisible(false);
                        // show the loginGUI again 
                        break;
                    }
                case "2":
                    {
                        JOptionPane.showMessageDialog(null,  "Done Successfully for manager\n"
                                + "Your New Password =  "+yeniParola, "OUTPUT", JOptionPane.PLAIN_MESSAGE);
                        this.setVisible(false);
                        Database.saveData();
                        showDataBaseOfEmploye ob=new showDataBaseOfEmploye();
                        this.setVisible(false);
                        break;
                    }
                case "3":
                    {
                        JOptionPane.showMessageDialog(null,  "Done Successfully for manager\n"
                                + "Your New Password  =  "+yeniParola, "OUTPUT", JOptionPane.PLAIN_MESSAGE);
                        this.setVisible(false);
                        Database.saveData();
                        showAllDataBaseForManager ob=new showAllDataBaseForManager();
                        this.setVisible(false);
                        break;
                    }
                default:
                    JOptionPane.showMessageDialog(null,  "Information not matched", "OUTPUT", JOptionPane.PLAIN_MESSAGE);
                    break;
            }
   
        } catch (IOException ex) {
            Logger.getLogger(changePassWordGUI.class.getName()).log(Level.SEVERE, null, ex);
        }
    }//GEN-LAST:event_jButton1ActionPerformed

    private void jTextField1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jTextField1ActionPerformed
        // TODO add your handling code here:   
    }//GEN-LAST:event_jTextField1ActionPerformed

    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(changePassWordGUI.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(changePassWordGUI.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(changePassWordGUI.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(changePassWordGUI.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            @Override
            public void run() {
                try {
                    new changePassWordGUI().setVisible(true);
                } catch (IOException ex) {
                    Logger.getLogger(changePassWordGUI.class.getName()).log(Level.SEVERE, null, ex);
                }
               
        
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton jButton1;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JTextField jTextField1;
    private javax.swing.JTextField jTextField2;
    private javax.swing.JTextField jTextField3;
    private javax.swing.JTextField jTextField4;
    // End of variables declaration//GEN-END:variables

}
