import "./OptionList.css";

const OptionList = () => {
  const teams = [
    "Programación",
    "Front End",
    "Data Science",
    "DevOps",
    "UX/UI",
    "Móvil",
    "Innovación y Gestión",
  ];

  return (
    <div className="option-list">
      <label>Equipos</label>
      <select>
        {teams.map((team, index) => {
          return <option key={index}>{team}</option>;
        })}
      </select>
    </div>
  );
};

export default OptionList;
