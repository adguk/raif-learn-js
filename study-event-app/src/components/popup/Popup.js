import closeButtonSrc from '../../resources/images/close.png';
import Locations from './Locations';

export default function Popup({active, event, closePopupFunction}) {
    const locations = ['Онлайн', 'Оффлайн: офис Нагатино'];
    if (!active) {
        console.log('Popup active is false, return null');
        return null;
    }
    else {
        console.log('Popup active is true, return elements');
        return (
            <div className="popup">
                <div className="popup-container">
                    <form action="/register" method="post">
                        <div className="popup-title">
                            <div className="popup-title-text">Запись на мероприятие</div>
                            <button className="popup-close-button" type="button" onClick={closePopupFunction}><img src={closeButtonSrc} alt="Закрыть"/></button>
                        </div>
                        <div className="popup-details">Выберите необходимые параметры мероприятия</div>
                        <div className="popup-event-container">
                            <div className="popup-event-title">{event.title}</div>
                            <div className="popup-event-description">{event.description}</div>
                        </div>
                        <Locations locations={locations}/>
                        <div className="popup-login-container">
                            <label htmlFor="popup-login-input-id" className="popup-form-label">Кто пойдет на мероприятие</label>
                            <input id="popup-login-input-id" type="text" name="login" placeholder="Логин или имя сотрудника" className="popup-form-input"/>
                        </div>
                        <div className="popup-comment-container">
                            <label htmlFor="popup-comment-textarea-id" className="popup-form-label">Комментарий</label>
                            <textarea id="popup-comment-textarea-id" name="comment" placeholder="Дополнительная информация" className="popup-form-input"></textarea>
                        </div>
                        <div className="popup-control-buttons">
                            <button className="popup-submit-button" type="submit">Зарегистрироваться</button>
                            <button className="popup-cancel-button" type="button" onClick={closePopupFunction}>Отменить</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}