import FontFaceObserver from 'fontfaceobserver' ;
import Form from '../../utilities/scripts/form.js' ;
import TL from '../../utilities/scripts/timeline.js' ;
import Tooltip from '../../utilities/scripts/toolTip.js' ;
import Collapse from '../../utilities/scripts/collapse.js' ;
import util from '../../utilities/utilities.js' ;
import { remove } from 'animejs';
let Timeline = TL.Timeline ;
let TimelineSlider = TL.TimelineSlider ;
let Progress = TL.Progress ;
let FormValidation = Form.FormValidate ;
let LabelHandler = Form.LabelHandler ;
let NumberInput = Form.NumberInput ;
let AppendDOM = util.AppendDOM ;
let timelineWrapper = document.querySelector('#timelineWrapper') ;
let infoSubmit = timelineWrapper.querySelector('#otherInfos .btnWrapper button.validate') ;
let progress = new Progress(timelineWrapper.querySelector('#timeline'),500) ;
let timelineSlider = new TimelineSlider(timelineWrapper.querySelector('#timelineSlider'),progress) ;
new Timeline(timelineWrapper,progress,timelineSlider) ;
infoSubmit.addEventListener('click',checkFormValidation) ;
let reserveFormInstance = null 
function checkFormValidation(e){
    if(reserveFormInstance.validate) {
        timelineSlider.changeSlide(parseInt(e.currentTarget.getAttribute('data-slide')));
    }
}
timelineWrapper.querySelectorAll('.withTooltip').forEach(tooltip=>new Tooltip(tooltip));
function createRow(){
    let reserveForm = timelineWrapper.querySelector('form#reserve') ;
    let reserveFormData = {
        elm: reserveForm,
        inputs: reserveForm.querySelectorAll('.inputWrapper.text .validate'),
        submit: infoSubmit,
        send: false ,
        modal: null
    }
    reserveFormInstance = new FormValidation(
        reserveFormData.elm,
        reserveFormData.submit,
        reserveFormData.inputs, 
        reserveFormData.send,
        reserveFormData.modal
    ) ;
    timelineWrapper.querySelectorAll('input[type="number"]').forEach(number=>new NumberInput(number));
    timelineWrapper.querySelectorAll('.labelHandler').forEach(label=> new LabelHandler(label)) ;
    reserveForm.querySelectorAll('button.removeRow').forEach(removeRow=>removeRow.removeEventListener('click',removeRowInfo)) ;
    reserveForm.querySelectorAll('button.removeRow').forEach(removeRow=>removeRow.addEventListener('click',removeRowInfo)) ;
}
createRow() ;
function removeRowInfo(e){
    let row = this.parentElement.parentElement ;
    row.parentElement.removeChild(row) ;
    companyIndex-- ;
    createRow() ;
}
let companyIndex = 1 ;
new AppendDOM(
    timelineWrapper.querySelector('#otherInfos .appendDOM'),
    timelineWrapper.querySelector('#otherInfos .cloneMe'),
    timelineWrapper.querySelector('#otherInfos .appendTrigger'),
    function(newElm){
        let nameInput = newElm.querySelector('.inputs .inputWrapper:nth-child(1) input');
        let nameLabel = newElm.querySelector('.inputs .inputWrapper:nth-child(1) label');
        let snnInput = newElm.querySelector('.inputs .inputWrapper:nth-child(2) input');
        let snnLabel = newElm.querySelector('.inputs .inputWrapper:nth-child(2) label');
        let phoneInput = newElm.querySelector('.inputs .inputWrapper:nth-child(3) input');
        let phoneLabel = newElm.querySelector('.inputs .inputWrapper:nth-child(3) label');
        let title = newElm.querySelector('h6') ;
        let btn = newElm.querySelector('button.removeRow') ;
        btn.style.display= "inline-block" ;
        title.textContent = `مشخصات همراه${companyIndex}` ;
        nameInput.setAttribute('id',`company${companyIndex}Name`) ;
        nameInput.setAttribute('name',`company${companyIndex}Name`) ;
        nameLabel.setAttribute('for',`company${companyIndex}Name`) ;
        nameInput.value = '' ;
        snnInput.setAttribute('id',`company${companyIndex}Snn`) ;
        snnInput.setAttribute('name',`company${companyIndex}Snn`) ;
        snnLabel.setAttribute('for',`company${companyIndex}Snn`) ;
        snnInput.value = '' ;
        phoneInput.setAttribute('id',`company${companyIndex}Tel`) ;
        phoneInput.setAttribute('name',`company${companyIndex}Tel`) ;
        phoneLabel.setAttribute('for',`company${companyIndex}Tel`) ;
        phoneInput.value = '' ;
        createRow() ;
        companyIndex++ ;
        if(companyIndex>1){
            let phone = phoneInput.parentElement ;
            phone.parentElement.removeChild(phone) ;
        }
    }
)
