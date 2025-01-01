import React from "react";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ContactPage from "./Pages/ContactPage/ContactPage";
import CodeEditor from "./Pages/CodeEditor/CodeEditor";
import FrontendEditor from "./Pages/FrontendEditor/FrontendEditor";
import { Routes, Route, BrowserRouter } from "react-router-dom";
window.process = window.process || { env: { PUBLIC_URL: "" } };
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/frontend-editor" element={<FrontendEditor />} />
          <Route path="/editor" element={<CodeEditor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
