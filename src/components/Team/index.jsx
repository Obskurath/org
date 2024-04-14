import "./Team.css";
import Partner from "../Partner";

const Team = (props) => {
  const { primaryColor, secondaryColor, title } = props.data;
  const { partners, removePartner } = props;

  const obj = {
    backgroundColor: secondaryColor,
  };

  const titleStyle = { borderColor: primaryColor };

  return (
    <>
      {partners.length > 0 && (
        <section className="team" style={obj}>
          <h3 style={titleStyle}>{title}</h3>
          <div className="partners">
            {partners.map((partner, index) => (
              <Partner
                data={partner}
                key={index}
                primaryColor={primaryColor}
                removePartner={removePartner}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Team;
