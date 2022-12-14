package MainPackage;

import static java.lang.Double.parseDouble;

public class Yontici extends Kisi implements additionYontici{
  public  Yontici() {}
    public Yontici(String Ad, String Soyad, String Eposta, String Sifre) {
         
        super(Ad, Soyad, Eposta, Sifre);
      
    }
    
        public static Yontici parse(String s) 
        {
        String[] c = s.split(":");
        Yontici m = new Yontici(c[0],c[1],c[2],c[3]);
        return m;
        }
        
    @Override
    public Yontici addYonetici(String Ad, String Soyad, String Eposta, String Sifre) {
        Yontici m = new Yontici(Ad,Soyad,Eposta,Sifre);
        return m;    }

    @Override
    public String toStringData() {
       return Ad+":"+Soyad+":"+Eposta+":"+Sifre; 
    }
 
 
   
}
