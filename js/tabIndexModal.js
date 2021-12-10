class TabIndexModal{
    tabIndexPhModal(){
        let lightModal = document.querySelector('.lightModal');
        let h2 = document.querySelector('.lightModal h2' );
        let modalPict = document.querySelector('.lightModal .videoRimg');
        let precedent = document.querySelector('#precedent');
        let suivant = document.querySelector('#suivant');
        let close = document.querySelector('.closeLightBox');

        var tabModalImgIndex = modalPict.children[0];
        lightModal.setAttribute("tabindex", 1);
        lightModal.setAttribute("role", "dialog");
        tabModalImgIndex.setAttribute("tabindex", 2);
        tabModalImgIndex.setAttribute("role", "image");
        h2.setAttribute("tabindex", 3);
        h2.setAttribute("role", "text");
        precedent.setAttribute("tabindex", 4);
        precedent.setAttribute("role", "link");
        suivant.setAttribute("tabindex", 5);
        suivant.setAttribute("role", "link");
        close.setAttribute("tabindex", 6);    
        close.setAttribute("role", "button");
    }
}
export default TabIndexModal;