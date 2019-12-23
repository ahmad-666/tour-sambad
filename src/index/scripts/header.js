import $ from 'jquery' ;
import select2 from 'select2' ;
import util from '../../utilities/utilities.js' ;
let docHandler = util.docHandler ;
$('.select2#startPoint').select2({
    placeholder: 'مبدا'
});
$('.select2#endPoint').select2({
    placeholder: 'مقصد'
});
//phone dropdown
let phoneDropdownTrigger = document.querySelector('.telWrapper .content') ;
let phoneDropdown = document.querySelector('#telDropdown') ;
phoneDropdownTrigger.addEventListener('click',e=>{
    e.stopPropagation() ;
    phoneDropdown.classList.toggle('show') ;
    docHandler(phoneDropdown,[]) ;
})