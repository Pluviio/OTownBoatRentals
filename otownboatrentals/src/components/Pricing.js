import React from "react";
import { Link } from 'react-router-dom';
import '../css files/pricing.css'

const Pricing = () => {
  return (
    <div>

      <h1> Prices </h1>

      <div className="boatPriceTitle">

        <h2> Boat Price </h2>

      </div>


      <div className="boatPrice">



        <ul>

          <li> Three hour minimum for $300 </li>
          <li> $80 per hour after three hour minimum </li>
          <li> $650 on weekdays for eight hours </li>
          <li> $700 on weekends for eight hours </li>
          <li> $250 deposit for boat </li>

        </ul>
      </div>

    </div>
  );
};


export default Pricing;