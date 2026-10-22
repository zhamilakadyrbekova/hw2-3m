

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResalt = document.querySelector("#phone_result");

const regExp = /^\+996 [2579]\d{2} \d{3} \d{3}$/

phoneButton.onclick = () =>  {
    if (regExp.test(phoneInput.value)) {
        phoneResalt.innerHTML = 'OK';
        phoneResalt.style.color = 'green';
    }
    else {
        phoneResalt.innerHTML = 'Error';
        phoneResalt.style.color = 'red';
    }
}





const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');


let currentIndex = 0;
let autoInterval;


const hideTabContent = () => {
    tabContentBlocks.forEach((block) => {
        block.style.display = 'none'
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active');
    })
}


const showTabContent = (i = 0) => {
    tabContentBlocks[i].style.display = 'block';
    tabs[i].classList.add('tab_content_item_active');

    currentIndex = i;
}

hideTabContent()
showTabContent(0)


const startAuto = () => {
    autoInterval = setInterval(() => {
        let nextIndex = currentIndex + 1;
        if (nextIndex === tabs.length) {
            nextIndex = 0;
        }
        hideTabContent();
        showTabContent(nextIndex);
    }, 1000);
};

startAuto();
