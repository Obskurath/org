import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) => {
    // Estado -> Hooks
    //hook -> useState
    //useState 
    //const[nombreVariable,funcionActualiza] = useState(valorInicial)
    console.log(props)
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="Expandir formulario" onClick={props.cambiarMostrar}/>
    </section>
};

export default MiOrg;