class AddLikes {
    adHeart() {
        //load totalLikes Object
        totalLikes();
        //Selector class likes
        const totalLikesH = document.querySelector('.totalLikes .likes');
        //Get value type number, total of like before + or - clicked 
        var totalNumberOfLikes = parseInt(totalLikesH.parentNode.childNodes[1].innerHTML);
        //Selector i, fontawesome heart
        let iconHeart = document.querySelectorAll('.heartLikes i');
        //for each i, on click event, looking for class value iconSplit[0], putting condition far or fas
        iconHeart.forEach((ic) => ic.addEventListener("click", function (ico) {
            let iconSplit = ico.target.classList.value.split(" ");
            let mediaLikes = ic.parentNode.parentNode;
            //Set value type number
            let likesNum = parseInt(mediaLikes.childNodes[5].innerHTML);
            //If i class far is clicked 
            if (iconSplit[0] == 'far') {
                //replace class name far by fas
                ico.target.classList.replace('far', 'fas');
                //remove class clicked
                ico.target.classList.remove('clicked');
                //inject the number + 1 inside the Html element class mediaLikes
                mediaLikes.childNodes[5].innerHTML = likesNum + 1;
                //increment +1 the total of like
                ++totalNumberOfLikes;
                // var totalLikes = parseInt(totalLikesH.innerHTML);
            }
            //Do the contrary of upper
            if (iconSplit[0] == 'fas') {
                ico.target.classList.replace('fas', 'far');
                ico.target.classList.add('clicked');
                mediaLikes.childNodes[5].innerHTML = likesNum - 1;
                --totalNumberOfLikes;
            }
            //inject the total of likes inside class likes
            totalLikesH.innerHTML = totalNumberOfLikes;
        }));
    }
}
//Object totalLikes
var totalLikes = function () {
    var arrayLikes = [];
    let allLikes = document.querySelectorAll('.mediaLikes');
    allLikes.forEach((elm) => {
        arrayLikes.push(parseInt(elm.innerHTML));
    });
    var total = 0;
    for (var i = 0; i < arrayLikes.length; i++) {
        total += arrayLikes[i];
    }
    const likes = document.querySelector('.likes');
    likes.innerHTML = total/2;
};
export default AddLikes;