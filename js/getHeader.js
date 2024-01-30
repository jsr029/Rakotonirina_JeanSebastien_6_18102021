import ActiveClass from "./activeClass.js";
import GetPhs from "./GetPhs.js";
import removeIndex from "./removeIndex.js";
class Header { 
    getHeader(r) {
        let dataPhotos = r.photographers;
        const main = document.querySelector('.global');
        let header = document.createElement('header');
        header.className = "entete";
        main.prepend(header);
        dataPhotos.forEach(element => { 
            //console.log(element); 
            let boxHeader = `
                <a id="flightMenu" href="#listPhotographers">Passer au contenu</a>
                <div class="logo">
                <a href="https://jsr029.github.io/Rakotonirina_JeanSebastien_6_18102021/"><img src="./img/logo.JPG"
                        alt="logo Fisheye"></a>
                </div>
                <nav id="Menu" class="menu" role="navigation" aria-label="Navigation Menu">
                       <a href="javascript:void(0);" class="icon">
                       <i class="fa fa-bars"></i>
                     </a>
                       <a href="#portrait" data-filter="portrait" class="aMenu">#Portrait</a>
                       <a href="#art" data-filter="art" class="aMenu">#Art</a>                       
                       <a href="#fashion" data-filter="fashion" class="aMenu">#Fashion</a>
                       <a href="#architecture" data-filter="architecture" class="aMenu">#Architecture</a>
                       <a href="#travel" data-filter="travel" class="aMenu">#Travel</a>
                       <a href="#sport" data-filter="sport" class="aMenu">#Sport</a>                       
                       <a href="#animals" data-filter="animals" class="aMenu">#Animals</a>
                       <a href="#events" data-filter="events" class="aMenu">#Events</a>
                    </nav>
                <h2 class="titleH">Nos Photographes</h2> 
                `;
            header.innerHTML = boxHeader;
        });
        new ActiveClass().classActive();
    }
    getNavFilter(r) {
        let dataPhotos = r.photographers;
        const navA = document.querySelectorAll('nav a');
        navA.forEach((nav) => nav.addEventListener("click", function (nav) {
            removeIndex();
            let urlClicked = nav.target.innerHTML.slice(1);
            //console.log(urlClicked);
            dataPhotos.forEach(function (elm) {
                elm.tags.filter((el)=>el.includes(urlClicked))
                console.log(elm.tags);
                if (elm.tags.includes(urlClicked.toLowerCase())) {
                    let datas = [];
                    datas.push(elm);
                    new GetPhs().listPhs(datas);
                }
            });
        }));
        new GetPhs().listPhs(dataPhotos);
    }
}
export default Header;
