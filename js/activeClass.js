// Get the container element
class ActiveClass {
    classActive() {
        let aContainer = document.getElementById("Menu");

        // Get all buttons with class="aMenu" inside the container
        let as = aContainer.getElementsByClassName("aMenu");

        // Loop through the buttons and add the active class to the current/clicked button
        for (let i = 0; i < as.length; i++) {
            as[i].addEventListener("click", function () {
                let current = document.getElementsByClassName("active");

                // If there's no active class
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" active", "");
                }

                // Add the active class to the current/clicked button
                this.className += " active";
            });
        }
    }
}
export default ActiveClass;