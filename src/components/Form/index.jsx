import "./Form.css";
import TextField from "../TextField";
import OptionList from "../OptionList";
import Button from "../Button";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Rellena el formulario de para crear el colaborador.</h2>
        <TextField title="Nombre" placeholder="Ingresar su nombre" required />
        <TextField title="Puesto" placeholder="Ingresar su puesto" required />
        <TextField title="Foto" placeholder="Ingresar link de foto" required />
        <OptionList title="Equipo" placeholder="Seleccione su equipo" />
        <Button title="Crear" />
      </form>
    </section>
  );
};

export default Form;
