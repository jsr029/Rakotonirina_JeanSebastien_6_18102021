class Modal {
    showHtmlModal() {
        const nameTitle = document.querySelector('.identity .name');
        const container = document.querySelector('.container');
        let nameTitleSplit = nameTitle.innerHTML.split(" ");
        let boxModal = `
        <div id="myModal" class="modal" tabindex="5">
          <div class="modal-content" id="myModal">
            <form action="send.php" method="POST" class="contactForm" id="Contact">
                <h1 tabindex="6">Contactez-moi <br/> ${nameTitleSplit[0]} ${nameTitleSplit[1]}</h1>
                <div class="inputBloc">
                    <div class="blocName">
                        <label for="lastName" id="nameLabel" tabindex="7">Name</label>
                        <input type="text" name="lastName" id="lastName" placeholder="Name" tabindex="8">
                    </div>
                    <div class="error-blocName">Last Name is alphabetic and more than 2 characters</div>
                </div>
                <div class="inputBloc">
                    <div class="blocFirstName">
                        <label for="firstName" id="first-name" tabindex="9">First Name</label>
                        <input type="text" name="firstName" id="firstName" placeholder="First Name" tabindex="10">
                    </div>
                    <div class="error-blocFirstName">Last Name is alphabetic and more than 2 characters</div>
                </div>
                <div class="inputBloc">
                    <div class="blocMail">
                        <label for="Email" id="emailLabel" tabindex="11">Email</label>
                        <input type="email" name="email" id="Email" placeholder="Email" tabindex="12">
                    </div>
                    <div class="error-blocMail">Email must contain @ and .</div>
                </div>
                <div class="inputBloc">
                    <div class="blocMessage">
                        <label for="Message" id="messageLabel" tabindex="13">Message</label>
                        <textarea name="message" id="Message" placeholder="Text......" rows="6" cols="20" tabindex="14"></textarea>
                    <div class="error-blocMessage">Message is alphabetic and more than 2 characters</div>
                    </div>
                </div>
                <input type="submit" value="Envoyer" class="formSubmit" tabindex="15">
            </form>
            <span class="close" tabindex="16">X</span>
          </div>
        </div>
        `;
        container.insertAdjacentHTML("beforeend", boxModal);
    }
    addModal() {
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function () {
            modal.style.display = "block";
        };

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        };
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };

    }
}
export default Modal;