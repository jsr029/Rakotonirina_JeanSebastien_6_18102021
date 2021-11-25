class AddLikes{
    adHeart(){
        const iconHeart = document.querySelectorAll('.mediaDetails i');
        iconHeart.forEach((ic) => ic.addEventListener("click", function(ico){
            const mediaLikes = ic.parentNode;
            var likesNum = parseInt(mediaLikes.textContent, 10);
            if(ic.className === 'far fa-heart'){
                ic.className = 'fas fa-heart';
                //mediaLikes.remove(mediaLikes);
                mediaLikes.textContent = likesNum + 1;
               // mediaLikes.innerHTML = `${likesNum + 1} <i class="fas fa-heart" aria-label="likes" aria-hidden="true"></i>`;
            }else if(ic.className === 'fas fa-heart'){
            ic.className = 'far fa-heart';
                //ic.innerHTML = likesNum - 1;
                mediaLikes.innerHTML = `${likesNum - 1} <i class="far fa-heart" aria-label="likes" aria-hidden="true"></i>`;
            }
        }));
    }    
}
export default AddLikes;