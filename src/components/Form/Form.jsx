import "./Form.css"
import TextForm from "../TextForm";
import ListaOpciones from "../ListaOpciones";

const Form = () => {
    return <section className="form">
        <form action="">
            <h2>Rellena el formulario para crear el colaborador</h2>
            <TextForm title = "Nombre" placeholder = "Ingresar nombre"/>
            <TextForm title = "Puesto" placeholder = "Ingresar puesto"/>
            <TextForm title = "Foto" placeholder = "Ingresar enlace de foto"/>
            <ListaOpciones />
        </form>
        </section>
}

export default Form;