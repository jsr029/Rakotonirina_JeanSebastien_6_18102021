class AddLikes {
    constructor() {
        //Object totalLikes
        this.totalLikes = function () {
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
            return likes.innerHTML;
        };
    }
    adHeart() {
        //Selector class likes
        let totalLikesH = document.querySelector('.totalLikes .likes');
        totalLikesH.innerHTML = totalNumberOfLikes;
        //Get the total likes fron the constructor 
        var totalNumberOfLikes = this.totalLikes();
        //Selector mediaLikes
        let mediaLikes = Array.from(document.querySelectorAll('.tab .mediaLikes'));
        //for each mediaLikes, on click event, looking for class value mediaLikesClass, putting conditions on length <2 or >1
        mediaLikes.forEach((ic) => ic.addEventListener("click", function (ico) {
            //console.log(ico.target.innerHTML);
            //set medialikes html targeted by the mouse click
            let mediaLikesValue = ico.target;
            //Set value type number of the innerHtml
            let likesNum = parseInt(mediaLikesValue.innerHTML);
            //find mediaLikes className
            let mediaLikesClass = ico.target.className;
            //Split the classname mediaLikes clicked
            let mediaLikesClassSplit = mediaLikesClass.split(" ");
            //If the array.length containing className is less than 2 
            if (mediaLikesClassSplit.length < 2) {
                //console.log(mediaLikesClassSplit.length);
                //add clicked to the className mediaLikes
                mediaLikesValue.classList.add('clicked');
                //console.log(mediaLikesClass);
                //Add 1 to the mediaLikesValue in its Html 
                mediaLikesValue.innerHTML = likesNum + 1;
                //increment +1 the total of like
                ++totalNumberOfLikes;
            }
            //if the array.length containing className is more than 1, as it used to be [mediaLikes, clicked]
            if (mediaLikesClassSplit.length > 1) {
                //remove clicked in the array class
                mediaLikesValue.classList.remove('clicked');
                //Substract 1 from the value type number 
                mediaLikesValue.innerHTML = likesNum - 1;
                //Substract 1 from the total of likes
                --totalNumberOfLikes;
            }
            //inject the total of likes inside class likes
            totalLikesH.innerHTML = totalNumberOfLikes;
        }));
        mediaLikes.forEach((ic) => ic.addEventListener("keydown", function (ico) {
            if (ico.code === 'Enter') {
                //console.log(ico.target.innerHTML);
                //set medialikes html targeted by the mouse click
                let mediaLikesValue = ico.target;
                //Set value type number of the innerHtml
                let likesNum = parseInt(mediaLikesValue.innerHTML);
                //find mediaLikes className
                let mediaLikesClass = ico.target.className;
                //Split the classname mediaLikes clicked
                let mediaLikesClassSplit = mediaLikesClass.split(" ");
                //If the array.length containing className is less than 2 
                if (mediaLikesClassSplit.length < 2) {
                    //console.log(mediaLikesClassSplit.length);
                    //add clicked to the className mediaLikes
                    mediaLikesValue.classList.add('clicked');
                    //console.log(mediaLikesClass);
                    //Add 1 to the mediaLikesValue in its Html 
                    mediaLikesValue.innerHTML = likesNum + 1;
                    //increment +1 the total of like
                    ++totalNumberOfLikes;
                }
                //if the array.length containing className is more than 1, as it used to be [mediaLikes, clicked]
                if (mediaLikesClassSplit.length > 1) {
                    //remove clicked in the array class
                    mediaLikesValue.classList.remove('clicked');
                    //Substract 1 from the value type number 
                    mediaLikesValue.innerHTML = likesNum - 1;
                    //Substract 1 from the total of likes
                    --totalNumberOfLikes;
                }
                //inject the total of likes inside class likes
                totalLikesH.innerHTML = totalNumberOfLikes;
            }
        }));
    }
}

export default AddLikes;