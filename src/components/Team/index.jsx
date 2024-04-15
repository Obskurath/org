import "./Team.css";
import Partner from "../Partner";
import hexToRgba from "hex-to-rgba"; // Add missing import statement

const Team = (props) => {
  const { primaryColor, title, id, color } = props.data;
  const { partners, removePartner, like, updateColor } = props;

  const obj = {
    backgroundColor: hexToRgba(primaryColor, "0.3"),
  };

  const titleStyle = { borderColor: primaryColor };

  return (
    <>
      {partners.length > 0 && (
        <section className="team" style={obj}>
          <input
            type="color"
            value={hexToRgba(primaryColor, "0.3")}
            onChange={(e) => {
              console.log(e.target.value);
              updateColor(e.target.value, title, id);
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
