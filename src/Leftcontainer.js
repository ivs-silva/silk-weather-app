import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function Leftcontainer(){
    return(
        <div className="row">
      <div className="col-6">
        <ul>
            <li>
                Icon
            </li>
            <li>
                Humidity
            </li>
            <li>
                Wind
            </li>
        </ul>
        </div>
        <div className="col-6">
        <ul>
            <li>
                Silky Weather
            </li>
            <li>
                Date and Hour
            </li>
            <li>
            Temperature <a href="https://www.shecodes.io">C°</a> | <a href="https://www.shecodes.io">F°</a>
            </li>
        </ul>
        </div>
      </div>  
     
    )
}