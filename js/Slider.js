var SliderModal = function (pv, index) {
    const mD = document.querySelector('#myLightModal .mediaDetails');
    var slideMoins = document.querySelector('#precedent');
    slideMoins.addEventListener('click', function (elt) {
        var slide = pv;
        var numero = 0;
        numero = numero + index;
        if (numero < 0)
            numero = slide.length - 1;
        if (numero > slide.length - 1)
            numero = 0;
        index--;
        var slideModal = document.querySelector("#slide");
        slideModal.innerHTML = slide[numero].innerHTML;
    });
    var slidePlus = document.querySelector('#suivant');
    slidePlus.addEventListener('click', function (elt) {
        var slide = pv;
        var numero = 0;
        numero = numero + index;
        if (numero < 0)
            numero = slide.length - 1;
        if (numero > slide.length - 1)
            numero = 0;
        index++;
        var slideModal = document.querySelector("#slide");
        slideModal.innerHTML = slide[numero].innerHTML;
    });
};

export default SliderModal;