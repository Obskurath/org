import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import MiOrg from "./components/MiOrg";

function App() {
  const [showForm, updateShow] = useState(true);

  //Ternario => conidcion ? seMuestra : noSeMuestra

  const changeShow = () => {
    updateShow(!showForm);
  };

  return (
    <div>
      <Header />
      <div className={`form-container ${showForm ? "show" : "hide"}`}>
        <Form />
      </div>
      <MiOrg changeShow={changeShow} />
    </div>
  );
}

export default App;
