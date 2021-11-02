class Datas {
    async getJson() {
        let url = '../json/fisheye.json';
        let response = await fetch(url);
        let data = await response.json();

        const dataPhotographers = data.photographers;
        const dataMedias = data.media;

        return {
            'photographers': dataPhotographers,
            'media': dataMedias
        };
    }
}
var databaseAvailable = new Datas().getJson();
databaseAvailable.then(function(r){
    console.clear();
    console.log(r);
});
export default databaseAvailable;