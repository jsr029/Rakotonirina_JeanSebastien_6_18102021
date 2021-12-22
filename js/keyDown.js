class KeyDown{
    rightArrow(){
        const Menu = document.querySelector('#Menu');
        Menu.addEventListener("keydown", (event) => {
            if(event.code === 'ArrowRight'){
            const aNav = document.querySelectorAll("nav a");
            aNav.forEach(function(e){
                let z=4;
                e.setAttribute("tabindex", z++);
            });
        }
        });
    }
}
export default KeyDown;