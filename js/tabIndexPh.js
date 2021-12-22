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
        let pictVideos = document.querySelectorAll('#media .pictVideos');
        let liTagsA = document.querySelectorAll('li.tags a');
        liTagsA.forEach(function (elm) {
            elm.setAttribute("tabindex", -1);
        });
        pictVideos.forEach(function (elm) {
            elm.setAttribute("tabindex", 0);
            //console.log(elm.children[1].children);
            let details = elm.children[1].children;
            let img = elm.children[0].children[0].children[0];
            //console.log(details, img);
            var tab = 13;
            img.setAttribute("tabindex", tab);
            for (let a = 0; a < details.length; a++) {
                details[a].setAttribute("tabindex", tab);
                //console.log(details[a]);
            }
        });
        let likes = document.querySelector('.likes');
        likes.setAttribute("tabindex", 30);
    }
}
export default TabIndexPh;