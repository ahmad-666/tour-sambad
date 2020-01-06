//import Form from '../../utilities/scripts/form.js' ;
//let FormValidate = Form.FormValidate ;
//let LabelHandler = Form.LabelHandler ;
let returnMoneyForm = document.querySelector('form#sendTicket') ;
let sendTicketData = {
    elm: returnMoneyForm,
    submit: returnMoneyForm.querySelector('button[type="submit"]'),
    inputs: returnMoneyForm.querySelectorAll('.validate'),
    send: true,
    modal: null
} ;
new FormValidate(sendTicketData.elm,sendTicketData.submit,
    sendTicketData.inputs,sendTicketData.send,
    sendTicketData.modal) ;
returnMoneyForm.querySelectorAll('.labelHandler').forEach(label=>new LabelHandler(label)) ;