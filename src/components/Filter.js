import React from 'react'

function Filter({getFilter}) {

  return (
    <div>
      <select className="select" onChange={getFilter}>
        <option value="">All</option>
        <option value="Bug">Bug</option>
        <option value="Dragon">Dragon</option>
        <option value="Electric">Electric</option>
        <option value="Fairy">Fairy</option>
        <option value="Fire">Fire</option>
        <option value="Flying">Flying</option>
        <option value="Fighting">Fighting</option>
        <option value="Ghost">Ghost</option>
        <option value="Grass">Grass</option>
        <option value="Ground">Ground</option>
        <option value="Ice">Ice</option>
        <option value="Normal">Normal</option>
        <option value="Poison">Poison</option>
        <option value="Psychic">Psychic</option>
        <option value="Rock">Rock</option>
        <option value="Steel">Steel</option>
        <option value="Water">Water</option>
      </select>
    </div>
  )
}

export default Filter
