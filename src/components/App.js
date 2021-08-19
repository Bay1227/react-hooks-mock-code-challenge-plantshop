import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const plantAPI = "http://localhost:6001/plants";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};


function App() {
  const[plants, setPlants] = useState([])
  const [searchPlant, setSearchPlant] = useState('')

  useEffect(() =>{
    fetch(plantAPI)
    .then ((r)=> r.json())
    .then(data => setPlants(data))

  },[] )

  function filterPlant(searchPlant){
    const plants = plants.filter((plant)=> plant.name.toLowerCase().includes(searchPlant.toLowerCase()))
    // setSearchPlant(search)
    console.log(searchPlant)
  }

  function addNewPlant(plant){
    fetch(plantAPI, {
      method: 'POST',
      body: JSON.stringify(plant),
      headers,
    })
    .then((r)=> r.json())
    .then((json)=> setPlants([...plants, json]))
  }



  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} handleSubmit={addNewPlant} filterPlant={filterPlant} />
    </div>
  );
}

export default App;
