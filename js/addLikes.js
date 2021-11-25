class AddLikes{
    adHeart(){
        const iconHeart = document.querySelectorAll('.mediaDetails i');
        iconHeart.forEach((ic) => ic.addEventListener("click", function(ico){
            let mediaLikes = ic.parentNode;
            let likesNum = parseInt(mediaLikes.textContent);
            //TextContent ParentNode Selector mediaDetails i => mediaDetails
            if(ico.target.classList.value.split(' ')[0] === 'far'){
                ico.target.classList.value.split(' ')[0].replace('far', 'fas');            
                mediaLikes.textContent = likesNum + 1;
               mediaLikes.insertAdjacentHTML("beforeend",`<i class="fas fa-heart" aria-label="likes" aria-hidden="true"></i>`);
            }
        }));
    }
    removeHeart(){
        const iconHeart = document.querySelectorAll('.mediaDetails i');
        iconHeart.forEach((ic) => ic.addEventListener("click", function(ico){
            let mediaLikes = ic.parentNode;
            let likesNum = parseInt(mediaLikes.textContent);
            //TextContent ParentNode Selector mediaDetails i => mediaDetails
            if(ico.target.classList.value.split(' ')[0] === 'fas'){
                ico.target.classList.value.split(' ')[0].replace('fas', 'far');            
                mediaLikes.textContent = likesNum - 1;
                //mediaLikes.insertAdjacentHTML("beforeend",`<i class="far fa-heart" aria-label="likes" aria-hidden="true"></i>`);
                }
        }));
    }    
}
export default AddLikes;