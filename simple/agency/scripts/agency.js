//import FontFaceObserver from 'fontfaceobserver' ;
//import util from '../../utilities/utilities.js' ;
//import Collapse from '../../utilities/scripts/collapse.js' ;
//et FadeEffect = util.FadeEffect ;
//let SwapIconText = util.SwapIconText ;
let agencyWrapper = document.querySelector('#agency') ;
agencyWrapper.querySelectorAll('.withCollapse').forEach((withCollapse,i,all) => {
   all = [...all] ;
   let others = all.filter(elm =>elm!=withCollapse);
   let font = new FontFaceObserver('iranSans');
   font.load().then(()=>new Collapse(withCollapse,others,'15em'));
});
// agencyWrapper.querySelectorAll('.fadeEffect').forEach(fadeEffect=>new FadeEffect(fadeEffect,'75%','white'));
let swapInstances = [] ;
agencyWrapper.querySelectorAll('.swapIconText').forEach(swap=>swapInstances.push(new SwapIconText(swap,'نمایش بیشتر','نمایش کمتر',['fas','fa-plus'],['fas','fa-minus'],swap.parentElement.querySelector('.fade'))));
swapInstances.forEach((swapInstance,i,all)=>{
   all = [...all] ;
   let others = all.filter(instance=>instance!=swapInstance)
   swapInstance.others = others ;
})
