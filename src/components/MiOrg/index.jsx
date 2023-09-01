import "./MiOrg.css"

const MiOrg = (props) => {
    // Estado -> Hooks
    //hook -> useState
    //useState 
       return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="Expandir formulario" onClick={props.cambiarMostrar}/>
    </section>
};

export default MiOrg;