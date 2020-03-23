import React, { useState, useEffect } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode(false);

  return (
    <nav className="navbar">
      <h1>Womens World Cup Players</h1>
      <div className="dark-mode-container">
        <div
          onClick={toggleDarkMode}
          className={darkMode ? "dark-mode" : "day-mode"}
        />
      </div>
    </nav>
  );
};

export default Navbar;