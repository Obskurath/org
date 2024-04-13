import "./Form.css";
import TextField from "../TextField";
import OptionList from "../OptionList";

const Form = () => {
  return (
    <section className="form">
      <form action="">
        <h2>Rellena el formulario de para crear el colaborador.</h2>
        <TextField title="Nombre" placeholder="Ingresar su nombre" />
        <TextField title="Puesto" placeholder="Ingresar su puesto" />
        <TextField title="Foto" placeholder="Ingresar link de la foto" />
        <OptionList title="Equipo" placeholder="Seleccione su equipo" />
      </form>
    </section>
  );
};

export default Form;
