class TabIndexPh{
    settriSelect(){
        /** 3 selects
         * .popularite
         * .date
         * .titre
         */
         const pop = document.querySelector(".popularite");
         pop.setAttribute("tabindex", 8);
         const dateH = document.querySelector(".date");
         dateH.setAttribute("tabindex", 9);
         const titre = document.querySelector(".titre");        
         titre.setAttribute("tabindex", 10);
         let pictVideos = document.querySelectorAll('#media .pictVideos');
         pictVideos.forEach(function(elm){
         let details = elm.children[1].children;
             let img = elm.children[0].children[0].children[0];
             var tab = 11;
            img.setAttribute("tabindex", tab++);
            var tabd = 11;
            for (let k = 0; k < details.length; k++) {
               details[k].setAttribute("tabindex", tabd);    
            }
         });
     }
}
export default TabIndexPh;