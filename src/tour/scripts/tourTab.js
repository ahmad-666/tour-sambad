import FontFaceObserver from 'fontfaceobserver' ;
import Collapse from '../../utilities/scripts/collapse.js' ;
import util from '../../utilities/utilities.js' ;
let FadeEffect = util.FadeEffect ;
let SwapIconText = util.SwapIconText ;
document.querySelectorAll('#tour #tourTab .days .withCollapse').forEach((withCollapse,i,all) => {
   all = [...all] ;
   let others = all.filter(elm =>elm!=withCollapse);
   let font = new FontFaceObserver('iranSans');
   font.load().then(()=>new Collapse(withCollapse,others));
})
let moreInfo = document.querySelector('#tourTab .moreInfo') ;
moreInfo.querySelectorAll('.fadeEffect').forEach(fadeEffect=>new FadeEffect(fadeEffect,'8em','white'));
let swapInstances = [] ;
moreInfo.querySelectorAll('.swapIconText').forEach(swap=>swapInstances.push(new SwapIconText(swap,'نمایش بیشتر','نمایش کمتر',['fas','fa-plus'],['fas','fa-minus'],swap.parentElement.querySelector('.fade'))));
swapInstances.forEach((swapInstance,i,all)=>{
   all = [...all] ;
   let others = all.filter(instance=>instance!=swapInstance)
   swapInstance.others = others ;
})
moreInfo.querySelectorAll('.withCollapse').forEach((withCollapse,i,all) => {
   all = [...all] ;
   let others = all.filter(elm =>elm!=withCollapse);
   let font = new FontFaceObserver('iranSans');
   font.load().then(()=>new Collapse(withCollapse,others,'8em'));
})
