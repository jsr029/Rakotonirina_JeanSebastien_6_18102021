// Declare global variables
//Function to show list of Photographers with details
var loopPhs = function (d) {
    var name, address, tags, tagline, portrait, price, id;
    const section = document.querySelector('section.listPhs');
    for (let i = 0; i < d.length; i++) {
        const article = document.createElement("article");
        const navA = document.createElement('a');
        const portraitH = document.createElement('img');
        const h2 = document.createElement('h2');
        const addressH = document.createElement('p');
        const taglineH = document.createElement('p');
        const tagsH = document.createElement('ul');
        const priceH = document.createElement('p');

        id = d[i].id;
        portrait = d[i].portrait;
        name = d[i].name;
        address = d[i].city + ", " + d[i].country;
        tagline = d[i].tagline;
        price = d[i].price + "€/jour";
        tags = d[i].tags;
        //console.log(name, address, tags, tagline, portrait, price);
        article.className = "ph";
        navA.className = "photograph";
        portraitH.className = "foto";
        h2.className = name;
        addressH.className = "location";
        taglineH.className = "tagline";
        tagsH.className = "tags";
        priceH.className = "price";
        
        navA.tabIndex = 2 * i + 5;
        addressH.tabIndex = 3 * i + 6;
        taglineH.tabIndex = 3 * i + 6;        
        priceH.tabIndex = 3 * i + 6;
        tagsH.tabIndex = 4 * i +7;

        for (var j = 0; j < tags.length; j++) {
            var liH = document.createElement('li');
            liH.textContent = "#" + tags[j];
            tagsH.appendChild(liH);
        }

        section.appendChild(article);
        article.appendChild(navA);
        navA.appendChild(portraitH);
        portraitH.src = './img/Photographers ID Photos/' + portrait;
        portraitH.alt = name;
        portraitH.title = "Photograph " + name + " picture";
        navA.appendChild(h2);
        navA.href = "photograph.html?id=" + id;
        h2.textContent = name;
        article.appendChild(addressH);
        addressH.textContent = address;
        article.appendChild(taglineH);
        taglineH.textContent = tagline;
        article.appendChild(priceH);
        priceH.textContent = price;
        article.appendChild(tagsH);
    }
    return name, address, tags, tagline, portrait, price, id;
};
export default loopPhs;