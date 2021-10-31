import json2Js from "./main.js";
json2Js.then(function (result) {
    var dataBase = result;
        var Factory = function () {
            var datasPhs = dataBase.photographers;
            for(let i=0; i < datasPhs.length; i++){
                var namePh = datasPhs[i].name;

                console.log(namePh);
            }

        };
    var photograph = new Factory();
    console.log(photograph);
});