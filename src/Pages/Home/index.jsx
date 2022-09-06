import React from "react";
import { useNavigate } from "react-router-dom";

import Button from '../../Components/Button/index.jsx';

import "./style.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/datalist");
  };
  
  return (
    <div className="home">
      <h1>Hi, Welcome!</h1>
      <p className="subtitle">Click button below to continue!</p>
      <Button title="Click Here!" onClick={handleClick} padding={25} />
    </div>
  );
};

export default Home;
