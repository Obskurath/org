import "./Form.css"
import TextForm from "../TextForm";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Form = () => {

    const manejarEnvio = (e) => {
        e.preventDefault()
    };

    return <section className="form">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <TextForm title="Nombre" placeholder="Ingresar nombre" required/>
            <TextForm title="Puesto" placeholder="Ingresar puesto" required/>
            <TextForm title="Foto" placeholder="Ingresar enlace de foto" required/>
            <ListaOpciones />
            <Boton>Crear</Boton>
        </form>
    </section>
};

export default Form;