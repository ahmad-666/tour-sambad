//import Form from '../../utilities/scripts/form.js' ;
let newslettersFormElm = document.querySelector('form#newsletters') ;
let newslettersForm = {
    elm: newslettersFormElm,
    submit: newslettersFormElm.querySelector('button[type="submit"]'),
    inputs: newslettersFormElm.querySelectorAll('.validate'),
    send: true ,
    modal: null
}
new FormValidate(newslettersForm.elm,newslettersForm.submit,
    newslettersForm.inputs,newslettersForm.send,newslettersForm.modal) ;
