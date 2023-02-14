"use client"

import React, { useState } from "react"

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="accordion-item block shadow-md mb-4 p-4">
            <div
                className="accordion-title flex justify-between cursor-pointer"
                onClick={() => setIsActive(!isActive)}
            >
                <h3 className="font-medium">{title}</h3>
                <div>{isActive ? "-" : "+"}</div>
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </div>
    )
}

export default Accordion
