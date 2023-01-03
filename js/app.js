(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');


    const addClick = ()=>{
        listElements.forEach(Element =>{
            Element.addEventListener('click', ()=>{

                
                let subMenu = Element.children[1];
                let height = 0;
                Element.classList.toggle('menu__item--active');

                

                if(subMenu.clientHeight === 0){
                    height= subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(Element=>{
            if(Element.children[1].getAttribute('style')){
                Element.children[1].removeAttribute('style');
                Element.classList.remove('menu__item--active');
            }

        });
    }

    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('menu__links--show'))
            list.classList.remove('menu__links--show');
    
        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800) {
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));


})();

    



(function(){
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttomNext = document.querySelector('#next');
    const buttomBefore = document.querySelector('#before');
    let value;


    buttomNext.addEventListener('click', ()=>{
        changePosition(1);

    });

    buttomBefore.addEventListener('click', ()=>{
        changePosition(-1);

    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;

        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show')
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }
        
        sliders[value-1].classList.add('testimony__body--show')

    }

 

})();