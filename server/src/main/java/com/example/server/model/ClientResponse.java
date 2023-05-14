package main.java.com.example.server.model;

public class ClientResponse {

    private final String message;
    private final String cipher;
    private final String cipherToUse;

    public ClientResponse(String message, String cipher, String cipherToUse){

        this.message = message;
        this.cipher = cipher;
        this.cipherToUse = cipherToUse;
    }


    public String getMessage() {
        return message;
    }

    public String getCipher() {
        return cipher;
    }

    public String getCipherToUse() {
        return cipherToUse;
    }
}
