import databaseAvailable from "./json2Js.js";
import getPhs from "./getPhs.js";
import getMedias from "./getMedias.js";
databaseAvailable.then(function (r) {
    var d = r.photographers;
    var e = r.media;
    var id;
    var dataPhs = new getPhs(d);
    getProfilById(d);
    var dataMedia = new getMedias(e);
    getMediasByTags(e);
    console.log(dataMedia);
});
function getProfilById(dataPhs) {
    var urlClicked = window.location.href;
    //split it by #
    var urlSplit = urlClicked.split('=');
    // take the index 1 which contains the tag we need to compare
    var aClicked = urlSplit[1];

    const name = document.querySelector('.name');
    const address = document.querySelector('.location');
    const tagline = document.querySelector('.tagline');
    const tags = document.querySelector('.tags');
    const photo = document.querySelector('.photo img');

    // Loop in the photographers tab
    dataPhs.forEach(function (k) {
        //console.log(k.id);
        //If the tag menu is the same of the tag photographers, show photographers with the same tag
        if (k.id == aClicked) {
            name.textContent = k.name;
            address.textContent = k.city + ', ' + k.country;
            tagline.textContent = k.tagline;
            tags.textContent = k.tags;
            photo.src = "../img/Photographers ID Photos/" + k.portrait;
            photo.alt = k.name;
            photo.title = k.name;
        }
    });
}
function getMediasByTags(dataMedia){
    console.log(dataMedia);
    var urlClicked = window.location.href;
    //split it by #
    var urlSplit = urlClicked.split('=');
    // take the index 1 which contains the tag we need to compare
    var aClicked = urlSplit[1];
    const section = document.querySelector("#media");
    const name = document.querySelector(".identity .name");
    const artMedia = document.createElement("article");
    artMedia.className = "pictVideos";
    dataMedia.forEach(function (k) {
        const aMedia = document.createElement("a");
        const imgMedia = document.createElement("img");
        const videoMedia = document.createElement("video");
        const videoSourceMedia = document.createElement("source");
        //console.log(k.id);
        //If the tag menu is the same of the tag photographers, show photographers with the same tag
        if (k.photographerId == aClicked) {
            section.appendChild(artMedia);
            artMedia.appendChild(aMedia);
            aMedia.href = "#";
            var srcMedia = name.innerHTML;
            var srcSplit = srcMedia.split(" ");
            var urlMedia = "./img/"+ srcSplit[0]+"/"+k.image;
            var urlMediaSplit = urlMedia.split('.');
            console.log(urlMediaSplit[2]);
            if(urlMediaSplit[2]=='jpg'){
                aMedia.appendChild(imgMedia);
                imgMedia.src = urlMedia;
            }else{
                aMedia.appendChild(videoMedia);
                videoMedia.appendChild(videoSourceMedia);
                videoMedia.controls = true;
                videoSourceMedia.src = "./img/"+ srcSplit[0]+"/"+k.video;
                videoSourceMedia.type = 'video/mp4';
            }
        }
    });
}
