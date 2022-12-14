package MainPackage;

import static java.lang.Double.parseDouble;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 *
 * @author moayy
 */
public class Personel extends Kisi implements additionPersonel {

    Personel(){}
    public Personel(String Ad, String Soyad, String Eposta, String Sifre) {
        super(Ad, Soyad, Eposta,Sifre);
    }
    
        public static Personel parse(String s)
        {
        String[] c = s.split(":");
        Personel m = new Personel(c[0],c[1],c[2],c[3]);
        return m;
        }
        
    @Override
        public Personel addPersonel(String Ad,String Soyad,String Eposta,String Sifre) 
        {
        Personel m = new Personel(Ad,Soyad,Eposta,Sifre);
        return m;
        }

    @Override
    public String toStringData() {
         return Ad+":"+Soyad+":"+Eposta+":"+Sifre; 
    }
 
 
}
