import "./Partner.css";
import { MdDeleteForever } from "react-icons/md";

const Partner = (props) => {
  const { name, job, photo, team } = props.data;
  const { primaryColor, removePartner } = props;
  return (
    <div className="partner">
      <div className="header" style={{ backgroundColor: primaryColor }}>
        <img src={photo} alt={name} />
        <MdDeleteForever onClick={removePartner} className="delete-icon" />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <h5>{job}</h5>
      </div>
    </div>
  );
};

export default Partner;
