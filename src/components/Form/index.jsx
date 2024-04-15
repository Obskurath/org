import { FaAddressCard } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { useState } from "react";
import "./Form.css";
import Field from "../Field";
import OptionList from "../OptionList";
import Button from "../Button";

const Form = (props) => {
  const [name, updateName] = useState("");
  const [job, updateJob] = useState("");
  const [photo, updatePhoto] = useState("");
  const [team, updateTeam] = useState("");

  const [isPartnerFormVisible, setIsPartnerFormVisible] = useState(true);

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const { addPartner, addTeam } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    let dataToSend = {
      name,
      job,
      photo,
      team,
    };

    if (isPartnerFormVisible) {
      addPartner(dataToSend);
    } else {
    }
  };

  const handleNewTeam = (e) => {
    e.preventDefault();
    addTeam({ title, primaryColor: color });
  };

  const toggleForm = () => {
    setIsPartnerFormVisible(!isPartnerFormVisible);
  };

  return (
    <section className="form">
      {isPartnerFormVisible ? (
        <form className="form-partner" onSubmit={handleSubmit}>
          <FaAddressCard className="add-team-icon" onClick={toggleForm} />
          <h2>Rellena el formulario para crear el colaborador.</h2>

          <Field
            title="Nombre"
            placeholder="Ingresar su nombre"
            required
            value={name}
            setValue={updateName}
          />
          <Field
            title="Puesto"
            placeholder="Ingresar su puesto"
            required
            value={job}
            setValue={updateJob}
          />
          <Field
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
            teams={props.teams}
          />
          <Button title="Crear" />
        </form>
      ) : (
        <form className="form-team" onSubmit={handleNewTeam}>
          <IoPersonAddSharp className="add-partner-icon" onClick={toggleForm} />
          <h2>Rellena el formulario para crear un equipo.</h2>
          <Field
            title="Equipo"
            placeholder="Ingresar nombre del equipo"
            required
            value={title}
            setValue={setTitle}
          />
          <Field
            title="Color"
            placeholder="Ingresar el color del equipo"
            required
            value={color}
            setValue={setColor}
            type="color"
          />
          <Button title="Registrar equipo" />
        </form>
      )}
    </section>
  );
};

export default Form;
