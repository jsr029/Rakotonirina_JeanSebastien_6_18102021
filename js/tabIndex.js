class TabIndex{
    setTab(){
        /** 7 selectors needed 5 first until 22
         * #flightMenu
         * .logo
         * .menu
         * .titleH
         * .photograph
         * .locationTaglinePrice
         * .tags
         */
        const fligthMenu = document.querySelector("#flightMenu");
        const logo = document.querySelector(".logo");
        const menu = document.querySelector(".menu");        
        const tab = document.querySelectorAll(".tabIndex");
        const titleH = document.querySelector(".titleH");
                fligthMenu.setAttribute("tabindex", 1);
                logo.setAttribute("tabindex", 2);                
                menu.setAttribute("tabindex", 3);
                titleH.setAttribute("tabindex", 4);
                tab.forEach(function(e){
                    var i = 5;
                    e.setAttribute("tabindex", i++);
            });
    }
}
export default TabIndex;