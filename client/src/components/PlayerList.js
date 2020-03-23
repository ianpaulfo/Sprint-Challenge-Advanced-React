import React, { useState, useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";


const PlayerList = (props) => {
    const [ darkMode, toggleDarkMode ] = useDarkMode('dark-mode', false);

    return (
        <nav className={darkMode === true ? 'player-list dark-mode' : 'player-list'}>
            <h1>Womens World Cup Players</h1>
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
           
            {props.players.map( item => (
        <div className={darkMode === true ? 'player-card dark-mode' : 'player-card'}>
            <h1>{item.name}</h1>
            <h3>{item.country}</h3>
            <h4>Searches: {item.searches}</h4>
            </div>))}
           
        </nav>
  );
};
export default PlayerList;
