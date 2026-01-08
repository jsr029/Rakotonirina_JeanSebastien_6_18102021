import LightBox from "./lightBox.js";
import AddLikes from "./addLikes.js";

class DropDown {
    constructor(media, onSortChange) {
        this.media = media;                    // Tous les médias du photographe
        this.onSortChange = onSortChange;      // Callback pour re-rendre les médias
        this.isOpen = false;
        this.currentSort = 'popularite';       // Par défaut
        this.init();
    }

    init() {
        this.combobox = document.querySelector('#tri-combobox'); // ou votre conteneur
        this.button = document.querySelector('.tri-button');
        this.selectedSpan = document.querySelector('#tri-selected');
        this.optionsList = document.querySelector('#tri-list');
        this.options = document.querySelectorAll('#tri-list [role="option"]');

        if (!this.button || !this.optionsList) {
            console.warn("Éléments du dropdown de tri non trouvés");
            return;
        }

        // État initial
        this.updateSelectedText('Popularité');

        // Événements
        this.button.addEventListener('click', () => this.toggle());
        this.button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggle();
            } else if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });

        this.options.forEach(option => {
            option.addEventListener('click', () => {
                this.selectOption(option);
            });
            option.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.selectOption(option);
                }
            });
        });

        // Fermeture au clic extérieur
        document.addEventListener('click', (e) => {
            if (!this.combobox.contains(e.target)) {
                this.close();
            }
        });

        // Navigation clavier dans la liste
        this.optionsList.addEventListener('keydown', (e) => {
            const current = document.activeElement;
            let next;
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                next = current.nextElementSibling || this.options[0];
                next.focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                next = current.previousElementSibling || this.options[this.options.length - 1];
                next.focus();
            }
        });
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        this.isOpen = true;
        this.optionsList.hidden = false;
        this.combobox.setAttribute('aria-expanded', 'true');
        this.button.querySelector('.fa-chevron-down').classList.replace('fa-chevron-down', 'fa-chevron-up');
        // Focus sur l'option actuelle
        const currentOption = this.optionsList.querySelector(`[data-value="${this.currentSort}"]`);
        if (currentOption) currentOption.focus();
    }

    close() {
        this.isOpen = false;
        this.optionsList.hidden = true;
        this.combobox.setAttribute('aria-expanded', 'false');
        this.button.querySelector('.fa-chevron-up')?.classList.replace('fa-chevron-up', 'fa-chevron-down');
        this.button.focus();
    }

    selectOption(option) {
        const value = option.dataset.value;
        const text = option.textContent.trim();

        this.currentSort = value;
        this.updateSelectedText(text);
        this.close();

        // Appliquer le tri via la callback (fournie par Photograph)
        this.sortAndRender(value);
    }

    updateSelectedText(text) {
        if (this.selectedSpan) {
            this.selectedSpan.textContent = text;
        }
    }

    sortAndRender(sortBy) {
        let sorted = [...this.media];

        if (sortBy === 'popularite') {
            sorted.sort((a, b) => b.likes - a.likes);
        } else if (sortBy === 'date') {
            sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortBy === 'titre') {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        }

        // On délègue le rendu à Photograph via callback
        if (this.onSortChange) {
            this.onSortChange(sorted);
        }
    }
}

export default DropDown;