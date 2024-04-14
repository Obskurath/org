import "./Team.css";

const Team = (props) => {
  const { primaryColor, secondaryColor, title } = props.data;

  const obj = {
    backgroundColor: secondaryColor,
  };

  const titleStyle = { borderColor: primaryColor };

  return (
    <section className="team" style={obj}>
      <h3 style={titleStyle}>{title}</h3>
      <div className="partners"></div>
    </section>
  );
};

export default Team;
