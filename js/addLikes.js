class AddLikes{
    adHeart(){
        const iconHeart = document.querySelectorAll('.heartLikes i');
        iconHeart.forEach((ic) => ic.addEventListener("click", function(ico){
            let iconSplit =  ico.target.classList.value.split(" ");
            let mediaLikes = ic.parentNode.parentNode;
            //console.log(mediaLikes.childNodes[5]);
            let likesNum = parseInt(mediaLikes.childNodes[5].textContent);
            //console.log(mediaLikes.childNodes[5].textContent);
            if(iconSplit[0] == 'far'){
                ico.target.classList.replace('far', 'fas');
                ico.target.classList.remove('clicked');
                mediaLikes.childNodes[5].textContent = likesNum + 1;            
            }
            if(iconSplit[0] == 'fas'){
                ico.target.classList.replace('fas', 'far');
                ico.target.classList.add('clicked');
                mediaLikes.childNodes[5].textContent = likesNum - 1;            
            }
        }));
    }    
    totalLikes(){
        const allLikes = document.querySelectorAll('.mediaLikes');
        let arrayLikes = []; 
        allLikes.forEach((elm) => {
            //console.log(elm.textContent);
            arrayLikes.push(parseInt(elm.textContent));
        });
        var total = 0;
        for (var i = 0; i < arrayLikes.length; i++){
            total += arrayLikes[i];
            }
        const likes = document.querySelector('.likes');
        likes.insertAdjacentHTML("afterbegin", total);
    }
}
export default AddLikes;
