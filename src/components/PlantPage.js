import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, handleSubmit, filterPlant}) {
  const plantlists = plants.map((plant)=> (
    <PlantList key={plant.id} plant={plant} />
  ))
  return (
    <main>
      <NewPlantForm handleSubmit={handleSubmit}/>
      <Search filterPlant={filterPlant}/>
      {plantlists}
    </main>
  );
}

export default PlantPage;
