import "./Team.css";
import Partner from "../Partner";
import hexToRgba from "hex-to-rgba";

const Team = (props) => {
  const { primaryColor, secondaryColor, title, id } = props.data;
  const { partners, removePartner, like, updateColor } = props;
  const obj = {
    backgroundColor: hexToRgba(primaryColor, 0.4),
  };

  const titleStyle = { borderColor: primaryColor };

  return (
    <>
      {partners.length > 0 && (
        <section className="team" style={obj}>
          <input
            type="color"
            className="input-color"
            value={primaryColor}
            onChange={(evento) => {
              updateColor(evento.target.value, id);
            }}
          />
          <h3 style={titleStyle}>{title}</h3>
          <div className="partners">
            {partners.map((partner, index) => (
              <Partner
                data={partner}
                key={index}
                primaryColor={primaryColor}
                removePartner={removePartner}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Team;
