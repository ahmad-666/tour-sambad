import Tooltip from '../../utilities/scripts/toolTip.js' ;
let commentTab = document.querySelector('#hotelTab') ;
commentTab.querySelectorAll('.withTooltip').forEach(tooltip =>new Tooltip(tooltip));
commentTab.querySelectorAll('.displaySwitches .switchDisplay').forEach(switchDis=>switchDis.addEventListener('click',switchDisplay)) ;
function switchDisplay(e){
    let target = commentTab.querySelector(`#${this.getAttribute('data-target')}`) ;
    let targetAlt = commentTab.querySelector(`#${this.getAttribute('data-target-alt')}`) ;
    targetAlt.classList.remove('show') ;
    target.classList.add('show') ;
}