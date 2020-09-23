import React from "react";
import benchpeople from "../assets/images/undraw_couplekiki.svg"

export default function Graphic(props) {
    return (
        <div className="graphiccontainer">
        <img className="graphic" src={benchpeople} alt="people on a bench"></img>
        </div>
    )
    }