let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbanil');

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev')
}
let timeRunning = 3000
let runTimeOut;
function showSlider (typer){
    let itemSlider = docuemnt.querySelector('.carousel .list .item')
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item')

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.lenght -1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem])
        carouselDom.classList.add('prev')
    }

    clearTimeout(runTimeOut);
    runTimeOut = stTimeout (() =>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev')
    }, timeRunning)
}