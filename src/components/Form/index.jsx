import { useState } from "react";
import "./Form.css";
import TextField from "../TextField";
import OptionList from "../OptionList";
import Button from "../Button";

const Form = () => {
  const [name, updateName] = useState("");
  const [job, updateJob] = useState("");
  const [photo, updatePhoto] = useState("");
  const [team, updateTeam] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let dataToSend = {
      name,
      job,
      photo,
      team,
    };
    console.log(dataToSend);
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Rellena el formulario de para crear el colaborador.</h2>
        <TextField
          title="Nombre"
          placeholder="Ingresar su nombre"
          required
          value={name}
          setValue={updateName}
        />
        <TextField
          title="Puesto"
          placeholder="Ingresar su puesto"
          required
          value={job}
          setValue={updateJob}
        />
        <TextField
          title="Foto"
          placeholder="Ingresar link de la foto"
          required
          value={photo}
          setValue={updatePhoto}
        />
        <OptionList
          title="Equipo"
          placeholder="Seleccione su equipo"
          value={team}
          updateTeam={updateTeam}
        />
        <Button title="Crear" />
      </form>
    </section>
  );
};

export default Form;
