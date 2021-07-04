import heartSrc from '../../resources/images/heart.png';

export default function Event({eventData: {countLikes, date, description, names, registrationDisabled, title}, openPopupFunction}) {
    const registerButtonClassName = `${registrationDisabled ? "register-button register-unavailable" : "register-button"}`;
    const registerButtonInnerText = registrationDisabled ? "Регистрация закрыта" : "Зарегистрироваться";

    return (
        <tr>
            <td className="event-date">{date}</td>
            <td>
                <div className="event-wrapper">
                    <div className="event-title">{title}</div>
                    <div className="event-description">{description}</div>
                </div>
            </td>
            <td>
                <div className="hearts-wrapper">
                    <img src={heartSrc} alt="Понравилось"/>
                    <div className="heart-label">{countLikes}</div>
                </div>
            </td>
            <td>
                <div className="speakers">
                    {names.map((name, index) => <p key={index}>{name}</p>)}
                </div>
            </td>
            <td>
                <button disabled={registrationDisabled} className={registerButtonClassName} onClick={openPopupFunction}>{registerButtonInnerText}</button>
            </td>
        </tr>
    );
}