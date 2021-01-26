let img2=document.querySelector('.img2')
        let contenedor=document.querySelector('.contenedor')

        contenedor.addEventListener('mousemove',(e)=>{
            let posicionX=e.offsetX
            let posicionY=e.offsetY
            img2.style.clipPath=`circle(50px at ${posicionX}px ${posicionY}px)`
        })