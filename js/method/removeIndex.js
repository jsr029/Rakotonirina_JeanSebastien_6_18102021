//Function remove Index Html
function removeIndex() {
    // select the target element
    const e = document.querySelectorAll("article");
    // remove the list item
    for (let i = 0; i < e.length; i++) {
        e[i].parentElement.removeChild(e[i]);
    }
}
export default removeIndex;