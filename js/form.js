class Form {
    getFields() {
        let form = document.querySelector('form');
        let firstName = document.querySelector('#firstName');
        let lastName = document.querySelector('#lastName');
        let email = document.querySelector('#Email');
        let Message = document.querySelector('#Message');
        this.displayNoneErrorSelector();
        const regexText = /^([a-zA-Z-_ ]){2,40}$/;
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let formValid = this.checkFirstName(firstName, regexText) && 
            this.checkLastName(lastName, regexText) &&
            this.checkMessage(Message, regexText) &&
            this.checkEmail(email);

            if (formValid) {
                firstName.style.border = '3px solid blue';
                lastName.style.border = '3px solid blue';
                email.style.border = '3px solid blue';
                Message.style.border = '3px solid blue';
                console.log(firstName, lastName, email, Message);
                form.reset();
            } else {
                this.checkFirstName(firstName, regexText);
                this.checkLastName(lastName, regexText);
                this.checkEmail(email);
                this.checkMessage(Message, regexText);
           }
        });
    }
    checkFirstName(elm, regex) {
        let errorBlocFirstName = document.querySelector('.error-blocFirstName');        
        if (regex.test(elm.value) === true && elm.value.trim().length > 2 && elm.value.trim() !== "") {
                elm.style.border = "3px solid green";
                errorBlocFirstName.style.display = "none";
            } else {
                elm.style.border = "3px solid red";
                errorBlocFirstName.style.display = "block";
            }
    }
    checkLastName(elm, regex) {
        let errorBlocName = document.querySelector('.error-blocName');
        if (regex.test(elm.value) === true && elm.value.trim().length > 2 && elm.value.trim() !== "") {
                errorBlocName.style.display = "none";
                elm.style.border = "3px solid green";
                } else {
                elm.style.border = "3px solid red";
                errorBlocName.style.display = "block";
            }
    }    
    checkMessage(elm, regex) {
        let errorBlocMessage = document.querySelector('.error-blocMessage');
        if (regex.test(elm.value) === true && elm.value.trim().length > 2 && elm.value.trim() !== "") {
                errorBlocMessage.style.display = "none";
                elm.style.border = "3px solid green";
                } else {
                elm.style.border = "3px solid red";
                errorBlocMessage.style.display = "block";
            }
    }

    checkEmail(elm){
        const regexEmail = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
        let errorBlocMail = document.querySelector('.error-blocMail');
        if (regexEmail.test(elm.value) === true) {
                elm.style.border = "3px solid green";
                errorBlocMail.style.display = "none";
            } else {
                elm.style.border = "3px solid red";
                errorBlocMail.style.display = "block";
            }
    }
    displayNoneErrorSelector(){
        let errorBlocName = document.querySelector('.error-blocName');
        let errorBlocFirstName = document.querySelector('.error-blocFirstName');        
        let errorBlocMail = document.querySelector('.error-blocMail');
        let errorBlocMessage = document.querySelector('.error-blocMessage');
        errorBlocName.style.display = "none";
        errorBlocFirstName.style.display = "none";
        errorBlocMail.style.display = "none";
        errorBlocMessage.style.display = "none";
}
    displayBlock(elm){
        elm.style.display = 'block';
    }
    displayNone(elm){
        elm.style.display = 'none';
    }
}
export default Form;