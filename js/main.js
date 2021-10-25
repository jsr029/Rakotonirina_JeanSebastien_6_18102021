import databaseAvailable from "./json2Js.js";
import launchIndex from "./launchIndex.js";
databaseAvailable.then(function(database) {
    launchIndex(database);
    console.log(database);
});
