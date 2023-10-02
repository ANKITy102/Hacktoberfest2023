import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './CodeBox.css'; // You can create a separate CSS file for styling


const CssCopy = () => {
    const [code, setCode] = useState(`

    // Styled Components

    Box:
      padding: 80px 60px;
      background: black;
      position: absolute;
      top: 200px;
      width: 100%;
    
      @media (max-width: 1000px) {
        padding: 70px 30px;
      }
    
    Container:
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 1000px;
      margin: 0 auto;
    
    Column:
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-left: 60px;
    
    Row:
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
      grid-gap: 20px;
    
      @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      }
    
    FooterLink:
      color: #fff;
      margin-bottom: 20px;
      font-size: 18px;
      text-decoration: none;
    
      &:hover {
        color: green;
        transition: 200ms ease-in;
      }
    
    Heading:
      font-size: 24px;
      color: #fff;
      margin-bottom: 40px;
      font-weight: bold;
    

    `);

  const handleCopy = () => {
    alert('Code has been copied to clipboard!');
  };

  return (
    <div className="code-box">
         <h1>CSS Code for Footer</h1>
      <pre>{code}</pre>
      <CopyToClipboard text={code} onCopy={handleCopy}>
        <button>Copy Code</button>
      </CopyToClipboard>
    </div>
  );
};

export default CssCopy;
