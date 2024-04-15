import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import MiOrg from "./components/MiOrg";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const [showForm, updateShow] = useState(false);
  const [partners, updatePartners] = useState([
    {
      team: "DevOps",
      photo: "https://github.com/obskurath.png",
      name: "Eduardo Valencia",
      job: "Estudiante",
      id: uuidv4(),
    },
    {
      team: "Front End",
      photo: "https://github.com/harlandlohora.png",
      name: "Harland Lohora",
      job: "Instructor",
      id: uuidv4(),
    },
    {
      team: "Programación",
      photo: "https://github.com/JeanmarieAluraLatam.png",
      name: "Jean Marie",
      job: "Desarrolladora de software e instructora",
      id: uuidv4(),
    },
    {
      team: "UX y Diseño",
      photo: "https://github.com/JeanmarieAluraLatam.png",
      name: "Jeanmarie Quijada",
      job: "Instructora en Alura Latam",
      id: uuidv4(),
    },
    {
      team: "Programación",
      photo: "https://github.com/christianpva.png",
      name: "Christian Velasco",
      job: "Head de Alura e Instructor",
      id: uuidv4(),
    },
    {
      team: "Innovación y Gestión",
      photo: "https://github.com/JoseDarioGonzalezCha.png",
      name: "Jose Gonzalez",
      job: "Dev FullStack",
      id: uuidv4(),
    },
  ]);

  //Ternario => conidcion ? seMuestra : noSeMuestra

  const changeShow = () => {
    updateShow(!showForm);
  };

  //Add partner
  const addPartner = (partner) => {
    console.log("New partner", partner);
    // Spread Operator
    updatePartners([...partners, partner]);
  };

  // Remove partner
  const removePartner = (id) => {
    console.log("Remove partner", id);
    const newPartners = partners.filter((partner) => partner.id !== id);
    updatePartners(newPartners);
  };

  // Team List
  const teams = [
    {
      title: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
      id: uuidv4(),
    },
    {
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
      id: uuidv4(),
    },
    {
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
      id: uuidv4(),
    },
    {
      title: "DevOps",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
      id: uuidv4(),
    },
    {
      title: "UX/UI",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
      id: uuidv4(),
    },
    {
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
      id: uuidv4(),
    },
    {
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
      id: uuidv4(),
    },
  ];

  return (
    <div>
      <Header />
      <div className={`form-container ${showForm ? "show" : "hide"}`}>
        <Form teams={teams.map((team) => team.title)} addPartner={addPartner} />
      </div>

      <MiOrg changeShow={changeShow} />

      {teams.map((team) => (
        <Team
          data={team}
          key={team.title}
          partners={partners.filter((partner) => partner.team === team.title)}
          removePartner={removePartner}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
