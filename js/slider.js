//se llama asi misma para que no se mezcle el codigo
(function(){
    //Elementos de slide
    const sliders = [...document.querySelectorAll('.testimony__body')];  //Ahora es un Array
    //Botones:
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    //eventos
    let value;
    buttonNext.addEventListener('click', ()=>{ //si se hace un click, se le da 
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    //Creo la funcion que me permite cambiar el slide
    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;
        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        if(value === sliders.length+1 || value === 0){
                value = value === 0 ? sliders.length : 1;
        }
        sliders[value-1].classList.add('testimony__body--show')
    }

})();