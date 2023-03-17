let menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})

/*TYPING EFFECT*/

let typed = new Typed('.auto-input',{
    strings: ['Desenvolvedor FullStack-PHP!', 'Front-End!', 'Back-End!', 'Freelancer!', 'Social-Media!', 'YouTuber!'],
    typeSpeed: 35,
    backSpeed: 35,
    backDelay: 2000,
    loop: true,
})