const oneStick = document.getElementById('burger-stick-one');
const twoStick = document.getElementById('burger-stick-two');
const threeStick = document.getElementById('burger-stick-three');
const fourStick = document.getElementById('burger-stick-four');
const burgerList = document.getElementById('burger-list');
const ListElementWithNav = document.getElementById('withNav');
const ListNavElement = document.getElementById('nav-menu');


const burger = document.getElementById('burger');

ListElementWithNav.addEventListener('click', () => {
    ListNavElement.classList.toggle('showing')
    ListNavElement.classList.toggle('showing2')
    ListNavElement.classList.toggle('unactive')
    ListElementWithNav.classList.toggle('toggled');
});
burger.addEventListener('click', () => {
    oneStick.classList.toggle('hidden');
    fourStick.classList.toggle('hidden');
    twoStick.classList.toggle('rotated');
    threeStick.classList.toggle('rotated-reverse');
    burgerList.classList.toggle('show')
    burgerList.classList.toggle('show2')
});






/*2  const oneStick = document.getElementById('burger-stick-one');
const twoStick = document.getElementById('burger-stick-two');
const threeStick = document.getElementById('burger-stick-three');
const fourStick = document.getElementById('burger-stick-four');
const burgerList = document.getElementById('burger-list');
const ListElementWithNav = document.getElementById('withNav');
const ListNavElement = document.getElementById('nav-menu');
const SubListElement = document.getElementById('sub-burger-list');
const SubListElementWithNav = document.getElementById('sub-withNav');
const burger = document.getElementById('burger');

ListElementWithNav.addEventListener('click', () => {
    ListNavElement.classList.toggle('showing')
    ListNavElement.classList.toggle('showing2')
    ListElementWithNav.classList.toggle('toggled');
});
burger.addEventListener('click', () => {
    oneStick.classList.toggle('hidden');
    fourStick.classList.toggle('hidden');
    twoStick.classList.toggle('rotated');
    threeStick.classList.toggle('rotated-reverse');
    burgerList.classList.toggle('show')
    burgerList.classList.toggle('show2')
    SubListElement.classList.toggle('sub-show')
    SubListElement.classList.toggle('sub-show-start')
});

SubListElementWithNav.addEventListener('click', () => {
    SubListElement.classList.toggle('sub-show-start')
    SubListElement.classList.toggle('sub-show-end')
})  */


/*3     const oneStick = document.getElementById('burger-stick-one');
    const twoStick = document.getElementById('burger-stick-two');
    const threeStick = document.getElementById('burger-stick-three');
    const fourStick = document.getElementById('burger-stick-four');
    const burgerList = document.getElementById('burger-list');
    const ListElementWithNav = document.getElementById('withNav');
    const ListNavElement = document.getElementById('nav-menu');
    const SubListElement = document.getElementById('sub-burger-list');
    const SubListElementContent = SubListElement.children;
    const SubListElementWithNav = document.getElementById('sub-withNav');
    const burger = document.getElementById('burger');
    
    ListElementWithNav.addEventListener('click', () => {
        ListNavElement.classList.toggle('showing')
        ListNavElement.classList.toggle('showing2')
        ListElementWithNav.classList.toggle('toggled');
    });
    burger.addEventListener('click', () => {
        oneStick.classList.toggle('hidden');
        fourStick.classList.toggle('hidden');
        twoStick.classList.toggle('rotated');
        threeStick.classList.toggle('rotated-reverse');
        burgerList.classList.toggle('show')
        burgerList.classList.toggle('show2')
        SubListElement.classList.toggle('sub-show')
        SubListElement.classList.toggle('sub-show-start')
    });
    
    SubListElementWithNav.addEventListener('click', () => {
        SubListElement.classList.toggle('sub-show-start-main')
        SubListElement.classList.toggle('sub-show-end-main')
        SubListElementContent[0].classList.toggle('sub-show-start')
        SubListElementContent[1].classList.toggle('sub-show-start')
        SubListElementContent[2].classList.toggle('sub-show-start')
        SubListElementContent[3].classList.toggle('sub-show-start')

        SubListElementContent[0].classList.toggle('sub-show-end')
        SubListElementContent[1].classList.toggle('sub-show-end')
        SubListElementContent[2].classList.toggle('sub-show-end')
        SubListElementContent[3].classList.toggle('sub-show-end')

        
    }) */