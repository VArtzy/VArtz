"use client"

import React, { useState } from "react"

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="accordion-item block shadow-md">
            <div
                className="accordion-title"
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
