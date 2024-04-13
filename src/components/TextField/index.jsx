import "./TextField.css";

const TextField = (props) => {
  const handleChange = (e) => {
    props.setValue(e.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.title}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        required={props.required}
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextField;
