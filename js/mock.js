export function randomBoolean() {
    let random_boolean = Math.random() < 0.5;
    return random_boolean;
}

export function randomDate() {
    let start = new Date(2012, 0, 1);
    let end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function randomDateStringFormatted() {
    let d = randomDate();
    let curr_date = d.getDate();
    let curr_month = d.getMonth() + 1;
    let curr_year = d.getFullYear();
    curr_date = curr_date < 10 ? ('0' + curr_date) : curr_date;
    curr_month = curr_month < 10 ? ('0' + curr_month) : curr_month;
    return curr_date + "." + curr_month + "." + curr_year;
}

/**
 * Returns a random integer between the specified values.
 * The value is no lower than min (or the next integer greater than min if min isn't an integer), and is less than (but not equal to) max.
 * 
 * @param {*} min lower bound (inclusive)
 * @param {*} max upper bound (exclusive)
 * @returns random integer between the specified values
 */
export function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export function randomDescription() {
    let i = randomInt(0, descriptions.length);
    return descriptions[i];
}

export function randomName() {
    let firstNameIndex = randomInt(0, firstNames.length);
    let lastNameIndex = randomInt(0, lastNames.length);
    return firstNames[firstNameIndex] + ' ' + lastNames[lastNameIndex];
}

export function randomEvent() {
    return {
        date: randomDate(),
        title: randomDescription(),
        description: randomDescription(),
        countLikes: randomInt(1, 110),
        names: randomName(),
        registrationDisabled: randomBoolean()
    };
}

export function randomEvents() {
    let events = [];
    for (let i = 0; i < 10; i++) {
        events[i] = randomEvent();
    }
    return events;
}

let descriptions = [
    'Веницианский карнавал танцев и богохульных плясок: смотрим вместе',
    'Солнцестоим вместе или как провести выходные продуктивно',
    'Бредовые макеты и как с ним работать: спитч о проблемах друзей-фронтендеров',
    'Аукцион: лоснящаяся шкура золотого дракона Монина. Что скрывается в повале офиса Нагатино?',
    'К посещению приглашаются сотрудники 18-',
    'Если вы люите солнце и стоять - то данный курс вам очень подойдет. Мы вместе будем стоять и смотреть на солнце. Чистый кайф.',
    'Что делать если в дизайне, который вам отправил дизайнер написаны бредовые тексты? Посмеяться?! Это что для вас шуточки?!',
    'Если у вас еще осталась зарплата - приходите, мы будем рады ее забрать'
];

let firstNames = ['Петр', 'Василий', 'Николай', 'Олег', 'Павел'];
let lastNames = ['Иванов', 'Петров', 'Гагарин', 'Сюткин', 'Грозный'];

// console.log('===Test randomBoolean');
// console.log(randomBoolean());
// console.log(randomBoolean());
// console.log(randomBoolean());
// console.log(randomBoolean());
// console.log(randomBoolean());

// console.log('===Test randomDate');
// console.log(randomDate());
// console.log(randomDate());
// console.log(randomDate());
// console.log(randomDate());
// console.log(randomDate());

// console.log('===Test randomDateStringFormatted');
// console.log(randomDateStringFormatted());
// console.log(randomDateStringFormatted());
// console.log(randomDateStringFormatted());
// console.log(randomDateStringFormatted());
// console.log(randomDateStringFormatted());

// console.log('===Test randomInt');
// console.log(randomInt(1, 10));
// console.log(randomInt(1, 10));
// console.log(randomInt(1, 10));
// console.log(randomInt(1, 10));
// console.log(randomInt(1, 10));

// console.log('===Test randomDescription');
// console.log(randomDescription());
// console.log(randomDescription());
// console.log(randomDescription());
// console.log(randomDescription());
// console.log(randomDescription());

// console.log('===Test randomName');
// console.log(randomName());
// console.log(randomName());
// console.log(randomName());
// console.log(randomName());
// console.log(randomName());

// console.log('===Test randomEvent');
// console.log(randomEvent());
// console.log(randomEvent());
// console.log(randomEvent());
// console.log(randomEvent());
// console.log(randomEvent());

console.log('===Test randomEvents');
console.log(randomEvents());