import SliderModal from "./Slider.js";
class LightBox {

    addModal() {
        var lmc = document.querySelector('.light-modal-content');
        const lmcH2 = document.querySelector('.light-modal-content h2');
        // Get the lightBoxModal
        var lightBoxModal = document.querySelector("#myLightModal");
        var imageModalH = document.querySelector('.imageModal');
        // Get the <span> element that closes the lightBoxModal
        const spanClose = document.querySelector(".closeLightBox");
        // When the user clicks on the class selector videoRimg, open the lightBoxModal
        // and display the img clicked
        const videoRimg = document.querySelector('#myLightModal .videoRimg');
        const videoOrimgAll = document.querySelectorAll("#myLightModal .videoRimg");
        const mD = document.querySelector('#myLightModal .mediaDetails');
        const pv = Array.from(document.querySelectorAll('.pictVideos a'));
        pv.forEach((v, index) => v.addEventListener("click", function (elt) {
            imageModalH.innerHTML = v.innerHTML;
            lightBoxModal.style.display = "flex";
            new SliderModal(pv, index);
        }));
        // When the user clicks on <span> (x), close the lightBoxModal
        spanClose.addEventListener("click", function () {
            lightBoxModal.style.display = "none";
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