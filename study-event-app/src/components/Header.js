export default function Header({logoSrc, userName, photoSrc, exitButtonSrc}) {
    return (
        <header className="header">
            <img src={logoSrc} alt="Логотип Райффайзен Банка" className="raiffeisen-logo"/>
            <div className="user-profile-bar">
                <div className="user-name">{userName}</div>
                <img src={photoSrc} alt="Фотография пользователя" className="user-photo"/>
                <img src={exitButtonSrc} alt="Кнопка выхода" className="exit"/>
            </div>
        </header>
    );
}
