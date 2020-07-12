feather.replace();

const modalIframe = document.querySelector('#modal');
const cards = document.querySelectorAll('.card');

for (let card of cards){
    card.addEventListener("click", () => {
        let pageName = card.getAttribute("id");
        modalIframe.classList.add('maximize');
        modalIframe.querySelector('iframe').src = `https://rocketseat.com.br/${pageName}`;
    })
}

document.querySelector('.btn__close').addEventListener("click", function(){
    modalIframe.classList.remove('maximize');
});

