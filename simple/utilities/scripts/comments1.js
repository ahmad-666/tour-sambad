import FontFaceObserver from 'fontfaceobserver' ;
import form from '../../utilities/scripts/form.js' ;
import Collapse from '../../utilities/scripts/collapse' ;
import modal from '../../utilities/scripts/modal.js' ;
let adminApproveTriggers = document.querySelectorAll('.modalTrigger[data-modal="adminApprove"]') ;
let adminApproveModal = new modal.Modal([...adminApproveTriggers],[],true) ;
let commentsWrapper = document.querySelector('#comments') ;
commentsWrapper.querySelectorAll('.labelHandler').forEach(labelHandler => {
    new form.LabelHandler(labelHandler) ;
})
commentsWrapper.querySelectorAll('form.validate').forEach(myForm => {
    let submit = myForm.querySelector('button[type="submit"]') ;
    let inputs = myForm.querySelectorAll('input.validate,textarea.validate') ;
    new form.FormValidate(myForm,submit,inputs,false,adminApproveModal) ;
})
commentsWrapper.querySelectorAll('textarea.autoExpand').forEach(textarea => {
    new form.AutoExpand(textarea,'2.7em','15em') ;
})
commentsWrapper.querySelectorAll('.withCollapse').forEach((withCollapse,i,all) => {
   all = [...all] ;
   let others = all.filter(elm =>elm!=withCollapse);
   let font = new FontFaceObserver('iranSans');
   font.load().then(()=>new Collapse(withCollapse,others));
})
commentsWrapper.querySelectorAll('.likeTrigger').forEach(likeTrigger => likeTrigger.addEventListener('click',likeToggle)) ;
function likeToggle(e){
    let icon = this.querySelector('i') ;
    let likeNum = this.querySelector('p') ;
    icon.classList.toggle('far') ;
    icon.classList.toggle('fas') ;
    icon.classList.toggle('active') ;
    if(icon.classList.contains('active')) likeNum.textContent = parseInt(likeNum.textContent)+1 ;
    else likeNum.textContent = parseInt(likeNum.textContent)-1 ;
}
