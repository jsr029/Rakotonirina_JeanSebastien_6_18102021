/** Methode Block */
/** 1. la Base json
 *  2. block header logo + nav à partir des tags
 *  3. block main
 *    a. base photographers récupérer portrait, name, address (city,country), tagline, tags, price 
*/
import databaseAvailable from "./js/json2Js.js";
import Header from "./js/getHeader.js";
import editNav from "./js/navResp.js";
import flightMenu from "./js/flightMenu.js";
databaseAvailable.then(function(r){
        new Header().getHeader(r);
        new Header().getNavFilter(r);
        new flightMenu().menuTop();
        const menu = document.querySelector('.entete');
        menu.addEventListener("click", editNav);
    });
