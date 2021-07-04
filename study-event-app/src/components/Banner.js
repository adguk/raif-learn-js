export default function Banner({title, date, location}) {
    return (
        <div className="banner">
            <div className="next-event-label">Ближайшее мероприятие</div>
            <div className="next-event-title">{title}</div>
            <div className="next-event-date-and-place">{date} &middot; {location}</div>
            <div className="sign-up-for-event-button">Записаться на курс</div>
        </div>
    );
}