//var header = document.querySelector('header');
var section = document.querySelector('section');
 var launchIndex = function(datasPhs) {
        var fotografers = datasPhs;
        fotografers = Array.from(new Set(fotografers));
        console.clear();
        console.log(fotografers);
        for (var i = 0; i < fotografers.length; i++) {
            var myArticle = document.createElement('article');
            myArticle.className = "ph";
            myArticle.label = fotografers[i].name + "'s details";
            var myNavA = document.createElement('a');
            myNavA.className = 'photograph';
            myNavA.href = "/photograph.html?id=" + fotografers[i].id;
            var myH2 = document.createElement('h2');
            myH2.className = "name";
            var myPara1 = document.createElement('img');
            myPara1.className = "foto";
            var myPara2 = document.createElement('div');
            myPara2.className = "location";
            var myPara3 = document.createElement('div');
            myPara3.className = "tagline";
            var myPara4 = document.createElement('div');
            myPara4.className = "price";
            var myList = document.createElement('ul');
            myList.className = "tags";

            var phGphTags = [];
            myH2.textContent = fotografers[i].name;
            myPara1.src = './img/Photographers ID Photos/' + fotografers[i].portrait;
            myPara2.textContent = fotografers[i].city + ', ' + fotografers[i].country;
            myPara3.textContent = fotografers[i].tagline;
            myPara4.textContent = fotografers[i].price + '€/jour';
            phGphTags = fotografers[i].tags;
            for (var j = 0; j < phGphTags.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = '#' + phGphTags[j];
            myList.appendChild(listItem);
            }

            myArticle.appendChild(myNavA);
            
            myNavA.appendChild(myPara1);
            myNavA.appendChild(myH2);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);      
            myArticle.appendChild(myList);

            section.appendChild(myArticle);
        }
};

export default launchIndex;