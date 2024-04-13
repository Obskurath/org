import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
  const [display, toggleDisplay] = useState(true);

  const handleClick = () => {
    toggleDisplay(!display);
  };

  return (
    <section className="org-section">
      <h3 className="title">Mi Organización</h3>
      <img
        onClick={props.changeShow}
        src="/img/button-add.png"
        alt="Botón para agregar"
      />
    </section>
  );
};

export default MiOrg;
