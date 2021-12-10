class KeyDownPh {
    rightArrow(r) {
        let pop = document.querySelector('#tri-select .popularite');
        let dat = document.querySelector('#tri-select .date');
        let tit = document.querySelector('#tri-select .titre');
        let triArrow = document.querySelector('#tri-select i.triArrow');
        let clicked = document.querySelector("#tri-select i.clicked");
        const triSelect = document.querySelector('#tri-select');
        let dataMediaSort = [];
        let dataMedia = r.media;
        triSelect.addEventListener("keydown", (event) => {
            if (event.code === 'ArrowRight') {
                pop.style.display = 'block';
                dat.style.display = 'block';
                tit.style.display = 'block';
                clicked.style.display = 'block';
                triArrow.style.display = 'none';
            }
        });
        triSelect.addEventListener("keydown", (event) => {
            if (event.code === 'ArrowLeft') {
                pop.style.display = 'block';
                dat.style.display = 'none';
                tit.style.display = 'none';
                clicked.style.display = 'none';
                triArrow.style.display = 'block';
            }
        });
        triSelect.addEventListener("keydown", (event) => {
                if (event.code === 'Enter') {
                    console.log(pop.className);
                    if (pop.className.includes('popularite')) {
                        dataMediaSort = dataMedia.sort((a, b) => b.likes - a.likes);
                        displayMediaSort(dataMediaSort);
                        dat.classList.remove("selected");
                        pop.classList.add("selected");
                        tit.classList.remove("selected");
                        pop.style.display = 'block';
                        //li.style.position = 'absolute';
                        dat.style.display = 'none';
                        triArrow.style.display = 'block';
                        clicked.style.display = 'none';
                    } else if (pop.className.includes('date')) {
                        dataMediaSort = dataMedia.sort((a, b) => {
                            return new Date(a.date).valueOf() - new Date(b.date).valueOf();
                        });
                        displayMediaSort(dataMediaSort);
                        dat.classList.add("selected");
                        pop.classList.remove("selected");
                        pop.style.display = 'none';
                        tit.classList.remove("selected");
                        pop.style.display = 'none';
                        li.style.position = 'absolute';
                        triArrow.style.display = 'block';
                        clicked.style.display = 'none';
                    }
                }
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
            /*new Modal().showHtmlModal();
            new Modal().addModal();
            new Form().getFields();
            new LightBox().addModal();
            new AddLikes().adHeart();*/
        });
    };
    export default KeyDownPh;