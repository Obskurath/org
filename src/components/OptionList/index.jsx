import "./OptionList.css";

const OptionList = (props) => {
  return (
    <div className="option-list">
      <label>{props.title}</label>
      <select>
        <option>Programación</option>
        <option>Front End</option>
        <option>Data Science</option>
        <option>DevOps</option>
        <option>UX/UI</option>
        <option>Móvil</option>
        <option>Innovación y Gestión</option>
      </select>
    </div>
  );
};

export default OptionList;
