package main.java.com.example.server.service;

import com.example.server.model.ClientResponse;
import com.example.server.model.ServerResponse;

/*
    HANDLES THE VARIOUS RESPONSES
*/
public class ResponseHandler {

    public static ServerResponse handleClientPromptResponse(ClientResponse clientResponse) {

        String message = clientResponse.getMessage();
        String clientCipher = clientResponse.getCipher();
        String clientCipherToUse = clientResponse.getCipherToUse();
        String clientDecryptedMessage;

        // 1. decrypt message if needed
        if (clientCipher != null) {
            clientDecryptedMessage = com.example.server.service.CipherFactory.getCipher(clientCipher).decrypt(message);
        } else {
            // the message was sent unencrypted
            clientDecryptedMessage = message;
        }

        // 2. use NLP algo or OPENAI interface to retrieve a response based on the client's decrypted message
        ResponseGenerator responseGenerator = new ResponseGenerator(clientDecryptedMessage);
        String responseGenerated = responseGenerator.getResponse();// generate a response using AI

        // 3. use specified or random algo to encrypt it
        Cipher cipher = CipherFactory.getCipher(clientCipherToUse);
        String encryptedResponse = cipher.encrypt(responseGenerated);

        System.out.println(responseGenerated);
        System.out.println(encryptedResponse);

        // 4. save it as a server response object
        ServerResponse serverResponse = ServerResponse.getInstance();/* new ServerResponse(encryptedResponse, cipher.cipher());*/
        serverResponse.setMessage( encryptedResponse ); // the message encrypted
        serverResponse.setCipher( cipher.cipher() ); // the cipher the server used
        return serverResponse;

    }

    public static ServerResponse handleClientDecryptionResponse(ClientResponse clientResponse) {

        String clientMessage = clientResponse.getMessage();

        ServerResponse serverResponse = ServerResponse.getInstance();

        // decrypt the message stored in the server response to check it
        String originalText = CipherFactory.getCipher( serverResponse.getCipher() ).decrypt(serverResponse.getMessage() );

        if( clientMessage.equalsIgnoreCase( originalText ) ){

            serverResponse.setHTTPResponse( "success" );
            serverResponse.setMessage( null );
            serverResponse.setCipher( null );

        }else{

            serverResponse.setHTTPResponse( "invalid" );

        }

        return serverResponse;


    }

}
