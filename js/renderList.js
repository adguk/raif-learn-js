export function renderEvent(eventData) {
    console.log('renderEvent');
    const template = document.getElementById('events-table-row-template').content.cloneNode(true);
    const date = template.querySelector('.event-date');
    const title = template.querySelector('.event-title');
    const description = template.querySelector('.event-description');
    const hearts = template.querySelector('.heart-label');
    const speakers = template.querySelector('.speakers');
    const register = template.querySelector('.register-button');
    date.innerText = eventData.date;
    title.innerText = eventData.title;
    description.innerText = eventData.description;
    hearts.innerText = eventData.countLikes;
    speakers.innerText = eventData.names.join('\n');
    // speakers.innerText = eventData.names;

    if (eventData.registrationDisabled === true) {
        register.classList.add('register-unavailable');
        register.innerText = 'Регистрация закрыта';
    } else {
        register.classList.add('register-available');
        register.innerText = 'Зарегистрироваться';
    }

    const events = document.querySelector('.events-table');
    events.appendChild(template);
}

// console.log('===Test renderEvent');
// const eventData = {
//     countLikes: 46,
//     date: "2021-04-28",
//     description: "Аукцион: лоснящаяся шкура золотого дракона Монина. Что скрывается в повале офиса Нагатино?",
//     names: ['Василий Петров'],
//     registrationDisabled: false,
//     title: "Веницианский карнавал танцев и богохульных плясок: смотрим вместе"
// };
// renderEvent(eventData);