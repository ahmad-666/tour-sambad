import modal from '../../utilities/scripts/modal.js' ;
let Modal = modal.Modal ;
let ticketTable = document.querySelector('#tickets table') ;
let blackFilter1 = document.querySelector('#blackFilter') ;
let menuTrigger1 = document.querySelector('#menuToggle') ;
ticketTable.querySelectorAll('.modalTrigger').forEach((trigger,i,all)=>{
    all = [...all] ;
    let others = all.filter(a=>a!=trigger);
    new Modal([trigger],others,false,blackFilter1,
        ()=>{menuTrigger1.classList.add('behind') ;},
        ()=>{menuTrigger1.classList.remove('behind') ;}
    ) ;
})