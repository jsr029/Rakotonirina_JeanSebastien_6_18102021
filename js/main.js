import databaseAvailable from "./json2Js.js";
import launchIndex from "./launchIndex.js";
var d = [];
var datasPhs = [];
const aList = document.querySelectorAll('a');
databaseAvailable.then(function(database) {
        d = database.photographers;
        launchIndex(d);
        //console.log(d);
        aList.forEach((btn) => btn.addEventListener("click", getTagUrl));
    console.log(database);
});
function getTagUrl(){
    const urlClicked = window.location.href;
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
function removeListPhs(){
     // select the target element
     const e = document.querySelectorAll("article");
     // remove the list item
     for(let i=0; i < e.length; i++){
        e[i].parentElement.removeChild(e[i]);
     }
}
window.addEventListener('hashchange', function() {
    removeListPhs();
    getTagUrl();
  }, false);
  