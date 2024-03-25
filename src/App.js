import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import TextForm from "./components/text";
import Alert from "./components/alert";
import Footer from "./components/footer";
import About from "./components/about";
import Contact from "./components/contact";
import './App.css'

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar title="TextUtils" about="About Us" />
      <Alert alert={alert} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <TextForm
              heading="TextUtis - Word Counter, Character Counter, Remove Extra Space"
              summaryHead="Summary Of Your Text"
              showAlert={showAlert}
            />
          }
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>

      <Footer creatorname="Sanjay Varma" />
    </>
  );
}

export default App;
