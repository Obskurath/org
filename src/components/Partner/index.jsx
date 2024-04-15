import "./Partner.css";
import { MdDeleteForever } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Partner = (props) => {
  const { name, job, photo, id, fav } = props.data;
  const { primaryColor, removePartner, like } = props;
  return (
    <div className="partner">
      <div className="header" style={{ backgroundColor: primaryColor }}>
        <img src={photo} alt={name} />
        <MdDeleteForever
          onClick={() => removePartner(id)}
          className="delete-icon"
        />
      </div>
      <div className="info">
        {fav ? (
          <FaHeart
            color="red"
            onClick={() => like(id)}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <FaRegHeart onClick={() => like(id)} style={{ cursor: "pointer" }} />
        )}

        <h4>{name}</h4>
        <h5>{job}</h5>
      </div>
    </div>
  );
};

export default Partner;
