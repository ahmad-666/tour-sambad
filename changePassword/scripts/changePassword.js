//import Form from '../../utilities/scripts/form.js' ;
//let FormValidate = Form.FormValidate ;
//let LabelHandler = Form.LabelHandler ;
let changePasswordForm = document.querySelector('form#changePassword') ;
let changePasswordData = {
    elm: changePasswordForm,
    inputs: changePasswordForm.querySelectorAll('.validate') ,
    submit: changePasswordForm.querySelector('button[type="submit"]'),
    modal: null,
    send: true
}
new FormValidate(changePasswordData.elm,changePasswordData.submit,
    changePasswordData.inputs,changePasswordData.send,changePasswordData.modal) ;
changePasswordForm.querySelectorAll('.labelHandler').forEach(label=>new LabelHandler(label)) ;


