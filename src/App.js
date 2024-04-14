import { useState } from "react";
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
    },
    {
      team: "Front End",
      photo: "https://github.com/harlandlohora.png",
      name: "Harland Lohora",
      job: "Instructor",
    },
    {
      team: "Programación",
      photo: "https://github.com/JeanmarieAluraLatam.png",
      name: "Jean Marie",
      job: "Desarrolladora de software e instructora",
    },
    {
      team: "UX y Diseño",
      photo: "https://github.com/JeanmarieAluraLatam.png",
      name: "Jeanmarie Quijada",
      job: "Instructora en Alura Latam",
    },
    {
      team: "Programación",
      photo: "https://github.com/christianpva.png",
      name: "Christian Velasco",
      job: "Head de Alura e Instructor",
    },
    {
      team: "Innovación y Gestión",
      photo: "https://github.com/JoseDarioGonzalezCha.png",
      name: "Jose Gonzalez",
      job: "Dev FullStack",
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
  const removePartner = () => {
    console.log("Remove partner");
  };

  // Team List
  const teams = [
    {
      title: "Programación",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      title: "DevOps",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      title: "UX/UI",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      title: "Móvil",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      title: "Innovación y Gestión",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
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
