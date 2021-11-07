function activeClass(){
    var menuA = document.querySelectorAll('.menu a');
    menuA.forEach((elm) => elm.addEventListener("click", function(event){
        console.log(elm);
        if (elm.className == 'active' || elm.className == '') {
            elm.className = 'active';
        }else{
            elm.className = "notActive";
        }
    }));
}
  export default activeClass;