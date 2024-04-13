import "./Form.css";
import TextField from "../TextField";

const Form = () => {
  return (
    <section className="form">
      <form action="">
        <h2>Rellena el formulario de para crear el colaborador.</h2>
        <TextField className="Name" />
      </form>
    </section>
  );
};

export default Form;
