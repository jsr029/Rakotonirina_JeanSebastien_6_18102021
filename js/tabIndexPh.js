class TabIndexPh {
    settriSelect() {
        /** 
         * first tagets
         * #tri-select with its children
         * .popularite
         * .date
         * .titre
         * second Targets  
         * .pictvideo with its children
         * .videoRimg -> img
         * .mediaDetails -> n2, .mediaPrice, .mediaLikes, .heartLikes
         */
        let triSelectLi = document.querySelectorAll('#tri-select');
        triSelectLi.forEach(function (elm) {
            var tab = 18;
            let li = elm.children;
            //magic number 3 cause just need 3 firsts li elements
            for (let a = 0; a < 3; a++) {
                li[a].setAttribute("tabindex", tab++);
            }
        });
        let pictVideos = document.querySelectorAll('#media .pictVideos');
        pictVideos.forEach(function (elm) {
        elm.setAttribute("tabindex", 20);
            let details = elm.children[1].children;
            let img = elm.children[0].children[0].children[0];
            //console.log(details, img);
            var tab = 20;
            var tabd = 20;
                img.setAttribute("tabindex", tab);
            for (let a = 0; a < details.length; a++) {
                details[a].setAttribute("tabindex", 20);
                //console.log(details[a]);
            }
        });
        let likes = document.querySelector('.likes');
        likes.setAttribute("tabindex", 21);
    }
}
export default TabIndexPh;