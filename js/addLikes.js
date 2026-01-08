class AddLikes {
    constructor() {
        this.totalLikesElement = document.querySelector('.totalLikes .likes');
        this.likesCountSpan = null; // Sera rempli avec <span class="likes-count">
        this.totalLikes = 0;
    }

    /**
     * Initialise le système de likes :
     * - Calcule le total initial
     * - Attache les événements click + Enter sur tous les boutons likes
     */
    init() {
        if (!this.totalLikesElement) {
            console.warn("Élément .totalLikes .likes non trouvé");
            return;
        }

        // Récupérer tous les éléments contenant le nombre de likes individuels
        const likesElements = document.querySelectorAll('.mediaLikes .likes-count');

        // Calcul du total initial
        this.totalLikes = 0;
        likesElements.forEach(el => {
            this.totalLikes += parseInt(el.textContent, 10) || 0;
        });

        // Mise à jour de l'affichage du total (avec cœur)
        this.updateTotalDisplay();

        // Attacher les événements (click + clavier) une seule fois
        document.querySelectorAll('.mediaLikes').forEach(likeContainer => {
            likeContainer.addEventListener('click', (e) => this.handleLikeToggle(e, likeContainer));
            likeContainer.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.handleLikeToggle(e, likeContainer);
                }
            });

            // Accessibilité : rôle bouton + aria-label dynamique
            likeContainer.setAttribute('role', 'button');
            likeContainer.setAttribute('tabindex', '0');
            const count = parseInt(likeContainer.querySelector('.likes-count').textContent, 10);
            likeContainer.setAttribute('aria-label', `J'aime cette photo (${count} likes)`);
        });
    }

    /**
     * Gère le like/delike
     */
    handleLikeToggle(event, container) {
        // Empêche la propagation si clic sur l'icône cœur
        event.stopPropagation();

        const countElement = container.querySelector('.likes-count');
        if (!countElement) return;

        let currentLikes = parseInt(countElement.textContent, 10);

        if (container.classList.contains('clicked')) {
            // Déjà liké → on retire
            currentLikes--;
            container.classList.remove('clicked');
            this.totalLikes--;
        } else {
            // Pas encore liké → on ajoute
            currentLikes++;
            container.classList.add('clicked');
            this.totalLikes++;
        }

        // Mise à jour affichage
        countElement.textContent = currentLikes;
        this.updateTotalDisplay();

        // Mise à jour aria-label
        container.setAttribute('aria-label', `J'aime cette photo (${currentLikes} likes)`);
    }

    /**
     * Met à jour l'affichage du total des likes
     */
    updateTotalDisplay() {
        // Structure attendue : <div class="likes"><span class="likes-count">123</span> <i class="fas fa-heart"></i></div>
        if (!this.likesCountSpan) {
            // Créer la structure si elle n'existe pas encore
            this.totalLikesElement.innerHTML = `
                <span class="likes-count">${this.totalLikes}</span>
                <i class="fas fa-heart" aria-hidden="true"></i>
            `;
            this.likesCountSpan = this.totalLikesElement.querySelector('.likes-count');
        } else {
            this.likesCountSpan.textContent = this.totalLikes;
        }
    }
}

export default AddLikes;