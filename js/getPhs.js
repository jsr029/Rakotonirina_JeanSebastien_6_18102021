class GetPhs{
    listPhs(dataPhotos){
        dataPhotos.forEach(element => {
        let section = document.querySelector('section');
        const article = document.createElement('article');
        article.className = "ph";
        section.appendChild(article);
           let boxProfil = `
            <a class="photograph" href="./photograph.html?id=${element.id}" tabindex="5" aria-level="5">
                <img class="foto" src="./img/Photographers ID Photos/${element.portrait}" alt="${element.name}">
                <h2>${element.name}</h2>
            </a>
            <ul class="locationTaglinePrice" tabindex="6" aria-level="6" role="group">
                <li>${element.city}, ${element.country}</li>
                <li>${element.tagline}</li>
                <li>${element.price}€/j</li>
            </ul>
            <ul class="tags" tabindex="7" aria-level="7">${element.tags.map(tag =>
                `<li data-filter="${tag}">#${tag}</li>`).join(" ")}</ul> 
            `;
            article.innerHTML = boxProfil;
        });
    }
}
export default GetPhs;