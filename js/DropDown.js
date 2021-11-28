import Modal from "./modal.js";
import Form from "./form.js";
import LightBox from "./lightBox.js";
import AddLikes from "./addLikes.js";

class DropDown {
    upDown(r) {
        let dataMediaSort = [];
        let dataMedia = r.media;
        var allOptionSelect = document.querySelector('#tri-select');
        allOptionSelect.addEventListener('click', function (opt) {
            var index = allOptionSelect.selectedIndex;
            if (index == 0) {
                console.log("Trier par : Popularité");
                dataMediaSort = dataMedia.sort((a, b) => b.likes - a.likes);
            } else if (index == 1) {
                console.log("Trier par : Date");
                dataMediaSort = dataMedia.sort((a, b) => {  
                    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
                });
            } else if (index == 2) {
                console.log("Trier par : titre");
                dataMediaSort = dataMedia.sort(function (a, b) {
                    if (a.title < b.title) {
                        return 1;
                    }
                    if (a.title > b.title) {
                        return -1;
                    }
                    return 0;
                });
            }
            //document.querySelector('#Photograph').innerHTML = '';
            //new Photograph().getMediasByTags(r);
            new displayMediaSort(dataMediaSort);
        });
    }
}
    var displayMediaSort = function(dataMediaSort){
        document.querySelector('#media').innerHTML = '';
        //new Photograph().getMediasByTags(dataMediaSort);
        var dataMedia = dataMediaSort;
        var urlClicked = window.location.href;
        //split it by #
        var urlSplit = urlClicked.split('=');
        // take the index 1 which contains the tag we need to compare
        var aClicked = urlSplit[1];
        const mediaH = document.querySelector('#media');
        const idn = document.querySelector('.identity .name');
        var idnSplit = idn.innerHTML.split(" ");
        dataMedia.forEach(function (d) {
            var media = (d.image) ? d.image : d.video;
            var mediaSplit = media.split('.');
            var mediaExt = mediaSplit[1];
            if (d.photographerId == aClicked) {
                var videoOrimg = (mediaExt === 'jpg') ?
                    `<img src="./img/${idnSplit[0]}/${d.image}" alt="${d.title}, a ${idn.innerHTML}'s work">` :
                    `<video controls><source src="./img/${idnSplit[0]}/${d.video}"></video>`;
                let boxMedia = `
                <article class="pictVideos">
                <a href="#">
                    <div class="videoRimg">
                        ${videoOrimg}
                    </div>
                    <div class="mediaDetails">
                    <h2>${d.title}</h2>
                        <span class="mediaPrice">${d.price}€</span>
                        <span class="mediaLikes">${d.likes}</span>
                        <span class="heartLikes"><i class="far fa-heart clicked" aria-hidden="true"></i></span>
                    </div>
                </a>
                    <div class="mediaDetails">
                    <h2>${d.title}</h2>
                        <span class="mediaPrice">${d.price}€</span>
                        <span class="mediaLikes">${d.likes}</span>
                        <span class="heartLikes"><i class="far fa-heart clicked" aria-hidden="true"></i></span>
                    </div>
                </article>
                    `;
                mediaH.insertAdjacentHTML('afterbegin', boxMedia);
            }
     });
        new Modal().showHtmlModal();
        new Modal().addModal();
        new Form().getFields();
        new LightBox().addModal();
        new AddLikes().adHeart();
};
export default DropDown;