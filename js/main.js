import databaseAvailable from "./json2Js.js";
import launchIndex from "./launchIndex.js";
databaseAvailable.then(function(database) {
        var d = database.photographers;
        const aList = document.querySelectorAll('a');
        launchIndex(d);
        var datasPhs = [];
        //console.log(d);
        aList.forEach((btn) => btn.addEventListener("click", getTagUrl));
        function getTagUrl(event){
            const urlClicked = event.target.toString();
            const urlSplit = urlClicked.split('#');
            const urlTag = urlSplit[1];
            console.log(urlTag);
            d.forEach(function(k){
            if(k.tags.includes(urlTag)){
                datasPhs = [];
                datasPhs.push(k);
                console.log(k);
                launchIndex(datasPhs);
                    }
                });
        }
    console.log(database);
});
