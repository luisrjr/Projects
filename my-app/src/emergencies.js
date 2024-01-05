import React from "react";

export function Emergencies() {
    const emergencies = [{
        name: "Fire Emergency",
        message: "There is a fire, use water to turn it out"
    },
    {
        name: "Earthquake Emergency",
        message: "Take cover"
    },
    {
        name: "Lightning Emergency",
        message: "Take cover"
    }
    ]

    let randomIndex = Math.floor(Math.random() * emergencies.length);
    let emergencyName = emergencies[randomIndex].name;
    let emergencyMessage = emergencies[randomIndex].message;

    return (
        <>
        <h1>{emergencyName}</h1>
        <h2>{emergencyMessage}</h2>
        </>
    )
}