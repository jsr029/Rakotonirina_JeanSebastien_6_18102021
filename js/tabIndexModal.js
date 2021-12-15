class TabIndexModal{
    tabIndexPhModal(){
        let lightModal = document.querySelector('.lightModal');
        let h2 = document.querySelector('.lightModal h2' );
        let modalPict = document.querySelector('.lightModal .videoRimg');
        let precedent = document.querySelector('#precedent');
        let suivant = document.querySelector('#suivant');
        let close = document.querySelector('.closeLightBox');

        var tabModalImgIndex = modalPict.children[0];
        lightModal.setAttribute("tabindex", 14);
        lightModal.setAttribute("role", "dialog");
        tabModalImgIndex.setAttribute("tabindex", 14);
        tabModalImgIndex.setAttribute("role", "image");
        h2.setAttribute("tabindex", 14);
        h2.setAttribute("role", "text");
        precedent.setAttribute("tabindex", 14);
        precedent.setAttribute("role", "link");
        suivant.setAttribute("tabindex", 14);
        suivant.setAttribute("role", "link");
        close.setAttribute("tabindex", 14);    
        close.setAttribute("role", "button");
    }
}
export default TabIndexModal;