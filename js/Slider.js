var SliderModal = function (pv, index) {
     var slideMoins = document.querySelector('#precedent');
        var slide = pv;
    slideMoins.addEventListener('click', function (elt) {
        //console.log(pv[index]);
        var numero = 0;
        --index;
        numero = numero - index;
        if (numero < 0)
            numero = slide.length - 1;
        if (numero > slide.length - 1)
            index = 0;
        //console.log(numero);
        var slideModal = document.querySelector("#slide");
        slideModal.innerHTML = slide[numero].innerHTML;
         //console.log(slide[numero]);
    });
    slideMoins.addEventListener('keydown', (event) => {
        if(event.code === "Enter"){
            var numero = 0;
            --index;
            numero = numero - index;
            if (numero < 0)
                numero = slide.length - 1;
            if (numero > slide.length - 1)
                index = 0;
            //console.log(numero);
            var slideModal = document.querySelector("#slide");
            slideModal.innerHTML = slide[numero].innerHTML;
            //console.log(slide[numero]);
        }
    });
    var slidePlus = document.querySelector('#suivant');
    slidePlus.addEventListener('click', function (elt) {
        var numero = 0;
        ++index;
        numero = numero + index;
        if (numero < 0)
            numero = slide.length - 1;
        if (numero > slide.length - 1)
            index = 0;
       // console.log(numero);
        var slideModal = document.querySelector("#slide");
            slideModal.innerHTML = slide[numero].innerHTML;
    });
    slidePlus.addEventListener('keydown', (event) => {
        if(event.code === "Enter"){
            var numero = 0;
            ++index;
            numero = numero + index;
            if (numero < 0)
                numero = slide.length - 1;
            if (numero > slide.length - 1)
                index = 0;
            //console.log(numero);
            var slideModal = document.querySelector("#slide");
            slideModal.innerHTML = slide[numero].innerHTML;
            //console.log(slide[numero]);
        }
    });
};

export default SliderModal;