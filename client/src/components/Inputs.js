import UserInput from "./UserInput";
import {AiFillMail} from "react-icons/ai";
import Dropdown from "./Dropdown";
import {useRef, useState} from "react";
import {IoIosArrowDropdownCircle} from "react-icons/io";
import {BsFillSendFill, BsFillUnlockFill} from "react-icons/bs";

let Inputs = ()=>{

    let [isMessageSent, setIsMessageSent] = useState(false);
    let [message, setMessage] = useState({message:'', error:false});
    let [decryptionMessage, setDecryptionMessage] = useState({ message: '', error: false });
    let [cipherUsed, setCipherUsed] = useState({message:'', error:false});
    let [cipherToUse, setCipherToUse] = useState({message:'', error:false});

// VALIDATE MESSAGE TO SEND

    let canSendMessage = ()=>{

        let send = true;

        // message is empty
        if( message.message === '' ){


            send = false;

            // update its error prop
            setMessage( {...message, error: true} )

        }else{

            setMessage( {...message, error: false} )
        }

        // cipher used is empty
        if( cipherUsed.message === '' ){

            send = false;
            // update its error prop

            setCipherUsed( {...cipherUsed, error: true} )

        }else{
            setCipherUsed( {...cipherUsed, error: false} )

        }

        // cipher to use is empty
        if( cipherToUse.message === '' ){

            send = false;
            setCipherToUse( {...cipherToUse, error: true} )

        }else{

            setCipherToUse( {...cipherToUse, error: false} )

        }


        return send;

    }
// SEND MESSAGE TO SERVER

    let sendMessage = async ()=>{

        if( canSendMessage() ){


            setIsMessageSent( true );

            let resp = await fetch('http://localhost:8080/client-prompt-response',
            {
                method: "POST",
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({

                    message: message.message,
                    cipher: cipherUsed.message,
                    cipherToUse: cipherToUse.message

                })
            })

            // returns the new data added by default
            const data = await resp.json();

            console.log(data);

        }


    }

// CAN CHECK

    let canCheck;

    return(


        <div className={"flex flex-col mt-20 space-y-20"}>

            {/* USER INPUT SECTION */}
            <section className={"flex items-center justify-between space-x-6 w-4/5 m-auto"}>

                <div>
                    <UserInput key={1} icon={<AiFillMail className="w-5 h-5 text-gray-500" />} placeholder={"Message"} text={message} textChange={ (e)=>{setMessage({...message, message: e.target.value, error: message.error});} }/>
                </div>

                {/* CIPHER USED */}
                <div>
                    <Dropdown color={'bg-black'} text={'Dropdown'} items={['Caesar', 'Atbash', 'Rail Fence']} message={cipherUsed} cipherSelection={(cipher)=>{ setCipherUsed({...cipherUsed, message:cipher}) }}/>
                </div>

                {/* CIPHER TO USE */}
                <div>
                    <Dropdown color={'bg-green-300'} text={'Dropdown'} items={['Caesar', 'Atbash', 'Rail Fence']} message={cipherToUse} cipherSelection={(cipher)=>{ setCipherToUse({...cipherToUse, message:cipher}) }} />
                </div>

                <div>
                    <button type="button"
                            className={`inline-flex justify-center items-center space-x-4 px-5 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-blue-500`}
                            id="menu-button" aria-expanded="true" aria-haspopup="true"
                            onClick={sendMessage}>
                        <BsFillSendFill/>
                    </button>
                </div>

            </section>


            {/* SERVER MESSAGE SENT */}
            <section className={`${ isMessageSent ? 'hidden' : '' } flex items-center justify-center bg-green-100 w-4/5 m-auto rounded h-12`}>
                <p className={"text-green-500"}>MESSAGE BY SERVER</p>
            </section>


            {/* CLIENT DECRYPTION SECTION */}
            <section className={"flex items-center justify-center space-x-6 w-4/5 m-auto"}>
                <div>
                    <UserInput key={2} icon={<BsFillUnlockFill className="w-5 h-5 text-gray-500" />} placeholder={"Decrypted Message"} text={decryptionMessage} textChange={ (e)=>{setDecryptionMessage({ ...message, message: e.target.value});} } />
                </div>
                <div>
                    <button type="button"
                            className={`inline-flex justify-center items-center space-x-4 px-5 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-blue-500`}
                            id="menu-button" aria-expanded="true" aria-haspopup="true"
                    >
                        <BsFillSendFill/>
                    </button>
                </div>
            </section>

        </div>
    );
}

export default Inputs;