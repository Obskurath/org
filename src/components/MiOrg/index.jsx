import { useState } from "react";
import "./MiOrg.css"

const MiOrg = () => {
    // Estado -> Hooks
    //hook -> useState
    //useState 
    console.log()
    //const[nombreVariable,funcionActualiza]
    const [mostrar, actualizarMostrar] = useState(true)
    
    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar)
    }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="Expandir formulario" onClick={manejarClick}/>
    </section>
};

export default MiOrg;