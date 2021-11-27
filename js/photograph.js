import databaseAvailable from "./json2Js.js";
import Modal from "./modal.js";
import Form from "./form.js";
import LightBox from "./lightBox.js";
import AddLikes from "./addLikes.js";
databaseAvailable.then(function (r) {
    new Photograph().getProfilById(r);
    new Photograph().getMediasByTags(r);
    //new AddLikes().totalLikes();
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
                /** Inject in the Html the salary per day */
                const salary = document.querySelector('.salary');
                salary.insertAdjacentHTML("beforeend", k.price + '€/jour');
                /*** End Salary injection */
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
        dataMedia.forEach(function (d) {
            var media = (d.image) ? d.image : d.video;
            var mediaSplit = media.split('.');
            var mediaExt = mediaSplit[1];
            if (d.photographerId == aClicked) {
                var ml = d.likes;
                var videoOrimg = (mediaExt === 'jpg') ?
                    `<img src="./img/${idnSplit[0]}/${d.image}" alt="${d.title}, a ${idn.innerHTML}'s work">` :
                    `<video controls><source src="./img/${idnSplit[0]}/${d.video}"></video>`;
                let boxMedia = `
                <article class="pictVideos">
                <a href="#">
                    <div class="videoRimg">
                        ${videoOrimg}
                    </div>
                </a>
                    <div class="mediaDetails">
                    <h2>${d.title}</h2>
                        <span class="mediaPrice">${d.price}</span>
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
    }
}
export default Photograph;