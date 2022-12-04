let toggleMenu = document.getElementsByClassName('toggle-menu')[0];
let ul = document.getElementsByTagName('ul')[0];
let links = document.getElementsByClassName('links');
let searchIcon = document.getElementsByClassName('menu-search')[0];
let formHeader = document.getElementsByClassName('searchicon')[0];
let header = document.querySelector('header');
let loading = document.querySelector('.loading')


// Start Header
document.title = 'Kasper';
window.onload = setTimeout(function(){
    loading.classList.add('loading-hidding');
} , 1000);


window.addEventListener("scroll"  , function(){
    if(window.scrollY >= 150 ){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
})


formHeader.addEventListener('click' , function(){
    searchIcon.classList.toggle('flex');
})

toggleMenu.addEventListener('click' , function(){
    ul.classList.toggle('toggle-menu-block');
    for(let x = 0 ; x < links.length ; x++){
        links[x].classList.toggle("toggle-menu-a")
    }
})
// End Header



$('#landing').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText:[`<i class="fa-solid fa-angle-left"></i>` , `<i class="fa-solid fa-angle-right"></i>`],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


let protfollioLi = Array.from(document.querySelectorAll(".protfollio .shuffle li"));
let protfollioBox = Array.from(document.querySelectorAll(".protfollio .img-container .box"));


protfollioLi.forEach((ele)=>{
    ele.addEventListener("click" , (e)=>{
        protfollioLi.forEach((ele)=>{
            ele.classList.remove("active");
        })
        e.currentTarget.classList.add("active")
        protfollioBox.forEach((ele)=>{
            ele.style.display = "none"
        })
        let data = document.querySelectorAll(e.currentTarget.dataset.pro);
        data.forEach((ele)=>{
            ele.style.display = "block"
        })
    })

})


let nums = document.querySelectorAll(".stats .number");
let sectionNums = document.querySelector(".stats");
let started = false;


window.addEventListener("scroll"  , function(){
    if(window.scrollY >= sectionNums.offsetTop - 200){
        if(!started){
            nums.forEach((ele)=> startCount(ele));
        }
        started = true;
    }
})

function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    } , 2000 / goal)
}

let sectionOurSiklls = document.querySelector(".our-skills");
let spanSiklls = document.querySelectorAll(".skills .prog span")

window.addEventListener("scroll" , function(){
    if(window.scrollY >= sectionOurSiklls.offsetTop - 200){

        spanSiklls.forEach((span)=>{
            span.style.width = span.dataset.progress;
        })
    }
})