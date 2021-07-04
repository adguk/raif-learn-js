export function addShowPopupListeners() {
    console.log('addShowPopupListeners');
    const buttons = document.querySelectorAll('.register-available');
    for (let button of buttons) {
        button.addEventListener('click', showPopup);
    }
}

export function addHidePopupListeners() {
    console.log('addHidePopupListeners');
    // Add listener for close button
    const popupCloseButton = document.querySelector('.popup-close-button');
    popupCloseButton.addEventListener('click', hidePopup);
    // Add listener for escape key
    document.addEventListener('keydown', hidePopupOnEscapeKey);
    // Add listener for cancel button
    const popupCancelButton = document.querySelector('.popup-cancel-button');
    popupCancelButton.addEventListener('click', hidePopup);
}

function showPopup(event) {
    console.log('showPopup');
    const popup = document.querySelector('.popup');
    // popup.style.display = 'block';
    popup.classList.add('popup-visible');
}

function hidePopup(event) {
    console.log('hidePopup');
    const popup = document.querySelector('.popup');
    // popup.style.display = 'none';
    popup.classList.remove('popup-visible');
}

function hidePopupOnEscapeKey(event) {
    console.log('hidePopupOnEscapeKey');
    const key = event.key;
    if (key === 'Escape') {
        const popup = document.querySelector('.popup');
        // popup.style.display = 'none';
        popup.classList.remove('popup-visible');
    }
}

console.log('===Add hide popup listeners');
addHidePopupListeners();