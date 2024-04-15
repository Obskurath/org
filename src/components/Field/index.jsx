import "./Field.css";

const Field = (props) => {
  const { type = "text" } = props;

  const handleChange = (e) => {
    props.setValue(e.target.value);
  };

  return (
    <div className={`field field-${type}`}>
      <label>{props.title}</label>
      <input
        type={type}
        placeholder={props.placeholder}
        required={props.required}
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Field;
