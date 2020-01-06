//import Form from '../../utilities/scripts/form.js' ;
//let FormValidate = Form.FormValidate ;
//let LabelHandler = Form.LabelHandler ;
let sendTicketForm = document.querySelector('form#returnMoney') ;
let returnMoneyData = {
    elm: sendTicketForm,
    submit: sendTicketForm.querySelector('button[type="submit"]'),
    inputs: sendTicketForm.querySelectorAll('.validate'),
    send: true,
    modal: null
} ;
new FormValidate(returnMoneyData.elm,returnMoneyData.submit,
    returnMoneyData.inputs,returnMoneyData.send,
    returnMoneyData.modal) ;
sendTicketForm.querySelectorAll('.labelHandler').forEach(label=>new LabelHandler(label)) ;
