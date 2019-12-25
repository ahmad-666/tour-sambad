import Form from '../../utilities/scripts/form.js' ;
let formValidate = Form.FormValidate ;
let agencyLabelHandler = Form.LabelHandler ;
let agencyForm = document.querySelector('#searchForm') ;
let agencyFormData = {
    elm: agencyForm,
    inputs: agencyForm.querySelectorAll('.validate'),
    send: false,
    modal: null,
    submit: agencyForm.querySelector('button[type="submit"]')
}
// new formValidate(agencyFormData.elm,agencyFormData.submit,
//     agencyFormData.inputs,agencyForm.send,agencyForm.modal) ;
agencyForm.querySelectorAll('.labelHandler').forEach(label=>new agencyLabelHandler(label)) ;