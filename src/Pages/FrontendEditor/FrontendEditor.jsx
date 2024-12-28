import React, { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import Navbar from "../../Components/Navbar/Navbar";
import copy_icon from "../../assets/copy-icon.svg";
import check_icon from "../../assets/check-icon.svg";

const FrontendEditor = () => {
  const [htmlValue, setHtmlValue] = useState("<h1>Hello world!</h1>");
  const [cssValue, setCssValue] = useState("h1 { color: red; }");
  const [javascriptValue, setJavascriptValue] = useState(
    "console.log('Hello world!');"
  );
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${htmlValue}</body>
          <style>${cssValue}</style>
          <script>${javascriptValue}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [htmlValue, cssValue, javascriptValue]);

  const handleCopyHtml = () => {
    navigator.clipboard.writeText(htmlValue);
    const defaultMessage = document.getElementById("default-message-html");
    const successMessage = document.getElementById("success-message-html");

    defaultMessage.classList.add("hidden");
    successMessage.classList.remove("hidden");
    setTimeout(() => {
      defaultMessage.classList.remove("hidden");
      successMessage.classList.add("hidden");
    }, 2000);
  };

  const handleCopyCss = () => {
    navigator.clipboard.writeText(cssValue);
    const defaultMessage = document.getElementById("default-message-css");
    const successMessage = document.getElementById("success-message-css");

    defaultMessage.classList.add("hidden");
    successMessage.classList.remove("hidden");
    setTimeout(() => {
      defaultMessage.classList.remove("hidden");
      successMessage.classList.add("hidden");
    }, 2000);
  };

  const handleCopyJavascript = () => {
    navigator.clipboard.writeText(javascriptValue);
    const defaultMessage = document.getElementById("default-message-javascript");
    const successMessage = document.getElementById("success-message-javascript");

    defaultMessage.classList.add("hidden");
    successMessage.classList.remove("hidden");
    setTimeout(() => {
      defaultMessage.classList.remove("hidden");
      successMessage.classList.add("hidden");
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <div className="left md:h-[42vh] m-2 gap-2 md:flex">
          <div className="flex flex-grow-[1] basis-0 flex-col md:w-[33vw] md:h-full h-80 w-full md:pb-0 md:bg-cover pb-2 overflow-hidden">
            <div className="flex justify-between text-center rounded-t-md bg-black">
              <div className="px-3 py-2 text-sky-500">HTML</div>
              <a
                className="h-10 rounded-md overflow-hidden cursor-pointer hover:bg-slate-800 mr-2"
                onClick={handleCopyHtml}
              >
                <img
                  src={copy_icon}
                  alt="copy_icon"
                  className="h-full p-2"
                  id="default-message-html"
                />
                <img
                  src={check_icon}
                  alt="check_icon"
                  className="h-full p-2"
                  id="success-message-html"
                />
              </a>
            </div>
            <Editor
              height="100%"
              width="100%"
              defaultLanguage="html"
              theme="vs-dark"
              defaultValue="<h1>Hello world!</h1>"
              value={htmlValue}
              onChange={(newValue) => setHtmlValue(newValue || "")}
              className="flex-grow-[1] rounded-b-md overflow-hidden"
            />
          </div>
          <div className="flex flex-grow-[1] basis-0 flex-col md:w-[33vw] md:h-full h-80 w-full md:pb-0 pb-2 overflow-hidden">
            <div className="flex justify-between text-center rounded-t-md bg-black">
              <div className="px-3 py-2 text-sky-500">CSS</div>
              <a
                className="h-10 rounded-md overflow-hidden cursor-pointer hover:bg-slate-800 mr-2"
                onClick={handleCopyCss}
              >
                <img
                  src={copy_icon}
                  alt="copy_icon"
                  className="h-full p-2"
                  id="default-message-css"
                />
                <img
                  src={check_icon}
                  alt="check_icon"
                  className="h-full p-2"
                  id="success-message-css"
                />
              </a>
            </div>
            <Editor
              height="100%"
              width="100%"
              defaultLanguage="css"
              theme="vs-dark"
              defaultValue="h1 { color: red; }"
              value={cssValue}
              onChange={(newValue) => setCssValue(newValue || "")}
              className="flex-grow-[1] rounded-b-md overflow-hidden"
            />
          </div>
          <div className="flex flex-grow-[1] basis-0 flex-col md:w-[33vw] md:h-full h-80 w-full md:pb-0 pb-2 overflow-hidden">
            <div className="flex justify-between text-center rounded-t-md bg-black">
              <div className="px-3 py-2 text-sky-500">JavaScript</div>
              <a
                className="h-10 rounded-md overflow-hidden cursor-pointer hover:bg-slate-800 mr-2"
                onClick={handleCopyJavascript}
              >
                <img
                  src={copy_icon}
                  alt="copy_icon"
                  className="h-full p-2"
                  id="default-message-javascript"
                />
                <img
                  src={check_icon}
                  alt="check_icon"
                  className="h-full p-2"
                  id="success-message-javascript"
                />
              </a>
            </div>
            <Editor
              height="100%"
              width="100%"
              defaultLanguage="javascript"
              theme="vs-dark"
              defaultValue="console.log('Hello world!');"
              value={javascriptValue}
              onChange={(newValue) => setJavascriptValue(newValue || "")}
              className="flex-grow-[1] rounded-b-md overflow-hidden"
            />
          </div>
        </div>
        <div className="right md:h-[44.5vh] h-96 w-full bg-white">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </>
  );
};

export default FrontendEditor;
