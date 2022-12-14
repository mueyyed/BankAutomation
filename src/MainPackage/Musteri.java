package MainPackage;




import static java.lang.Double.parseDouble;




public class Musteri extends Kisi implements additionMusteri
{
    String bakiye; 
    Musteri(){
    }
    public Musteri(String Ad, String Soyad, String Eposta, String Sifre, String bakiye) {
        super(Ad, Soyad, Eposta, Sifre);
        this.setBakiye(bakiye);
    }
    
    
    public static Musteri parse(String s) {
        String[] str = s.split(":");
        Musteri m = new Musteri(str[0],str[1],str[2],str[3],str[4]);
        return m;
    }
    @Override
     public Musteri addMusteri(String Ad,String Soyad,String Eposta,String Sifre) 
        {
        Musteri m = new Musteri(Ad,Soyad,Eposta,Sifre,"0");
        return m;
        }
    
 
    public void setBakiye(String bakiye) {
        this.bakiye = bakiye;
    }

    @Override
    public String toStringData() {
        return Ad+":"+Soyad+":"+Eposta+":"+Sifre+":"+bakiye ; 
    }

    
 
 
}
