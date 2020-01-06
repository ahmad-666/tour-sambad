//import modal from '../../utilities/scripts/modal.js' ;
//import Form from '../../utilities/scripts/form.js' ;
//let FormValidation = Form.FormValidate ;
//let LabelHandler = Form.LabelHandler ;
//let Modal = modal.Modal ;
let ticketTable = document.querySelector('#tickets table') ;
let blackFilter1 = document.querySelector('#blackFilter') ;
let menuTrigger1 = document.querySelector('#menuToggle') ;
ticketTable.querySelectorAll('.modalTrigger').forEach((trigger,i,all)=>{
    all = [...all] ;
    let others = all.filter(a=>a!=trigger);
    new Modal([trigger],others,false,blackFilter1,
        ()=>{
            menuTrigger1.classList.add('behind') ;
            document.body.classList.add('disableScroll') ;
        },
        ()=>{
            menuTrigger1.classList.remove('behind') ;
            document.body.classList.remove('disableScroll') ;
        }
    ) ;
})
document.querySelectorAll('form.newAnswer').forEach(newForm=>{
    newForm.querySelectorAll('.labelHandler').forEach(label=>new LabelHandler(label)) ;
    new FormValidate(
        newForm,
        newForm.querySelector('button[type="submit"]'),
        newForm.querySelectorAll('.validate'),
        true,
        null
    );
})
