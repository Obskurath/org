import { useState } from "react"
import "./TextForm.css"

const TextForm = (props) => {

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="text-form">
        <label>{props.title}</label>
        <input
            placeholder={props.placeholder}
            required={props.required}
            value={props.valor} // Utiliza props.valor para establecer el valor del campo
            onChange={manejarCambio}
        />

    </div>
}

export default TextForm