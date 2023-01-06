import React, { useState, useEffect } from "react";
import axios from "axios";
import Karakter from "./components/Karakter";
import Arama from "./components/Arama";

const App = () => {
  const [data, setData] = useState([]);
  const [expansion, setExpansion] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleVisibility() {
    expansion === false ? setExpansion(true) : setExpansion(false);
  }

  console.log(data);
  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {/*<Arama setSearchTerm={setSearchTerm} searchTerm={searchTerm}></Arama>*/}
      <input
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search by Name"
      ></input>
      <Karakter
        data={data}
        visibility={handleVisibility}
        expansion={expansion}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default App;
