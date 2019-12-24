function Collapse(wrapper,others){
    this.wrapper = wrapper ;
    this.others = others ;
    this.trigger = this.wrapper.querySelector('.collapseTrigger') ;
    this.icon = this.wrapper.querySelector('.collapseIcon') ;
    this.targetHeight = null;
    this.collapse =this.wrapper.querySelector('.collapse') ;
    this.collapse.classList.add('close') ;
    this.trigger.addEventListener('click',this.toggleCollapse.bind(this)) ;
}
Collapse.prototype.toggleCollapse = function(e){
    e.stopPropagation();
    this.targetHeight = this.collapse.scrollHeight;
    this.collapse.classList.add('addTransition') ;
    this.collapse.classList.toggle('open') ;
    if(this.collapse.classList.contains('open')) {
        this.collapse.style.height = `${this.targetHeight}px` ;
        setTimeout(()=>this.collapse.style.height = `auto`,150)
        this.others.forEach(other=>{
            let collapse = other.querySelector('.collapse') ;
            collapse.classList.add('addTransition')
            collapse.style.height = `0px` ;
            collapse.classList.remove('open');
            if(this.icon){
                let icon = other.querySelector('.collapseIcon');
                icon.classList.add('fa-plus') ;
                icon.classList.remove('fa-times') ;
            }    
        });        
    }
    else {
        this.collapse.style.height = `${this.targetHeight}px` ;
        setTimeout(()=>this.collapse.style.height = `0px`,10) ;
    }
    if(this.icon){
        this.icon.classList.toggle('fa-plus') ;
        this.icon.classList.toggle('fa-times') ;
    }
}
//<#faq or parent of .collapse>.querySelectorAll('.withCollapse').forEach((withCollapse,i,all) => {
//    all = [...all] ;
//    let others = all.filter(elm =>elm!=withCollapse);
//    let font = new FontFaceObserver('iranSans');
//    font.load().then(()=>new Collapse(withCollapse,others));
//})
// when we click on <label> we click on target form element too and also we trigger click event too
// if we have : 
// 	.collapseTrigger 
//         label 
//     //when we click on <label> we also trigger click .collapseTrigger too 
//     we need to add e.stopPropagation() inside both clicks(.collapseTrigger,label) event to 
//     prevent any conflicts
//for prevent conflicts between different collapses :
//we should use <parent>.querySelectorAll('.withCollapse').forEach((withCollapse,i,all)
//not document.querySelectorAll('.withCollapse').forEach((withCollapse,i,all) 
//if we have inner collapses :
// let firstLevelCollapse = nav.querySelectorAll('... .withCollapse') ;
// let secondLevelCollapse = nav.querySelectorAll('... .withCollapse') ;
// firstLevelCollapse.forEach((withCollapse,i,all) => {...})
// secondLevelCollapse.forEach((withCollapse,i,all) => {...})
export default Collapse ;
