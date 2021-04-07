import React, { Component } from "react";
import {useState} from "react";
function RegNonProfit() {

    const [name, setName] = useState("");
  const [age, setAge] = useState(0);
    return (
        <div>
            This is the nonProfit Page
        </div>
    );
}

export default RegNonProfit
