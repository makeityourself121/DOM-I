const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const head = document.querySelectorAll('nav a');
head[0].textContent=siteContent["nav"]["nav-item-1"]
head[1].textContent=siteContent["nav"]["nav-item-2"]
head[2].textContent=siteContent["nav"]["nav-item-3"]
head[3].textContent=siteContent["nav"]["nav-item-4"]
head[4].textContent=siteContent["nav"]["nav-item-5"]
head[5].textContent=siteContent["nav"]["nav-item-6"]

const ctatext=document.querySelector('.cta-text h1');
ctatext.textContent=siteContent["cta"]["h1"];
ctatext.style.width="300px"
ctatext.style.height="200px"
const cta=document.querySelector('.cta-text button');
cta.textContent=siteContent["cta"]["button"]
const ctaimg=document.querySelector('#cta-img')
ctaimg.src=siteContent['cta']['img-src']

const topContent=document.querySelector('.top-content .text-content h4');
topContent.textContent=siteContent["main-content"]["features-h4"];
const topFeature=document.querySelector('.top-content .text-content p');
topFeature.textContent=siteContent["main-content"]["features-content"];
const topRight=document.querySelector('.text-content:nth-of-type(2) h4')
topRight.textContent=siteContent["main-content"]["about-h4"];
const topRightText=document.querySelector('.text-content:nth-of-type(2) p')
topRightText.textContent=siteContent["main-content"]["about-content"]

const middleimg=document.querySelector('.middle-img')
middleimg.src=siteContent['main-content']['middle-img-src']

const bottomContent=document.querySelector('.bottom-content .text-content h4')
bottomContent.textContent=siteContent["main-content"]["services-h4"]
const servicetext=document.querySelector('.bottom-content .text-content p')
servicetext.textContent=siteContent["main-content"]["services-content"]
const bottomProduct=document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
bottomProduct.textContent=siteContent["main-content"]["product-h4"]
const productText=document.querySelector('.bottom-content .text-content:nth-of-type(2) p')
productText.textContent=siteContent["main-content"]["product-content"]
const vision=document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
vision.textContent=siteContent["main-content"]["vision-h4"]
const visionText=document.querySelector('.bottom-content .text-content:nth-of-type(3) p')
visionText.textContent=siteContent["main-content"]["vision-content"]

const contactInfo=document.querySelector('.contact h4')
contactInfo.textContent=siteContent["contact"]["contact-h4"]

const address=document.querySelector('.contact p:nth-of-type(1)')
address.textContent=siteContent["contact"]["address"]
address.style.width="200px"
const phone=document.querySelector('.contact p:nth-of-type(2)')
phone.textContent=siteContent["contact"]["phone"]
const email=document.querySelector('.contact p:nth-of-type(3)')
email.textContent=siteContent["contact"]["email"]

const footer=document.querySelector('footer p')
footer.textContent=siteContent["footer"]["copyright"]
