//import FontFaceObserver from 'fontfaceobserver' ;
//import Collapse from '../../utilities/scripts/collapse.js' ;
//import util from '../../utilities/utilities.js' ;
//let docHandler = util.docHandler ;
//let preventBodyScroll = util.preventBodyScroll ;
let nav = document.querySelector('nav') ;
let firstLevelCollapse = nav.querySelectorAll('li.mobile ul.mobileDropdown > .withCollapse') ;
let secondLevelCollapse = nav.querySelectorAll('li.mobile ul.mobileDropdown .withCollapse.inner') ;
firstLevelCollapse.forEach((withCollapse,i,all) => {
   all = [...all] ;
   let others = all.filter(elm =>elm!=withCollapse);
   let font = new FontFaceObserver('iranSans');
   font.load().then(()=>new Collapse(withCollapse,others));
})
secondLevelCollapse.forEach((withCollapse,i,all) => {
   all = [...all] ;
   let others = all.filter(elm =>elm!=withCollapse);
   let font = new FontFaceObserver('iranSans');
   font.load().then(()=>new Collapse(withCollapse,others));
})
let mobileMenuToggle = nav.querySelector('li.mobile') ;
let mobileMenu = nav.querySelector('li.mobile ul.mobileDropdown') ;
mobileMenuToggle.addEventListener('click',toggleMobileMenu) ;
function toggleMobileMenu(e){
   e.stopPropagation() ;
   mobileMenu.classList.toggle('show') ;
   if(mobileMenu.classList.contains('show')){
      document.addEventListener('click',navDocHandler) ;
   }
   else{
      document.removeEventListener('click',navDocHandler) ;
   }
}
function navDocHandler(e){
   e.stopPropagation();
   let clickedElm = e.target ;
   if(!mobileMenu.contains(clickedElm)){
      mobileMenu.classList.remove('show') ;
      document.removeEventListener('click',navDocHandler) ;
   }
}
//mobileMenu.querySelectorAll('li').forEach(elm=>touchScrollFixer(elm)) ;
//preventBodyScroll(document.querySelector('.fixer')) ;
mobileMenu.querySelectorAll('.preventBodyScroll').forEach(elm=>preventBodyScroll(elm)) ;


//phone dropdown
let phoneDropdownTrigger = document.querySelector('.telWrapper .content') ;
let phoneDropdown = document.querySelector('#telDropdown') ;
phoneDropdownTrigger.addEventListener('click',e=>{
    e.stopPropagation() ;
    phoneDropdown.classList.toggle('show') ;
    docHandler(phoneDropdown,[]) ;
})
let loginDropdownTrigger = document.querySelector('.loginWrapper .content') ;
let loginDropdown = document.querySelector('#loginDropdown') ;
if(loginDropdownTrigger){
   loginDropdownTrigger.addEventListener('click',e=>{
      e.stopPropagation() ;
      loginDropdown.classList.toggle('show') ;
      docHandler(loginDropdown,[]) ;
  })
}
