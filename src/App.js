import React, { useState, useEffect } from "react";
import axios from "axios";
import Karakter from "./components/Karakter";
import Arama from "./components/Arama";
import Butonlar from "./components/Butonlar";
import Header from "./components/Header";

const App = () => {
  const [data, setData] = useState([]);
  const [expansion, setExpansion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/?page=" + page)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  function handleVisibility(name) {
    setExpansion(name === expansion ? null : name);
  }

  function handlePage(clickedPageNumber) {
    setPage(clickedPageNumber);
  }
  return (
    <div className="App">
      <Header></Header>
      <Arama searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Arama>
      <Butonlar
        page={page}
        setPage={setPage}
        handlePage={handlePage}
      ></Butonlar>
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
