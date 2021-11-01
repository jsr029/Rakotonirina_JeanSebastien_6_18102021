function activeClass() {
    var elems = document.querySelectorAll(".active");
    elems.forEach(elm=>elm.addEventListener("click", function(){
        if(elm.className.indexOf() == -1){
            elm.classList.add("active");
        }else{
            elm.className = "";
        }
    }));
}
  export default activeClass;