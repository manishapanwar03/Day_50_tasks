import React, { useState, useEffect } from "react";
import axios from "axios";
import './Jokes.css';

function Jokes() {
  const [joke, setJoke] = useState("");

  const fetchNewJoke = () => {
    axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => {
        setJoke(response.data.joke);
        
      })
      .catch(error => {
        console.error("Error fetching joke:", error);
      });
  };

  useEffect(() => {
    fetchNewJoke();
  }, []);

  return (  
    <div className="container">
       <h3>Don't Laugh Challenge</h3>
      <div id='joke' className='joke'>{joke}</div>
      <button id='jokebtn' className='btn' onClick={fetchNewJoke}>Get another way!!!!</button>
    </div>
  );
}

export default Jokes;
