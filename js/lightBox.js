class LightBox{
    showHtmlModal(){
        const container = document.querySelector('.container');
        let boxModal = `
        <div id="myModal" class="modal">
          <div class="modal-content" id="myModal">
            <span class="close">&times;</span>
          </div>
        </div>
        `;
        container.insertAdjacentHTML("beforeend", boxModal);
    }
    addModal(){
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function() {
        modal.style.display = "block";
        };

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        };

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            }
        };

    }
}
export default LightBox;