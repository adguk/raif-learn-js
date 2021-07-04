import { useEffect, useState } from "react";
import EventBar from "./EventBar";
import Event from "./Event";
import Popup from '../popup/Popup';

export default function EventList({eventDataUrl}) {
    const [events, setEvents] = useState([]);
    const [popupActive, setPopupActive] = useState(false);
    const [popupEventIndex, setPopupEventIndex] = useState(0);
    const eventOrganizers = ['IT Academy', 'Маркетинг', 'Retail', 'Остальные'];

    useEffect(() => {
        console.log('Fetching event data');
        fetch(eventDataUrl)
            .then(response => response.json())
            .then(json => {
                console.log('Result of request:\n', json);
                return json;
            })
            .then(json => {
                setEvents(json);
            });
    }, [eventDataUrl]);

    function hidePopupOnEscapeKey(event) {
        console.log('hidePopupOnEscapeKey');
        const key = event.key;
        if (key === 'Escape') {
            closePopup();
        }
    }

    function openPopup(index) {
        setPopupEventIndex(index);
        setPopupActive(true);
        document.addEventListener('keydown', hidePopupOnEscapeKey);
        console.log('openPopup triggered with index: ', index)
    }

    function closePopup() {
        console.log('closePopup triggered');
        document.removeEventListener('keydown', hidePopupOnEscapeKey);
        setPopupActive(false);
    }

    return (
        <>
            <div className="events">
                <div className="events-label">Все мероприятия</div>
                <EventBar eventOrganizers={eventOrganizers}/>
                <div className="events-table">
                    <table>
                        <tbody>
                            {/* Так не работает
                            https://stackoverflow.com/questions/33846682/react-onclick-function-fires-on-render */}
                            {/* {events.map((event, index) => <Event key={index} eventData={event} openPopupFunction={openPopup(index)}/>)} */}
                            {/* Так работает */}
                            {events.map((event, index) => <Event key={index} eventData={event} openPopupFunction={() => openPopup(index)}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
            <Popup active={popupActive} event={events[popupEventIndex]} closePopupFunction={() => closePopup()}/>
        </>
    );
}