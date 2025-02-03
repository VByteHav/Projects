import React, { useState } from 'react';
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Generator = () => {
  const [password, setPassword] = useState("");

  // Function to generate a random password
  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let newPassword = "";
    for (let i = 0; i < 15; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  // Function to copy the generated password to clipboard
  const copyText = () => {
    if (password) {
      navigator.clipboard.writeText(password)
       toast('Copied to Clipboard!', {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  // transition: "Bounce"
              });
   
    } 
    else{

    }
  };

  return (
    <>
        <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
            // transition="Bounce"
            />
      <Navbar />
      <h1 className='text-4xl font-bold text-center'>
        <span className='text-green-500 '>  &lt;</span>
        <span>KO</span>
        <span className='text-green-500 '>DO!/ &gt;</span>
      </h1>
      <p className='text-green-900 text-lg text-center'>Your own Password Generator!</p>
      <div className="p-3 mycontainer min-h-[87.6vh]">
        <div className="p-4 bg-green-300 rounded-lg w-80 mx-auto text-center">
          <h2 className="text-lg font-bold mb-2">Random Password Generator</h2>

          <div className="mb-2 flex justify-around p-2 bg-white rounded border border-gray-300 text-lg font-mono">
            {/* Display password or a default text */}
            {password || "Click Generate"}

            {/* Copy icon */}
            <div className='lordiconcopy size-7 cursor-pointer' onClick={copyText}>
              <lord-icon
                style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                src="https://cdn.lordicon.com/iykgtsbt.json"
                trigger="hover">
              </lord-icon>
            </div>
          </div>
          <button
            onClick={generatePassword}
            className='rounded-full hover:bg-green-50 bg-green-100 w-full p-3 text-[17px]'
          >
            Generate Password
          </button>
        </div>
      </div>
  
    </>
  );
};

export default Generator;
