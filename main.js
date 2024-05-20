// ======================== PRESENTATION DES SERVICES

const servicesBtn = document.querySelectorAll('.service_item') 
const serciceDetails = document.querySelector('.services_right')

const getService = (category) => {
    const details = servicesData.find(item => item.category === category)
    serciceDetails.innerHTML = `
        <h3>${details.title}</h3>
        ${details.description.map((paragraph) => "<p>" + paragraph + "</p>").join()}
    `
}

const removeActive = () => {
    servicesBtn.forEach(button => {
        button.classList.remove('active')
    })
}

servicesBtn.forEach(item => {
    item.addEventListener('click', () => {
        removeActive();
        const serviceClass = item.classList[1];
        getService(serviceClass);
        item.classList.add('active')
    })
})






//========================= MIXITUP
const containerE1 = document.querySelector(".projects_container")
const Categories = document.querySelector(".projects_categories")
var mixer = mixitup(containerE1, {
    animation: {
        enable: false
    }
})

mixer.filter('*')







//NAV RESPONSIVE
const navMenu = document.querySelector('.nav_menu')
const navOpen = document.querySelector('.nav_toggle-open')
const navClose = document.querySelector('.nav_toggle-close')

const openMenu = () => {
    navMenu.style.display = 'flex'
    navOpen.style.display = 'none'          //fonction d'ouverture du menu deroulant
    navClose.style.display= 'inline-block'
}

const closeMenu = () => {
    navMenu.style.display = 'none'          //fonction de fermeture du menu deroulant
    navClose.style.display= 'none'
    navOpen.style.display = 'inline-block'
    
}

navOpen.addEventListener('click', openMenu)         //appel des fonctions
navClose.addEventListener('click', closeMenu)

/*fermeture du menu de navigation */
const navItems = navMenu.querySelectorAll('a');
if(window.innerWidth < 768) {
    navItems.forEach( item => {
        item.addEventListener('click', closeMenu)
    });
}


//DARK MODE

const page = document.getElementById('corps')       //identification des elements
const themeBtn = document.getElementById('darkmode')

function toggleClass() {            //ajout et retrait du dark mode
    corps.classList.toggle('dark')
}
themeBtn.addEventListener('click', toggleClass)     //ajout de l'evenement click sur le bouton


