import databaseAvailable from "./json2Js.js";
import Modal from "./modal.js";
import Form from "./form.js";
import LightBox from "./lightBox.js";
databaseAvailable.then(function (r) {
    new Photograph().getProfilById(r);
    new Photograph().getMediasByTags(r);
});

class Photograph {
    getProfilById(r) {
        var dataPhotos = r.photographers;
        var urlClicked = window.location.href;
        //split it by #
        var urlSplit = urlClicked.split('=');
        // take the index 1 which contains the tag we need to compare
        var aClicked = urlSplit[1];

        const profil = document.querySelector('.profil');

        // Loop in the photographers tab
        dataPhotos.forEach(function (k) {
            if (k.id == aClicked) {
                let boxPhotograph = `
                    <ul class="identity">
                        <li class="name">${k.name}</li>
                        <li class="location">${k.city + ', ' + k.country}</li>
                        <li class="tagline">${k.tagline}</li>
                        <li class="tags">${k.tags.join(" ")}</li>
                    </ul>
                    <ul class="contact">
                        <button class="contactButton" id="myBtn">Contacter Moi</button>
                    </ul>
                    <ul class="image">
                        <li class="photo">
                            <a href="#" class="mediaPhVd"><img src="${"./img/Photographers ID Photos/" + k.portrait}" alt="${k.name}"></a>
                        </li>
                    </ul>
            `;
                profil.insertAdjacentHTML("afterbegin", boxPhotograph);
            }
        });
    }
    getMediasByTags(r) {
        var dataMedia = Array.from(r.media);
        var lightBoxModal = document.querySelector("#myLightModal");
        var urlClicked = window.location.href;
        //split it by #
        var urlSplit = urlClicked.split('=');
        // take the index 1 which contains the tag we need to compare
        var aClicked = urlSplit[1];
        const mediaH = document.querySelector('#media');
        const idn = document.querySelector('.identity .name');
        var idnSplit = idn.innerHTML.split(" ");
        const videoRimg = document.querySelectorAll('#myLightModal .videoRimg');
        const mD = document.querySelectorAll('#myLightModal .mediaDetails');
        dataMedia.forEach(function (d, index) {
            var media = (d.image) ? d.image : d.video;
            var mediaSplit = media.split('.');
            var mediaExt = mediaSplit[1];
            var likesTab = [];
            if (d.photographerId == aClicked) {
                var videoOrimg = (mediaExt === 'jpg') ?
                    `<img src="./img/${idnSplit[0]}/${d.image}" alt="${idn.innerHTML}">` :
                    `<video controls><source src="./img/${idnSplit[0]}/${d.video}" alt="${idn.innerHTML}"></video>`;
                let boxMedia = `
                <article class="pictVideos">
                    <div class="videoRimg">
                        ${videoOrimg}
                    </div>
                    <div class="mediaDetails">
                       <h2>${d.title}</h2>
                        <span class="mediaPrice">${d.price}</span>
                        <span class="mediaLikes">${d.likes}<i class="far fa-heart" aria-hidden="true"></i></span>
                    </div>
                    </article>
                    `;
                    likesTab.push(d.likes);
                    var total = 0,
                    len = likesTab.length;
                    for (var i = 0; i < len; i++){
                    total += likesTab[i];
                        console.log(total, index);
                    }
                    mediaH.insertAdjacentHTML('afterbegin', boxMedia);
            }
        });
        new LightBox().addModal();
    new Modal().showHtmlModal();
    new Modal().addModal();
    new Form().getFields();
    }
}
export default Photograph;