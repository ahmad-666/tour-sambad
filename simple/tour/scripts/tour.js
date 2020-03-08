//import Slider from '../../utilities/scripts/productSlider.js' ;
//import Tabs from '../../utilities/scripts/tabs.js' ;
//import util from '../../utilities/utilities.js' ;
//let FixElm = util.FixElm ;
new ProductSlider(document.querySelector('.productSlider'),null) ;
document.querySelectorAll('.tabs_wrapper').forEach(tabWrapper =>new Tabs(tabWrapper));
let leftSection = document.querySelector('#tourInfo .leftSection') ;
new FixElm(leftSection,document.querySelector('#suggestions'),750,
    ()=>{
        leftSection.parentElement.querySelector('.rightSection').style.width = 'calc(100% - 35em)' ;
    },
    ()=>{
        leftSection.parentElement.querySelector('.rightSection').style.width = '' ;

    }) ;
//code validation
const codePopup = document.querySelector('form#codePopup') ;
document.querySelectorAll('.triggerCodePopup').forEach(trigger=>{
    trigger.addEventListener('click',e=>{
        codePopup.classList.toggle('show') ; 
        if(codePopup.classList.contains('show')){
            let close = codePopup.querySelector('.close') ;
            close.addEventListener('click',e=>{
                codePopup.classList.remove('show') ;
            })
        }
    })
})
codePopup.querySelectorAll('.labelHandler').forEach(label=>new LabelHandler(label)) ;    
codePopup.addEventListener('submit',e=>e.preventDefault()) ; //for disable form submit
const popupMsg = codePopup.querySelector('.inputWrapper .msg') ;
//for show error message :
// popupMsg.classList.add('show') ;
//for remove it 
// popupMsg.classList.remove('show') ;

