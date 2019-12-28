import Form from '../../utilities/scripts/form.js' ;
let FormValidate = Form.FormValidate ;
let LabelHandler = Form.LabelHandler ;
let NumberInput = Form.NumberInput ;
let editProfileForm = document.querySelector('form#editProfile') ;
let editProfileData = {
    elm: editProfileForm,
    inputs: editProfileForm.querySelectorAll('.validate') ,
    submit: editProfileForm.querySelector('button[type="submit"]'),
    modal: null,
    send: true
}
new FormValidate(editProfileData.elm,editProfileData.submit,
    editProfileData.inputs,editProfileData.send,editProfileData.modal) ;
editProfileForm.querySelectorAll('.labelHandler').forEach(label=>new LabelHandler(label)) ;
editProfileForm.querySelectorAll('input[type="number"]').forEach(number=> new NumberInput(number));


