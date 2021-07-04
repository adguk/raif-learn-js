import Header from './components/Header';
import raiffeisenLogo from './resources/images/raiffeisen-logotype.png';
import userPhoto from './resources/images/user-photo.png';
import exitButton from './resources/images/exit.png';
import Banner from './components/Banner';
import EventList from './components/events/EventList';

export default function App() {
    return (<div className="page">
        <Header
            logoSrc={raiffeisenLogo}
            userName="Валентин Костин"
            photoSrc={userPhoto}
            exitButtonSrc={exitButton}
        />
        <Banner
            title="Школа по фронтенду"
            date="25.05.2020"
            location="Офис в Нагатино"
        />
        <EventList eventDataUrl="http://localhost:8080/data"/>
    </div>)
}