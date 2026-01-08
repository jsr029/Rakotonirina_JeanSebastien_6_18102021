import SliderModal from "./Slider.js";
import TabIndexModal from "./tabIndexModal.js";

class LightBox {
    constructor() {
        this.lightBoxModal = document.getElementById("myLightModal");
        this.closeBtn = document.querySelector(".closeLightBox");
        this.mediaLinks = []; // Sera rempli une fois
        this.currentIndex = 0;
        this.previousFocusElement = null;

        // Éviter les ajouts multiples d'event listeners
        this.boundHandleMediaOpen = this.handleMediaOpen.bind(this);
        this.boundHandleClose = this.handleClose.bind(this);
        this.boundHandleKeyClose = this.handleKeyClose.bind(this);
        this.boundHandleOutsideClick = this.handleOutsideClick.bind(this);
        this.boundHandleKeyNav = this.handleKeyNav.bind(this);
    }

    init() {
        if (!this.lightBoxModal || !this.closeBtn) {
            console.warn("Lightbox elements not found in DOM");
            return;
        }

        // Récupérer tous les liens médias une seule fois
        this.mediaLinks = Array.from(document.querySelectorAll('.pictVideos a'));

        // Ajouter les événements (click + Enter) sur chaque média
        this.mediaLinks.forEach((link, index) => {
            link.addEventListener("click", (e) => this.boundHandleMediaOpen(e, index));
            link.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    this.boundHandleMediaOpen(e, index);
                }
            });
        });

        // Fermeture
        this.closeBtn.addEventListener("click", this.boundHandleClose);
        this.closeBtn.addEventListener("keydown", this.boundHandleKeyClose);

        // Fermeture au clic extérieur ou Escape
        this.lightBoxModal.addEventListener("click", this.boundHandleOutsideClick);
        document.addEventListener("keydown", this.boundHandleKeyNav);
    }

    open(index) {
        this.currentIndex = index;
        const clickedLink = this.mediaLinks[index];
        const mediaContent = clickedLink.innerHTML;

        // Insérer le média dans la lightbox
        const slideContainer = document.getElementById("slide");
        if (slideContainer) {
            slideContainer.innerHTML = mediaContent;
        }

        // Accessibilité
        this.previousFocusElement = document.activeElement;
        this.lightBoxModal.style.display = "flex"; // ou utilisez une classe .open
        this.lightBoxModal.setAttribute("aria-hidden", "false");

        // Trap focus dans la modale
        this.trapFocus();

        // Initialiser le slider et le tabindex
        new SliderModal(this.mediaLinks, index);
        new TabIndexModal().tabIndexPhModal();

        // Focus sur le bouton de fermeture pour une meilleure accessibilité
        this.closeBtn.focus();
    }

    close() {
        this.lightBoxModal.style.display = "none";
        this.lightBoxModal.setAttribute("aria-hidden", "true");

        // Retour du focus à l'élément précédent
        if (this.previousFocusElement) {
            this.previousFocusElement.focus();
        }
    }

    // Handlers
    handleMediaOpen(e, index) {
        e.preventDefault();
        this.open(index);
    }

    handleClose() {
        this.close();
    }

    handleKeyClose(e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this.close();
        }
    }

    handleOutsideClick(e) {
        if (e.target === this.lightBoxModal) {
            this.close();
        }
    }

    handleKeyNav(e) {
        if (e.key === "Escape" && this.lightBoxModal.style.display === "flex") {
            this.close();
        }
    }

    // Focus trap simple dans la modale
    trapFocus() {
        const focusableElements = this.lightBoxModal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        this.lightBoxModal.addEventListener("keydown", (e) => {
            if (e.key === "Tab") {
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        });
    }
}

export default LightBox;