//import Slider from '../../utilities/scripts/productSlider.js' ;
//import Tabs from '../../utilities/scripts/tabs.js' ;
//import util from '../../utilities/utilities.js' ;
//let FixElm = util.FixElm ;
new ProductSlider(document.querySelector('.productSlider'),null) ;
document.querySelectorAll('.tabs_wrapper').forEach(tabWrapper =>new Tabs(tabWrapper));
let leftSection = document.querySelector('#tourInfo .leftSection') ;
new FixElm(leftSection,document.querySelector('footer'),750,
    ()=>{
        leftSection.parentElement.querySelector('.rightSection').style.width = 'calc(100% - 35em)' ;
    },
    ()=>{
        leftSection.parentElement.querySelector('.rightSection').style.width = '' ;

    }) ;