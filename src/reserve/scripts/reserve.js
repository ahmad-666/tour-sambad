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
}
createRow() ;
new AppendDOM(
    timelineWrapper.querySelector('#otherInfos .appendDOM'),
    timelineWrapper.querySelector('#otherInfos .cloneMe').cloneNode(true),
    timelineWrapper.querySelector('#otherInfos .appendTrigger'),
    'row',
    createRow
)