import Slider from '../../utilities/scripts/sliderCarousel' ;
import Form from '../../utilities/scripts/form.js' ;
let suggestionsSlider = document.querySelector('.sliderCarousel#suggestions') ;
new Slider(suggestionsSlider) ;
suggestionsSlider.querySelectorAll('.separate3Num').forEach(separate3Num=>new Form.Separate3Num(separate3Num,',','تومان')) ;
