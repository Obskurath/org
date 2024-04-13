import "./OptionList.css";

const OptionList = () => {
  // Map => arreglo.map ((team, index) => {
  //
  // })
  const teams = [
    "Programación",
    "Front End",
    "Data Science",
    "DevOps",
    "UX/UI",
    "Móvil",
    "Innovación y Gestión",
  ];

  console.log(teams);

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
