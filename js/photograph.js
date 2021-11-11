import databaseAvailable from "./json2Js.js";
databaseAvailable.then(function (r) {
    new Photograph().getProfilById(r);
    new Photograph().getMediasByTags(r);
});

class Photograph{
        getProfilById(r) {
        var dataPhotos = r.photographers;
        var urlClicked = window.location.href;
        //split it by #
        var urlSplit = urlClicked.split('=');
        // take the index 1 which contains the tag we need to compare
        var aClicked = urlSplit[1];

        const profil = document.querySelector('.profil');

        // Loop in the photographers tab
        dataPhotos.forEach(function (k) {
               if (k.id == aClicked) {
    let boxPhotograph = `
                    <ul class="identity">
                        <li class="name">${k.name}</li>
                        <li class="location">${k.city + ', ' + k.country}</li>
                        <li class="tagline">${k.tagline}</li>
                        <li class="tags">${k.tags}</li>
                    </ul>
                    <ul class="contact"></ul>
                    <ul class="image">
                        <li class="photo">
                            <a href="#"><img src="${"./img/Photographers ID Photos/" + k.portrait}" alt="${k.name}"></a>
                        </li>
                    </ul>
            `;
            profil.innerHTML = boxPhotograph;
               }
        });
    }
        getMediasByTags(r){
        var dataMedia = r.media;
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
                console.log(k);
                section.appendChild(artMedia);
                artMedia.appendChild(aMedia);
                aMedia.href = "#";
                var srcMedia = name.innerHTML;
                var srcSplit = srcMedia.split(" ");
                var urlMedia = "./img/"+ srcSplit[0]+"/"+k.image;
                var urlMediaSplit = urlMedia.split('.');
                console.log(urlMediaSplit[2]);
                if(urlMediaSplit[2]==='jpg'){
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
}
export default Photograph;