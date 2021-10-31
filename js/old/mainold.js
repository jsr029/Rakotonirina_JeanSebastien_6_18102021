class DataBase {
    async getDataJson() {
        let url = '../json/fisheye.json';
        let response = await fetch(url);
        let data = await response.json();

        const dataPhotographers = [...data.photographers];
        const dataMedias = [...data.media];

        return {
            'photographers': dataPhotographers,
            'media': dataMedias
        };
    }
}
var json2Js = new DataBase().getDataJson();
export default json2Js;