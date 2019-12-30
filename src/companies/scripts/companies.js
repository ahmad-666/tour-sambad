import Form from '../../utilities/scripts/form.js' ;
import util from '../../utilities/utilities.js' ;
let FormValidation = Form.FormValidate ;
let LabelHandler = Form.LabelHandler ;
let NumberInput = Form.NumberInput ;
let AppendDOM = util.AppendDOM ;
let companiesForm = document.querySelector('#companies') ;
function createRow(){
    companiesForm = document.querySelector('#companies') ;
    let companiesFormData = {
        elm: companiesForm,
        inputs: companiesForm.querySelectorAll('.inputWrapper.text .validate'),
        submit: companiesForm.querySelector('button[type="submit"]'),
        send: false ,
        modal: null
    }
    new FormValidation(
        companiesFormData.elm,
        companiesFormData.submit,
        companiesFormData.inputs, 
        companiesFormData.send,
        companiesFormData.modal
    ) ;
    companiesForm.querySelectorAll('input[type="number"]').forEach(number=>new NumberInput(number));
    companiesForm.querySelectorAll('.labelHandler').forEach(label=> new LabelHandler(label)) ;
    companiesForm.querySelectorAll('button.removeRow').forEach(removeRow=>removeRow.removeEventListener('click',removeRowInfo)) ;
    companiesForm.querySelectorAll('button.removeRow').forEach(removeRow=>removeRow.addEventListener('click',removeRowInfo)) ;
}
createRow() ;
function removeRowInfo(e){
    let row = this.parentElement.parentElement ;
    row.parentElement.removeChild(row) ;
    createRow() ;
}
let companyIndex = 2 ;
new AppendDOM(
    companiesForm.querySelector('.appendDOM'),
    companiesForm.querySelector('.cloneMe'),
    companiesForm.querySelector('.appendTrigger'),
    function(newElm){
        let nameInput = newElm.querySelector('.inputs .inputWrapper:nth-child(1) input');
        let nameLabel = newElm.querySelector('.inputs .inputWrapper:nth-child(1) label');
        let snnInput = newElm.querySelector('.inputs .inputWrapper:nth-child(2) input');
        let snnLabel = newElm.querySelector('.inputs .inputWrapper:nth-child(2) label');
        let phoneInput = newElm.querySelector('.inputs .inputWrapper:nth-child(3) input');
        let phoneLabel = newElm.querySelector('.inputs .inputWrapper:nth-child(3) label');
        let title = newElm.querySelector('h6') ;
        let btn = newElm.querySelector('button.removeRow') ;
        btn.style.display= "inline-block" ;
        title.textContent = `مشخصات همراه${companyIndex}` ;
        nameInput.setAttribute('id',`company${companyIndex}Name`) ;
        nameInput.setAttribute('name',`company${companyIndex}Name`) ;
        nameLabel.setAttribute('for',`company${companyIndex}Name`) ;
        nameInput.value = '' ;
        snnInput.setAttribute('id',`company${companyIndex}Snn`) ;
        snnInput.setAttribute('name',`company${companyIndex}Snn`) ;
        snnLabel.setAttribute('for',`company${companyIndex}Snn`) ;
        snnInput.value = '' ;
        phoneInput.setAttribute('id',`company${companyIndex}Tel`) ;
        phoneInput.setAttribute('name',`company${companyIndex}Tel`) ;
        phoneLabel.setAttribute('for',`company${companyIndex}Tel`) ;
        phoneInput.value = '' ;
        createRow() ;
        companyIndex++ ;
        if(companyIndex>3){
            let phone = phoneInput.parentElement ;
            phone.parentElement.removeChild(phone) ;
        }
    }
)
