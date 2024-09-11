document.addEventListener("DOMContentLoaded",function(){
    let imgaes = document.querySelectorAll('.images img')
    let prev = document.querySelector('.prev')
    let next = document.querySelector('.next')
    let close = document.querySelector('.close')
    let galleryImg = document.querySelector('.gallery-inner img')
    let gallery = document.querySelector('.gallery')

    var curentIndex = 0;
    function showGallery(){
        (curentIndex ===0) ? prev.classList.add('active') : prev.classList.remove('active');
        (curentIndex === imgaes.length-1) ? next.classList.add('active') : next.classList.remove('active')
        galleryImg.src = imgaes[curentIndex].src;
        gallery.classList.add('show')
    }
    imgaes.forEach((item,index)=>{
        item.addEventListener('click',function(){
            curentIndex = index
            showGallery()
        })
    })
    close.addEventListener('click',function(){
        gallery.classList.remove('show')
    })
    document.addEventListener('keydown',function(e){
        if(e.keyCode === 27){
            gallery.classList.remove('show')
        }
    })
    prev.addEventListener('click',function(){
        if(curentIndex>0)
        curentIndex--
        showGallery()
    })
    next.addEventListener('click',function(){
        if(curentIndex<imgaes.length)
        curentIndex++
        showGallery()
    })
    
    })