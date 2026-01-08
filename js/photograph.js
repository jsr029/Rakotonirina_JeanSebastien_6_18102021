import databaseAvailable from "./json2Js.js";
import Modal from "./modal.js";
import Form from "./form.js";
import LightBox from "./lightBox.js";  // Attention à la casse si vous avez renommé
import AddLikes from "./addLikes.js";
import DropDown from "./DropDown.js";
import KeyDownPh from "./keyDownPh.js";
import TabIndexPh from "./tabIndexPh.js";

class Photograph {
    constructor(data) {
        this.photographers = data.photographers;
        this.media = data.media;
        this.photographerId = this.getPhotographerIdFromUrl();
        this.currentPhotographer = this.photographers.find(p => p.id == this.photographerId);
        this.photographerMedia = this.media.filter(m => m.photographerId == this.photographerId);
    }

    // Récupère l'ID depuis l'URL (?id=XXX)
    getPhotographerIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    }

    // Affichage du profil photographe
    renderProfile() {
        if (!this.currentPhotographer) return;

        const profil = document.querySelector('.profil');
        const salary = document.querySelector('.salary');

        const profileHTML = `
            <div class="identity">
                <h1 class="name" tabindex="2">${this.currentPhotographer.name}</h1>
                <ul aria-label="Localisation et description">
                    <li class="location" tabindex="3">${this.currentPhotographer.city}, ${this.currentPhotographer.country}</li>
                    <li class="tagline" tabindex="4">${this.currentPhotographer.tagline}</li>
                </ul>
            </div>
            <button class="contactButton" id="myBtn" tabindex="5">Contactez-moi</button>
            <div class="image">
                <img class="ph foto" src="./img/Photographers ID Photos/${this.currentPhotographer.portrait}" 
                     alt="${this.currentPhotographer.name}" tabindex="6">
            </div>
            <ul class="tags" aria-label="Tags du photographe">
                ${this.currentPhotographer.tags.map(tag => 
                    `<li><a class="tagsProfil" href="../index.html#${tag}" tabindex="7">#${tag}</a></li>`
                ).join('')}
            </ul>
        `;

        profil.innerHTML = profileHTML;
        salary.textContent = `${this.currentPhotographer.price}€ / jour`;
    }

    // Affichage des médias (triés par popularité par défaut)
    renderMedia(sortBy = 'likes') {
        const mediaSection = document.querySelector('#media');
        mediaSection.innerHTML = ''; // Vidage complet

        // Copie triée
        let sortedMedia = [...this.photographerMedia];
        if (sortBy === 'likes') {
            sortedMedia.sort((a, b) => b.likes - a.likes);
        } else if (sortBy === 'date') {
            sortedMedia.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortBy === 'title') {
            sortedMedia.sort((a, b) => a.title.localeCompare(b.title));
        }

        const folderName = this.currentPhotographer.name.split(' ')[0].replace('-', ' ');

        sortedMedia.forEach(item => {
            const isVideo = item.video !== undefined;
            const src = isVideo ? item.video : item.image;
            const mediaElement = isVideo
                ? `<video controls aria-label="${item.title}">
                       <source src="./img/${folderName}/${src}" type="video/mp4">
                   </video>`
                : `<img src="./img/${folderName}/${src}" alt="${item.title}, photographie de ${this.currentPhotographer.name}">`;

            const mediaHTML = `
                <article class="pictVideos" data-media-id="${item.id}">
                    <a href="javascript:void(0);" class="media-link" tabindex="8" aria-label="Ouvrir ${item.title} en plein écran">
                        ${mediaElement}
                    </a>
                    <div class="mediaDetails">
                        <h2>${item.title}</h2>
                        <span class="mediaPrice">${item.price}€</span>
                        <span class="mediaLikes" tabindex="9" role="button" aria-label="J'aime (${item.likes} likes)">
                            <span class="likes-count">${item.likes}</span>
                            <i class="fas fa-heart" aria-hidden="true"></i>
                        </span>
                    </div>
                </article>
            `;
            mediaSection.insertAdjacentHTML('beforeend', mediaHTML);
        });

        // Initialisation des fonctionnalités après insertion
        new LightBox().init();
        new AddLikes().init(); // supposant que addLikes a une méthode init()
    }

    // Initialisation complète
    init() {
        if (!this.currentPhotographer) {
            console.error("Photographe non trouvé pour l'ID :", this.photographerId);
            return;
        }

        this.renderProfile();
        this.renderMedia('likes'); // tri par défaut

        // Autres modules
        new Modal().init(); // si vous avez une méthode init
        new Form().init();
        new DropDown(this.photographerMedia, (sortBy) => this.renderMedia(sortBy));
        new KeyDownPh().init();
        new TabIndexPh().settriSelect();
    }
}

// Chargement des données et lancement
databaseAvailable
    .then(data => {
        const photographPage = new Photograph(data);
        if (!photographPage.currentPhotographer) {
            console.error("Photographe non trouvé");
            return;
        }

        photographPage.renderProfile();
        photographPage.renderMedia('likes');  // tri par défaut

        // Initialisation des autres modules
        new Modal().showHtmlModal();     // ou .init() si vous avez ajouté
        new Modal().addModal();
        new Form().getFields();          // ou .init()
        new LightBox().init();           // important : utilisez .init() comme dans ma version corrigée
        new AddLikes().init();           // utilisez .init() comme dans ma version corrigée
        new DropDown(photographPage.photographerMedia, (sortBy) => photographPage.renderMedia(sortBy));
        new KeyDownPh().rightArrow();    // ou .init()
        new TabIndexPh().settriSelect();
    })
    .catch(err => {
        console.error("Erreur chargement données :", err);
    });
    
export default Photograph;