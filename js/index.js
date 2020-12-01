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

// nav
const nav = document.querySelector('header nav')

nav.children[0].innerText = siteContent["nav"]["nav-item-1"]

nav.children[1].innerText = siteContent["nav"]["nav-item-2"]
nav.children[1].innerText = siteContent["nav"]["nav-item-3"]
nav.children[2].innerText = siteContent["nav"]["nav-item-4"]
nav.children[3].innerText = siteContent["nav"]["nav-item-5"]
nav.children[4].innerText = siteContent["nav"]["nav-item-6"]

Array.from(navB).forEach(item => item.style.color = 'green')

const meLink = document.createElement('a')
meLink.innerText = 'me'
nav.appendChild(meLink)
const meLink2 = document.createElement('a')
meLink.innerText = 'me2'
nav.appendChild(meLink2)

// cta
const heading = document.querySelector('.cta-text h1')
heading.innerText = siteContent["cta"]["h1"]

const button = document.querySelector('.cta-text button')
button.innerText = siteContent["cta"]["button"]

const headerImg = document.getElementById('cta-img')
headerImg.setAttribute('src', siteContent['cta']['img-src'])


// main content
const topHeader = document.querySelector('.top-content')
topHeader.children[0].children[0].innerText = siteContent['main-content']['features-h4']
topHeader.children[0].children[1].innerText = siteContent['main-content']['features-content']

topHeader.children[1].children[0].innerText = siteContent['main-content']['about-h4']
topHeader.children[1].children[1].innerText = siteContent['main-content']['about-content']

const middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

const bottom = document.querySelector('.bottom-content')
bottom.children[0].children[0].innerText = siteContent['main-content']['services-h4']
bottom.children[0].children[1].innerText = siteContent['main-content']['services-content']

bottom.children[1].children[0].innerText = siteContent['main-content']['product-h4']
bottom.children[1].children[1].innerText = siteContent['main-content']['product-content']

bottom.children[2].children[0].innerText = siteContent['main-content']['vision-h4']
bottom.children[2].children[1].innerText = siteContent['main-content']['vision-content']

// contact
const contactSection = document.querySelector('.contact')

contactSection.children[0].innerText = siteContent['contact']['contact-h4']
contactSection.children[1].innerText = siteContent['contact']['address']
contactSection.children[2].innerText = siteContent['contact']['phone']
contactSection.children[3].innerText = siteContent['contact']['email']

// footer
const footer = document.querySelector('footer p')
footer.innerText = siteContent['footer']['copyright']