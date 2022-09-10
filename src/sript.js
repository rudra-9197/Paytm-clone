window.addEventListener('DomContentLoaded',() =>{

    const menubtn = document.querySelector('#menu-btn')

    const dropDown = document.querySelector('#dropDown')

    menubtn.addEventListener('On-Click',()=>{

        if(dropDown.classList.contains('hidden')){

            dropDown.classList.remove('hidden');
            dropDown.classList.add('flex');
        }

        // if(dropDown.classList.contains('flex')){

        //     dropDown.classList.remove('flex');
        //     dropDown.classList.add('hidden');
        // }
    })
    })