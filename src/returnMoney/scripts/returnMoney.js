import Form from '../../utilities/scripts/form.js' ;
let FormValidate = Form.FormValidate ;
let LabelHandler = Form.LabelHandler ;
let returnMoneyForm = document.querySelector('form#returnMoney') ;
let returnMoneyData = {
    elm: returnMoneyForm,
    submit: returnMoneyForm.querySelector('button[type="submit"]'),
    inputs: returnMoneyForm.querySelectorAll('.validate'),
    send: true,
    modal: null
} ;
new FormValidate(returnMoneyData.elm,returnMoneyData.submit,
    returnMoneyData.inputs,returnMoneyData.send,
    returnMoneyData.modal) ;
returnMoneyForm.querySelectorAll('.labelHandler').forEach(label=>new LabelHandler(label)) ;