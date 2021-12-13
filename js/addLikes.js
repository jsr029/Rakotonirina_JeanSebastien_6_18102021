class AddLikes {
    adHeart() {
        //load totalLikes Object
        totalLikes();
        //Selector class likes
        let totalLikesH = document.querySelector('.totalLikes .likes');
        let totalNumberOfLikesH = totalLikesH.innerHTML;
        //Get value type number, total of like before + or - clicked 
        var totalNumberOfLikes = parseInt(totalLikesH.innerHTML);
        //Selector i, fontawesome heart

        let mediaLikes = Array.from(document.querySelectorAll('.tab .mediaLikes'));
        //for each i, on click event, looking for class value mediaLikesClass, putting condition far or fas
        mediaLikes.forEach((ic) => ic.addEventListener("click", function (ico) {
            //console.log(ico.target.innerHTML);
            let mediaLikesValue = ico.target;

            //Set value type number
            let likesNum = parseInt(mediaLikesValue.innerHTML);
            let mediaLikesClass = ico.target.className;
            let mediaLikesClassSplit = mediaLikesClass.split(" ");
            //If i class far is clicked 
            if (mediaLikesClassSplit.length < 2) {
                console.log(mediaLikesClassSplit.length);
                ico.target.classList.add('clicked');
                //console.log(mediaLikesClass);
                mediaLikesValue.innerHTML = likesNum + 1;
                //increment +1 the total of like
                totalNumberOfLikes++;
            }
            //Do the contrary of upper
            if (mediaLikesClassSplit.length > 1) {
                ico.target.classList.remove('clicked');
                mediaLikesValue.innerHTML = likesNum - 1;
                //console.log(mediaLikesClass);
                console.log(mediaLikesValue.innerHTML);
                totalNumberOfLikes--;
            }
            //inject the total of likes inside class likes
            totalLikesH.innerHTML = totalNumberOfLikes;
        }));
    }
}
//Object totalLikes
var totalLikes = function () {
    var arrayLikes = [];
    let allLikes = document.querySelectorAll('.tab .mediaLikes');
    allLikes.forEach((elm) => {
        arrayLikes.push(parseInt(elm.innerHTML));
    });
    var total = 0;
    for (var i = 0; i < arrayLikes.length; i++) {
        total += arrayLikes[i];
    }
    const likes = document.querySelector('.likes');
    likes.innerHTML = total;
};
export default AddLikes;
