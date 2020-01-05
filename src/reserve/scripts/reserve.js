import FontFaceObserver from 'fontfaceobserver' ;
import Form from '../../utilities/scripts/form.js' ;
import TL from '../../utilities/scripts/timeline.js' ;
import Tooltip from '../../utilities/scripts/toolTip.js' ;
import Collapse from '../../utilities/scripts/collapse.js' ;
import util from '../../utilities/utilities.js' ;
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
let companyIndex = 1 ;
let companiesSlide = document.querySelector('#otherInfos') ;
let cloneContainer = companiesSlide.querySelector('.appendDOM') ;
let cloneRow = companiesSlide.querySelector('.cloneMe') ;
let cloneTrigger = companiesSlide.querySelector('.appendTrigger') ;
let afterClone = function(newClone){
    let title = newClone.querySelector('h6') ;
    let nameInput = newClone.querySelector('.inputs .inputWrapper.text:nth-child(1) input') ;
    let nameLabel = nameInput.parentElement.querySelector('label');
    let snnInput = newClone.querySelector('.inputs .inputWrapper.text:nth-child(2) input') ;
    let snnLabel = snnInput.parentElement.querySelector('label') ;
    let tel = newClone.querySelector('.inputs .inputWrapper.text:nth-child(3)') ;
    let removeRow = newClone.querySelector('.inputs button.removeRow') ;
    title.textContent = `همسفر شماره ${companyIndex}` ;
    nameInput.setAttribute('name',`company${companyIndex}Name`) ;
    nameInput.setAttribute('id',`company${companyIndex}Name`) ;
    nameLabel.setAttribute('for',`company${companyIndex}Name`) ;
    snnInput.setAttribute('name',`company${companyIndex}Snn`) ;
    snnInput.setAttribute('id',`company${companyIndex}Snn`) ;
    snnLabel.setAttribute('for',`company${companyIndex}Snn`) ;
    tel.parentElement.removeChild(tel) ;
    removeRow.style.display= "inline-block" ;
    removeRow.addEventListener('click',removeRowHandler) ;
    companyIndex++ ;
    updateFormValidation() ;
}
function updateFormValidation(){
    let reserveForm = timelineWrapper.querySelector('form#reserve') ;
    let reserveFormData = {
        elm: reserveForm,
        submit: infoSubmit,
        inputs: reserveForm.querySelectorAll('.inputWrapper.text .validate'),
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
    reserveForm.querySelectorAll('input[type="number"]').forEach(number=>new NumberInput(number));
    reserveForm.querySelectorAll('.labelHandler').forEach(label=> new LabelHandler(label)) ;
}
function removeRowHandler(e){
    let row = this.parentElement.parentElement ;
    row.parentElement.removeChild(row) ;
    companyIndex-- ;
    updateCompanions() ;
    updateFormValidation() ;
}
function updateCompanions(){
    cloneContainer.querySelectorAll('.cloneMe').forEach((newClone,i)=>{
        if(i!=0){
            let title = newClone.querySelector('h6') ;
            let nameInput = newClone.querySelector('.inputs .inputWrapper.text:nth-child(1) input') ;
            let nameLabel = nameInput.parentElement.querySelector('label');
            let snnInput = newClone.querySelector('.inputs .inputWrapper.text:nth-child(2) input') ;
            let snnLabel = snnInput.parentElement.querySelector('label') ;
            title.textContent = `همسفر شماره ${i}` ;
            nameInput.setAttribute('name',`company${i}Name`) ;
            nameInput.setAttribute('id',`company${i}Name`) ;
            nameLabel.setAttribute('for',`company${i}Name`) ;
            snnInput.setAttribute('name',`company${i}Snn`) ;
            snnInput.setAttribute('id',`company${i}Snn`) ;
            snnLabel.setAttribute('for',`company${i}Snn`) ;
        }
    })
}
updateFormValidation() ;
new AppendDOM(
    cloneContainer,
    cloneRow,
    cloneTrigger,
    afterClone
)


