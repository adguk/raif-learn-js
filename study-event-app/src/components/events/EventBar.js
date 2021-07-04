import { useState } from "react";

export default function EventBar({eventOrganizers}) {
    const [activeEventOrganizerIndex, setActiveEventOrganizerIndex] = useState(0);
    return (
        <div className="event-organizers">
            {eventOrganizers.map((eventOrganizer, index) => {
                const className = index === activeEventOrganizerIndex ? "category active event-organizer" : "category event-organizer";
                return <div key={index} className={className} onClick={() => setActiveEventOrganizerIndex(index)}>{eventOrganizer}</div>;
            })}
        </div>
    );
}