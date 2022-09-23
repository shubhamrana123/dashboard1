
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QrCode = (props:any) => {
  const [url, setUrl] = useState("");

  const downloadQRCode = (e:any) => {
    e.preventDefault();
console.log(e);

    setUrl("");
  };

  const qrCodeEncoder = (e:any) => {
    setUrl(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={props.formData}
      size={200}
      bgColor={"#00ff00"}
      level={"H"}
    />
  );
  return (
    <div className="qrcode__container">
      <div>{qrcode}</div>
      <div className="input__group">
{/*         <form onSubmit={downloadQRCode}>
          <label>Enter URL</label>
          <input
            type="text"
            value={props.formData}
            onChange={qrCodeEncoder}
            placeholder="https://hackernoon.com"
          />
          <button type="submit" disabled={!url}>
            Download QR code
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default QrCode; 
 
