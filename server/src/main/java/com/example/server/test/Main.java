package main.java.com.example.server.test;

import com.example.server.service.CaesarCipher;

public class Main {

    public static void main(String[] args) {

        CaesarCipher caesarCipher = new CaesarCipher(10);

        String encrypted = caesarCipher.encrypt("^he sky is blue");

        System.out.println( encrypted );

        String decrypted = caesarCipher.decrypt(encrypted);

        System.out.println( decrypted );
    }
}
