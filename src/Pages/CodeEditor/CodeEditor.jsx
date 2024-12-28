import React, { useRef, useState, useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import { Link, useLocation } from "react-router-dom";
import programmingLanguages from "../../Languages.js";
import codeSnippets from "../../CodeSnippets.js";
import Navbar from "../../Components/Navbar/Navbar";
import house_icon from "../../assets/house-icon.svg";
import copy_icon from "../../assets/copy-icon.svg";
import reset_icon from "../../assets/reset-icon.svg";
import check_icon from "../../assets/check-icon.svg";
import axios from "axios";

const CodeEditor = () => {
  const editorRef = useRef();
  const location = useLocation();
  const languages = Object.entries(programmingLanguages);
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [output, setOutput] = useState(null);

  const languageVersion = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "6.12.0",
    php: "8.2.3",
    c: "10.2.0",
    cpp: "10.2.0",
    rust: "1.68.2",
    ruby: "3.0.1",
    go: "1.16.2",
    kotlin: "2.0.20",
    r: "4.2.2",
    swift: "5.0.2",
    perl: "5.40.0",
    dart: "3.6.0",
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const selectedLanguage = queryParams.get("language");
    if (selectedLanguage && selectedLanguage in programmingLanguages) {
      setLanguage(selectedLanguage);
    } else {
      setLanguage("javascript");
    }
  }, [location]);

  useEffect(() => {
    const code = codeSnippets[language];
    setValue(code);
  }, [language]);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const executeCode = async (language, sourceCode) => {
    const API = axios.create({
      baseURL: "https://emkc.org/api/v2/piston",
    });
    const response = await API.post("/execute", {
      language: language,
      version: languageVersion[language],
      files: [
        {
          content: sourceCode,
        },
      ],
    });
    return response.data;
  };

  const runCode = async (e) => {
    e.preventDefault();
    const sourceCode = editorRef.current ? editorRef.current.getValue() : "";
    if (!sourceCode) return;

    try {
      setLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setError(true) : setError(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    const defaultMessage = document.getElementById("default-message");
    const successMessage = document.getElementById("success-message");

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
      <div className="md:flex">
        <div className="left md:w-[50%] w-[96%] ml-4 mr-2">
          <div className="flex flex-row gap-5 my-2">
            <select
              id="languages"
              className="text-md p-3 rounded-md block  text-[#161616] group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 cursor-pointer"
              onChange={(e) => setLanguage(e.target.value)}
              value={language}
            >
              {languages.map(([key, language]) => (
                <option
                  value={language}
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#161616] rounded-md"
                >
                  {language}
                </option>
              ))}
            </select>
            <Link
              to="/"
              className="h-10 rounded-md overflow-hidden ml-2 hover:bg-slate-800 transition-all"
            >
              <img src={house_icon} alt="house_icon" className="h-full p-2" />
            </Link>
            <a
              className="h-10 rounded-md overflow-hidden cursor-pointer hover:bg-slate-800"
              onClick={() => setValue("")}
            >
              <img src={reset_icon} alt="reset_icon" className="h-full p-2" />
            </a>
            <a
              className="h-10 rounded-md overflow-hidden cursor-pointer hover:bg-slate-800"
              onClick={handleCopy}
            >
              <img
                src={copy_icon}
                alt="copy_icon"
                className="h-full p-2"
                id="default-message"
              />
              <img
                src={check_icon}
                alt="check_icon"
                className="h-full p-2"
                id="success-message"
              />
            </a>
          </div>

          <div className="h-[79vh] rounded-lg overflow-hidden border-solid border-[1px] border-[#3d3d3d]">
            <Editor
              key={language}
              height="100%"
              width="100%"
              theme="vs-dark"
              language={language}
              defaultValue={value}
              value={value}
              onMount={onMount}
              onChange={(newValue) => setValue(newValue)}
            />
          </div>
        </div>
        <div className="right md:w-[50%] w-[96%] mr-4 md:ml-0 ml-4 md:mb-0 flex flex-col justify-between">
          <div className="flex flex-row gap-7 my-2">
            <span className="text-lg ml-2 flex items-center">Output:</span>
            <button
              className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-[#161616] rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              onClick={runCode}
              isLoading={loading}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#161616] rounded-md group-hover:bg-opacity-0">
                {loading ? "Running..." : "Run Code"}
              </span>
            </button>
          </div>
          <div
            className={`h-[79vh] rounded-lg overflow-hidden bg-[#1f1f1f] border-[#3d3d3d] border-solid border-[1px] p-3 ${
              loading ? "animate-pulse" : ""
            }`}
          >
            {error ? (
              <p>Error: {output}</p>
            ) : output ? (
              <p>{output}</p>
            ) : (
              'Click "Run Code" to see the output here'
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeEditor;
