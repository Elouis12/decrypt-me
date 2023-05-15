# DECRYPT ME

## Description
Decrypt Me is a project that aims to introduce users to different encryption techniques and provide a fun way to practice using them. It's an ai-assistant that allows users to send messages to a server and receive responses that are encrypted using a specific or randomly selected cipher technique.

The ai-assistant supports three types of ciphers: Caesar Cipher, Atbash Cipher, and Rail Fence Cipher. Users can enter either an unencrypted or encrypted message along with the cipher technique used (if applicable) and choose which technique the server should use to encrypt the response.

The ai-assistant also features a Natural Language Processing (NLP) algorithm that generates responses based on the user's input, making the experience more interactive and engaging.

## Problem Statement
The goal of the "Decrypt Me" project is to create a web application that allows users to encrypt and decrypt messages using simple and engaging techniques such as substitution ciphers (i.e., Caesar cipher, Atbash cipher) and transposition ciphers (i.e., Rail Fence cipher). The application should be easy to use and provide immediate feedback to the user.

## Requirements
### User Requirements
- The user should be able to enter a message and select a cipher to encrypt it.
- The user should be able to enter a ciphertext and select a cipher to decrypt it.
- The user should be able to choose from different types of ciphers.
- The user should know which technique to use when the client sends it back decrypted.
- The user should receive immediate feedback on the encryption/decryption process and be able to see the result.
- The user should be able to use the application on any device with internet connection.
- The user should be able to enter an unencrypted message (the server will then encrypt it using a randomly selected cipher).
- If the user selects no encryption technique to be used by the server, the server will choose one randomly.
- The system should respond with an error if it cannot understand the unencrypted message.

### Technical Requirements
- The application should be built using modern web technologies (Backend: Springboot | Frontend: React.Js).
- The application should have a responsive design that works on desktop and mobile devices.
- The application should be scalable and able to handle multiple users at once.
- The application should be deployed on a reliable hosting service with high uptime.
- The application should be easy to maintain and update with new features.

## Design
### CRC Cards
#### Classes
- `Cipher`: an interface used to decrypt/encrypt the messages.
- `CipherFactory`: generates a cipher object.
    - `CaesarCipher`: implements the decrypt and encrypt functions of the Caesar Cipher by using the interface `Cipher`.
    - `AtbashCipher`: implements the decrypt and encrypt functions of the Atbash Cipher by using the interface `Cipher`.
    - `RailFenceCipher`: implements the decrypt and encrypt functions of the Rail Fence Cipher by using the interface `Cipher`.
- `ServerResponse`: stores the server's response, and the cipher used.
- `ClientResponse`: stores the client's response, and the cipher used.
- `NLPAlgorithm`: generates a response from a given input.
