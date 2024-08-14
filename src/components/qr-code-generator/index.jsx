import { useState } from "react";
import QRCode from "react-qr-code";
export default function QRCodeGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  function handleGeneratorQrCode(){
    setQrCode(input)
  }
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input 
        type="text" 
        placeholder="Enter your value here"
        value={input}
        onChange={(e)=>setInput(e.target.value)} 
        />
        <button 
        onClick={handleGeneratorQrCode}
        disabled={input&&input.trim()!==""?false:true}
        >Generator</button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff"/>
      </div>
    </div>
  );
}
