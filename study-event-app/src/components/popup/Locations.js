import { useState } from "react";

export default function Locations({locations}) {
    const [activeLocationIndex, setActiveLocationIndex] = useState(0);
    return (
        <div className="popup-location-types">
            {locations.map((location, index) => {
                const className = index === activeLocationIndex ? "category active" : "category";
                return <div key={index} className={className} onClick={() => setActiveLocationIndex(index)}>{location}</div>;
            })}
        </div>
    );
}