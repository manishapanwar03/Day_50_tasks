import React, { useState, useEffect } from "react";
import './Jokes.css'
function Jokes() {
  const [joke, setJoke] = useState("");

  const fetchNewJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      }
    })
      .then(r => r.json())
      .then(d => setJoke(d.joke));
  };

  useEffect(fetchNewJoke, []);

  return (
    <div className="container">
       <h3>Don't Laugh Challenge</h3>
      <div id='joke' className='joke'>{joke}
   </div>
      <button  id='jokebtn' className='btn'   onClick={fetchNewJoke}>Get another way!!!!</button>
    </div>
  );
}

export default Jokes;
