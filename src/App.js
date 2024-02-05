import "./App.css";
import Child from "./Components/Child";

function App() {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];

  const physicist = people.filter(
    (person) => person.profession === "physicist"
  );

  let displayItems = physicist.map((person) => (
    <>
      <h1>the name is {person.name}</h1>
      <br /> <h3> person id is {person.id}</h3>
    </>
  ));
  return (
    <>
      <ul>{displayItems}</ul>
    </>
  );
}

export default App;
