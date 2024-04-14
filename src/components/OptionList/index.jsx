import "./OptionList.css";

const OptionList = (props) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    props.updateTeam(e.target.value);
  };

  return (
    <div className="option-list">
      <label>Equipos</label>
      <select value={props.value} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {props.teams.map((team, index) => {
          return (
            <option key={index} value={team}>
              {team}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default OptionList;
