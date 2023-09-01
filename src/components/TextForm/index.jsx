import "./TextForm.css"

const TextForm = (props) => {
    return <div className="text-form">
        <label>{props.title}</label>
        <input placeholder={props.placeholder} required= {props.required}/>
        </div>
}

export default TextForm