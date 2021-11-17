class LightBox{
    showHtmlModal(){
        const container = document.querySelector('.container');
        //const videoRimg = document.querySelectorAll('.videoRimg');
        let boxModal =`
        <section id="myLightModal" class="lightModal">
            <div class="light-modal-content" id="myLightModal">
            </div>
            <span class="closeLightBox">&times;</span>
        </section>
                `;
                container.insertAdjacentHTML("beforeend", boxModal);
            }
    addModal(){
        var lmc = document.querySelector('.light-modal-content');
        // Get the lightBoxModal
        var lightBoxModal = document.getElementById("myLightModal");
           // lightBoxModal.style.display = "none";

        // Get the button that opens the lightBoxModal
        var btn = document.querySelectorAll(".pictVideos");

        // Get the <span> element that closes the lightBoxModal
        const span = document.querySelector(".closeLightBox");

        // When the user clicks on the button, open the lightBoxModal
        /*btn.onclick = function() {
            lightBoxModal.style.display = "block";
        };*/
        const videoRimg = document.querySelectorAll('.videoRimg');
        videoRimg.forEach((v) => v. addEventListener("click", function(elt){
            lmc.innerHTML = v.innerHTML;
            lightBoxModal.style.display = "block";
        }));
        // When the user clicks on <span> (x), close the lightBoxModal
        span.addEventListener("click", function() {
            lightBoxModal.style.display = "none";
            });

        // When the user clicks anywhere outside of the lightBoxModal, close it
        window.onclick = function(event) {
        if (event.target == lightBoxModal) {
            lightBoxModal.style.display = "none";
            }
        };

    }
}
export default LightBox;