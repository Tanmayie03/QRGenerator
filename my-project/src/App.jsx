import React from "react";
import { Button, Input, QRCode, Space } from "antd";

const downloadQRCode = () => {
  const canvas = document
    .getElementById("igniteqrcode")
    ?.querySelector("canvas");
  if (canvas) {
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.download = "QRCode.png";
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};

const App = () => {
  const [text, setText] = React.useState(
    "https://www.ignitestudentassociation.com"
  );
  return (
    <div id="igniteqrcode">
      <Space type="canvas" className="flex flex-col items-center">
        <QRCode
          value={text || "-"}
          bgColor="white"
          icon="../src/assets/images/igniteFire.png"
          bordered="true"
          size={200}
          level="H"
          className="border-2 border-black "
        />
        <Input
          color="black"
          placeholder="Enter link"
          className="text-black"
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="primary" onClick={downloadQRCode}>
          Download
        </Button>
      </Space>
    </div>
  );
};

export default App;
