import React, { useState, useEffect } from "react";
import Card from "./Card";
import Carousel from "./Carousel";
import "../style.css";
import axios from "axios";

const Body = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const responce = await axios.get("https://breakingbadapi.com/api/characters");
    const fetchedData = await responce.data;
    setData(fetchedData);
    console.log(responce.data[0].img);
  }, []);

  return (
    <div className="body">
      <Carousel />
      <div className="cards">
        <h3>Characters</h3>
        {data.map(
          (character) =>
            character.appearance.length !== 0 && (
              <Card character={character} key={character.char_id} />
            )
        )}
      </div>
    </div>
  );
};

export default Body;
