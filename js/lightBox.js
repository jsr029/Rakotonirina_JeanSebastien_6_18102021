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

        // Get the <span> element that closes the lightBoxModal
        const span = document.querySelector(".closeLightBox");

        // When the user clicks on the class selector videoRimg, open the lightBoxModal
        // and display the img clicked
        const videoRimg = document.querySelectorAll('.videoRimg');
        videoRimg.forEach((v) => v. addEventListener("click", function(elt){
            console.log(v.parentNode.childNodes[2]);
            lmc.innerHTML = v.innerHTML + `${v.parentNode.childNodes[2].innerHTML}`;
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