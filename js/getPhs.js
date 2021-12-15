class GetPhs{
    listPhs(dataPhotos){
        dataPhotos.forEach(element => {
        let section = document.querySelector('section');
        const article = document.createElement('article');
        article.className = "ph";
        section.appendChild(article);
           let boxProfil = `
            <a class="photograph tabIndex" href="./photograph.html?id=${element.id}">
                <img class="foto" src="./img/Photographers ID Photos/${element.portrait}" alt="${element.name}">
                <h2>${element.name}</h2>
            </a>
            <ul class="locationTaglinePrice tabIndex" role="list">
                <li>${element.city}, ${element.country}</li>
                <li>${element.tagline}</li>
                <li>${element.price}€/j</li>
            </ul>
            <ul class="tags tabIndex">${element.tags.map(tag =>
                `<li data-filter="${tag}">#${tag}</li>`).join(" ")}</li>
            </ul> 
            `;
            article.innerHTML = boxProfil;
        });
    }
}
export default GetPhs;