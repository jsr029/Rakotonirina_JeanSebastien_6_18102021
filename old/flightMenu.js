class FlightMenu {
    menuTop() {
        const flm = document.getElementById("flightMenu");
        window.addEventListener("scroll", function () {
            const y = window.scrollY;
            if (y >= 120) {
                flm.style.display = "block";
            } else {
                flm.style.display = "none";
            }
        });
    }
}
export default FlightMenu;