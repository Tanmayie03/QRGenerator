import React from "react";
import { Button, Input, QRCode, Space } from "antd";
import igniteFireIcon from "../src/assets/images/igniteFire.png";
import illustrationIgnite from "../src/assets/images/illustration.png";

const downloadQRCode = () => {
  const qrCodeElement = document.getElementById("igniteqrcode");
  const qrCodeCanvas = qrCodeElement.querySelector("canvas");

  const padding = 20;
  const canvas = document.createElement("canvas");
  canvas.width = qrCodeCanvas.width + 2 * padding;
  canvas.height = qrCodeCanvas.height + 2 * padding;

  const context = canvas.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(qrCodeCanvas, padding, padding);
  const url = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.download = "QRCode.png";
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const App = () => {
  const [text, setText] = React.useState("https://ant.design/");
  console.log(text);
  return (
    <div
      id="igniteqrcode"
      className=" w-full h-screen  flex flex-col items-center p-6 justify-center bg-[#fff4f0]   ">
      <p className="text-3xl font-semibold text-center text-[#ff6246]">
        Generate QRCode
      </p>
      <div className="flex flex-col items-center justify-center px-4 py-4 my-4 bg-white rounded sm:px-8 md:flex-row md:rounded-xl h-fit w-fit">
        <img src={illustrationIgnite} className="w-56 md:w-80" />
        <div id="igniteqrcode" className="">
          <Space
            type="canvas"
            style={{ padding: "20px" }}
            className="flex flex-col items-center p-6 w-fit md:h-96 md:w-96">
            <label className="text-lg font-semibold  text-[#ff6246]">
              Enter Link here
            </label>
            <Input
              color="black"
              placeholder="Enter link"
              value={text}
              maxLength={60}
              className="w-64 px-4 py-1 mb-2 text-black border border-black outline-none"
              onChange={(e) => setText(e.target.value)}
            />

            <QRCode
              value={text || "-"}
              bgColor="white"
              fgColor="black"
              icon={igniteFireIcon}
              bordered="true"
              size={200}
              iconSize={50}
              level="H"
              style={{
                padding: "20px",
                margin: "20px",
                border: "2px solid black",
              }}
              className="border-2 border-black "
            />
            <Button
              className="w-48 bg-[#ff6246] hover:bg-[#ff6246  ] text-white p-1"
              onClick={downloadQRCode}>
              Download
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
