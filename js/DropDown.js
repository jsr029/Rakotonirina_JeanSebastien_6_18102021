import Modal from "./modal.js";
import Form from "./form.js";
import LightBox from "./lightBox.js";
import AddLikes from "./addLikes.js";

class DropDown {
    upDown(r) {
        let dataMediaSort = [];
        let dataMedia = r.media;
        let pop = document.querySelector('#tri-select .popularite');
        let dat = document.querySelector('#tri-select .date');
        let tit = document.querySelector('#tri-select .titre');
        let triArrow = document.querySelector('#tri-select i.triArrow');
        let clicked = document.querySelector("#tri-select i.clicked");
        let li = document.querySelector('#tri-select li');
        let ul = document.querySelector('.tri #tri-select');
        dat.style.display = "none";
        tit.style.display = "none";
        pop.addEventListener('click', function (opt) {
            //console.log("Trier par : Popularité");
            dataMediaSort = dataMedia.sort((a, b) => a.likes - b.likes);
            displayMediaSort(dataMediaSort);
            dat.classList.remove("selected");
            pop.classList.add("selected");
            tit.classList.remove("selected");
            pop.style.order = "1";
            pop.style.marginTop = "0px";
            pop.after(tit);
            dat.style.order = "2";
            dat.style.borderTop = "1px solid white";
            dat.style.borderBottom = "1px solid white";
            dat.after(tit);
            pop.style.borderTop = "none";
            pop.style.borderBottom = "none";
            tit.style.order = "3";
            dat.style.visibility = "hidden";
            tit.style.visibility = "hidden";
            ul.style.height = "49px";
            triArrow.style.display = 'block';
            clicked.style.display = 'none';
        });

        dat.addEventListener('click', function (opt) {
            //console.log("Trier par : Date");
            dataMediaSort = dataMedia.sort((a, b) => {
                return new Date(a.date).valueOf() - new Date(b.date).valueOf();
            });
            displayMediaSort(dataMediaSort);
            dat.classList.add("selected");
            pop.classList.remove("selected");
            dat.style.order = "1";
            dat.after(tit);
            tit.style.order = "2";
            tit.after(pop);
            pop.style.order = "3";
            pop.style.borderTop = "1px solid white";
            pop.style.borderBottom = "1px solid white";
            dat.style.borderTop = "none";
            dat.style.borderBottom = "none";
            pop.style.marginTop = "55px";
            tit.classList.remove("selected");
            pop.style.visibility = "hidden";
            tit.style.visibility = "hidden";
            ul.style.height = "49px";
            triArrow.style.display = 'block';
            clicked.style.display = 'none';
        });

        tit.addEventListener('click', function (opt) {
            //console.log("Trier par : titre");
            dataMediaSort = dataMedia.sort(function (a, b) {
                if (a.title < b.title) {
                    return 1;
                }
                if (a.title > b.title) {
                    return -1;
                }
                return 0;
            });
            displayMediaSort(dataMediaSort);
            dat.classList.remove("selected");
            pop.classList.remove("selected");
            tit.classList.add("selected");
            pop.style.visibility = "hidden";
            pop.style.marginTop = "55px";
            tit.style.order = "1";
            dat.style.order = "2";
            tit.after(dat);
            pop.style.order = "3";
            dat.after(pop);
            dat.style.visibility = "hidden";
            ul.style.height = "49px";
            triArrow.style.display = 'block';
            clicked.style.display = 'none';
            pop.style.borderTop = "1px solid white";
            pop.style.borderBottom = "1px solid white";
        });
        triArrow.addEventListener("click", function (event) {
            dat.style.display = "block";
            tit.style.display = "block";
            pop.style.visibility = 'visible';
            pop.classList.remove("selected");
            dat.style.visibility = 'visible';
            tit.style.visibility = 'visible';
            clicked.style.display = 'block';
            this.style.display = 'none';
            ul.style.height = "150px";
            pop.style.order = "1";
            pop.after(dat);
            dat.style.order = "2";
            dat.after(tit);
            tit.style.order = "3";
        });
        clicked.addEventListener("click", function (event) {
            pop.style.visibility = 'visible';
            pop.classList.remove("selected");
            dat.style.visibility = 'hidden';
            tit.style.visibility = 'hidden';
            triArrow.style.display = 'block';
            this.style.display = 'none';
            ul.style.height = "49px";
            pop.style.order = "1";
            pop.style.marginTop = "0px";
            pop.after(dat);
            dat.style.order = "2";
            dat.after(tit);
            pop.style.borderTop = "none";
            pop.style.borderBottom = "none";
            tit.style.order = "3";
        });
    }
}

var displayMediaSort = function (dataMediaSort) {
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
                        <a href="javascript:void(0)">
                            <div class="videoRimg">
                                ${videoOrimg}
                            </div>
                            <div class="mediaDetails">
                            <h2>${d.title}</h2>
                                <span class="mediaPrice">${d.price}€</span>
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
        new Modal().showHtmlModal();
        new Modal().addModal();
        new Form().getFields();
        new LightBox().addModal();
        new AddLikes().adHeart();
    });
};

export default DropDown;