package main.java.com.example.server.service;

public class CipherFactory {

    public static Cipher getCipher(String cipher){

        if(cipher.equalsIgnoreCase("caesar")){
            return new CaesarCipher(10);
        } else if(cipher.equalsIgnoreCase("random")){
            return randomCipher();
        } else { // if null
            throw new IllegalArgumentException("Cipher not specified");
        }

    }

    private static Cipher randomCipher(){

        return new CaesarCipher(10);
    }
}
