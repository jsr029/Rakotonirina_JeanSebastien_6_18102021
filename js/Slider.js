var SliderModal = function (pv, index) {
    var slide = pv;
    //console.log(slide);
    var slideMoins = document.querySelector('#precedent');
    slideMoins.addEventListener('click', function (elt) {
        index--;
        var slide = pv;
        var numero = 0;
        numero = numero + index;
        if (numero < 0)
            numero = slide.length - 1;
        if (numero > slide.length - 1)
            numero = 0;
        var slideModal = document.querySelector("#slide");
        slideModal.innerHTML = slide[numero].innerHTML;
        });
    var slidePlus = document.querySelector('#suivant');
    slidePlus.addEventListener('click', function (elt) {
        index++;
        var slide = pv;
        var numero = 0;
        numero = numero + index;
        if (numero < 0)
            numero = slide.length - 1;
        if (numero > slide.length - 1)
            numero = 0;
        var slideModal = document.querySelector("#slide");
        slideModal.innerHTML = slide[numero].innerHTML;
        });
};

function ChangeSlide(pv, index) {
    var slide = pv;
    var numero = 0;
    numero = numero + index;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    var slideModal = document.querySelector("#slide");
    slideModal.innerHTML = slide[numero].innerHTML;
}


export default SliderModal;