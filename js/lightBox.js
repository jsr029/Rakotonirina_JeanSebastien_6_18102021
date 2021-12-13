import SliderModal from "./Slider.js";
import TabIndexModal from "./tabIndexModal.js";
class LightBox {

    addModal() {
        var lmc = document.querySelector('.light-modal-content');
        // Get the lightBoxModal
        var lightBoxModal = document.querySelector("#myLightModal");
        var imageModalH = document.querySelector('.imageModal');
        // Get the <span> element that closes the lightBoxModal
        const spanClose = document.querySelector(".closeLightBox");
        // When the user clicks on the class selector videoRimg, open the lightBoxModal
        // and display the img clicked
        const pv = Array.from(document.querySelectorAll('.pictVideos a'));
        pv.forEach((v, index) => v.addEventListener("click", function (elt) {
            imageModalH.innerHTML = v.innerHTML;
            //mD.innerHTML = v.parentNode.childNodes[3].innerHTML;
            lightBoxModal.style.display = "flex";
            new SliderModal(pv, index);
            new TabIndexModal().tabIndexPhModal();
        }));
        const pvimg = Array.from(document.querySelectorAll('.pictVideos a'));
        pvimg.forEach((v, index) => v.addEventListener("keydown", function (event) {
            if(event.code === "Enter"){
                console.log(v);
                 lightBoxModal.style.display = "flex";
               imageModalH.innerHTML = v.innerHTML;
                new SliderModal(pv, index);
                new TabIndexModal().tabIndexPhModal();

            }
        }));
        // When the user clicks on <span> (x), close the lightBoxModal
        spanClose.addEventListener("click", function () {
            lightBoxModal.style.display = "none";
        });
        const modal = document.querySelector("#myLightModal");
        var spanCloseLightModal = document.getElementsByClassName("closeLightBox")[0];
        spanCloseLightModal.addEventListener("keydown", (event) => {
            if (event.code === "Enter") {
                modal.style.display = "none";
            }
        });

        // When the user clicks anywhere outside of the lightBoxModal, close it
        window.onclick = function (event) {
            if (event.target == lightBoxModal) {
                lightBoxModal.style.display = "none";
            }
        };
    }
}


export default LightBox;