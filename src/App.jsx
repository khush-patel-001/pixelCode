import React from "react";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ContactPage from "./Pages/ContactPage/ContactPage";
import NoPage from "./Pages/NoPage/NoPage";
import CodeEditor from "./Pages/CodeEditor/CodeEditor";
import FrontendEditor from "./Pages/FrontendEditor/FrontendEditor";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
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
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
