/* slide navebar */

function  openslidemenu() {
  document.getElementById('side-menu').style.height='100%';
  document.getElementById('side-menu').style.paddingTop='60px';
}
function  closeslidemenu() {
  document.getElementById('side-menu').style.height='0';
  document.getElementById('side-menu').style.paddingTop='0';
}


//typing animation
const typewriter = function (textElement, words, wait = 3000){
  this.textElement = textElement;
  this.words = words;
  this.txt = '';
  this.wait = parseInt( wait, 10);
  this.wordIndex = 0;
  this.type();
  this.isDelete = false;
}

typewriter.prototype.type = function() {

  const current = this.wordIndex % this.words.length;
  const fullTxt = this.words[current];

  if (this.isDelete) {
    this.txt = fullTxt.substring(0, this.txt.length - 1)
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1)
  }

  this.textElement.innerHTML = `<span class="txt"  >${this.txt}</span>`

  let typeSpeed = 100;
  if (this.isDelete) {
    typeSpeed /= 10;
    
  }

if (!this.isDelete && this.txt === fullTxt) {

    typeSpeed = this.wait;
    this.isDelete = true;
} else if(this.isDelete && this.txt === '') {

  this.isDelete = false;
  this.wordIndex++;
  typeSpeed =300;
}

  setTimeout (() => this.type(),typeSpeed)
}

document.addEventListener('DOMContentLoaded',init);

function init() {
  const textElement = document.querySelector('.txt-type');
  const words = JSON.parse(textElement.getAttribute('data-words'));
  const wait = textElement.getAttribute('data-wait');

  new typewriter(textElement,words,wait);
}


/*interseption*/

const header = document.querySelector("nav");
const sectionOne = document.getElementById("Home");

//contact page route
const contact = document.querySelector(".contact-btn");

  contact.addEventListener("click", function(){
  window.location.href="#Contact"
})

//page intersecion observer
const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      } else {
      header.classList.remove("nav-scrolled");
      }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

//button filters in portfolio

const btnul = document.getElementById('btn-ul').children;
const images = document.querySelector(".port-images").children;

for(let i=0; i <btnul.length;  i++){
  btnul[i].addEventListener("click",function(){
    for(let j=0; j<btnul.length; j++){
      btnul[j].classList.remove("active")
    }
    this.classList.add("active") 
      const target=this.getAttribute("data-target")

    for(let k=0; k<images.length; k++){
      images[k].style.display="none";
      if (target==images[k].getAttribute("data-id")){
        images[k].style.display="block" 
      }
      if(target=="all"){
        images[k].style.display="block";
      }
    
    }
    
  })
}


//lightbox

const closelightbox = document.querySelector(".closelightbox");
const lightbox=document.querySelector(".lightbox")
const lightboxImage=lightbox.querySelector("img")

lightbox.addEventListener('click',function(){
  if(event.target!==lightboxImage){
    lightbox.classList.remove('show')
  lightbox.classList.add('hide')
  }
})

closelightbox.addEventListener('click', function (){
  lightbox.classList.remove('show')
  lightbox.classList.add('hide')
  })

  const gallery =document.querySelector(".port-images")
  const galleryItem = document.querySelectorAll('.item')
  
  galleryItem.forEach(function(element){
    element.querySelector('.fa-plus').addEventListener("click",function(){
      lightbox.classList.remove('hide')
      lightbox.classList.add('show') 
      lightboxImage.src =element.querySelector('img').getAttribute('src')
      
    })
  })






  