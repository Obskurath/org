import "./TextForm.css"

const TextForm = (props) => {
    console.log("Datos: ",props.title)
    return <div className="text-form">
        <label>{props.title}</label>
        <input placeholder={props.placeholder}/>
        </div>
}

export default TextForm