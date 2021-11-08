import databaseAvailable from "./json2Js.js";
import loopPhs from "./loopPhs.js";
import getPhs from "./getPhs.js";
import activeClass from "./activeClass.js";
import FlightMenu from "./flightMenu.js";
databaseAvailable.then(function (r) {
    new FlightMenu().menuTop();
    var d = r.photographers;
    //Instantiate Object Photographers 
    var dataPhs = new getPhs(d);
    //List of Photographers and its details (name, city, country, tagline, tags, price, portrait)
    new loopPhs(d);
    //Select all a in nav header in nav const
    const nav = document.querySelectorAll("nav a");

    //For each a listen on clic events and find the tag menu word
    nav.forEach((elm) => elm.addEventListener("click", function () {
        //Remove index Html
        removeIndexHtml();
        //Url clicked
        var urlClicked = elm.href;
        //split it by #
        var urlSplit = urlClicked.split('#');
        // take the index 1 which contains the tag we need to compare
        var aClicked = urlSplit[1];
        // Loop in the photographers tab
        d.forEach(function (k) {
            //If the tag menu is the same of the tag photographers, show photographers with the same tag
            if (k.tags.includes(aClicked)) {
                //declare variable as an array
                var dataPhs = [];
                //push array k (photographers datas with the same tag) into dataPhs array
                dataPhs.push(k);
                //Show datas in Index Html
                new loopPhs(dataPhs);
            }
        });
    }));
    activeClass();
});
//Function remove Index Html
function removeIndexHtml() {
    // select the target element
    const e = document.querySelectorAll("article");
    // remove the list item
    for (let i = 0; i < e.length; i++) {
        e[i].parentElement.removeChild(e[i]);
    }
}