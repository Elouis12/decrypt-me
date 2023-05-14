package main.java.com.example.server.model;

public class ServerResponse {

    private String message;
    private String cipher;
    private String response;
    private static final ServerResponse serverResponse = new ServerResponse();


    public static ServerResponse getInstance(){

        return serverResponse;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getCipher() {
        return cipher;
    }

    public String getHTTPResponse() {
        return this.response;
    }

    public void setCipher(String cipher) {
        this.cipher = cipher;
    }

    // used when telling the user if they got it correct or not
    public void setHTTPResponse(String response){

        this.response = response;
    }
}
