import Slider from '../../utilities/scripts/productSlider.js' ;
import Tabs from '../../utilities/scripts/tabs.js' ;
new Slider(document.querySelector('.productSlider'),null) ;
document.querySelectorAll('.tabs_wrapper').forEach(tabWrapper =>new Tabs(tabWrapper));
