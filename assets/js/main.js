
// scrolled effect in navbar

window.addEventListener("scroll",() => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

// navbar in tablets and mobiles

const nav = document.querySelector('.nav-menu');
const openNavBtn = document.querySelector('#open-menu-btn');
const closeNavBtn = document.querySelector('#close-menu-btn');
const body = document.body

const openNav = () => {
  nav.style.display = "flex";
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';
  body.style.overflow = 'hidden'
}
openNavBtn.addEventListener('click', openNav);


const closeNav = () => {
  nav.style.display = "none";
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
  body.style.overflow = 'auto'
}
closeNavBtn.addEventListener('click', closeNav);

if(document.body.clientWidth < 1024){
  nav.querySelectorAll('li a').forEach(navLink =>{
    navLink.addEventListener('click', closeNav);
  })
}


// FAQs section

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq-icon i');
        if(icon.className === ('fa-solid fa-plus')){
            icon.className = 'fa-solid fa-minus';
        }else{
            icon.className = 'fa-solid fa-plus'
        }
    })
})