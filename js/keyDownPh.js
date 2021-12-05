import DropDown from "./DropDown.js";

class KeyDownPh {
    rightArrow(r) {
        let pop = document.querySelector('#tri-select .popularite');
        let dat = document.querySelector('#tri-select .date');
        let tit = document.querySelector('#tri-select .titre');
        let triArrow = document.querySelector('#tri-select i.triArrow');
        let clicked = document.querySelector("#tri-select i.clicked");
        const triSelect = document.querySelector('#tri-select');
        triSelect.addEventListener("keydown", (event) => {
            if (event.code === 'ArrowRight') {
                pop.style.display = 'block';
                dat.style.display = 'block';
                tit.style.display = 'block';
                clicked.style.display = 'block';
                triArrow.style.display = 'none';
            }
        });
        triSelect.addEventListener("keydown", (event) => {
            if (event.code === 'ArrowLeft') {
                pop.style.display = 'block';
                dat.style.display = 'none';
                tit.style.display = 'none';
                clicked.style.display = 'none';
                triArrow.style.display = 'block';
            }
        });
        triSelect.addEventListener("keydown", (event) => {
            if (event.code === 'Enter') {
                new DropDown().upDown(r);
            }
        });
    }
}
export default KeyDownPh;