const navbar = document.getElementById("navbar");//prendo il mio id associato nell'HTML
const navbarltems = [{
    text: "I nostri Prodotti",
    url: "#"
},
{
    text: "Categorie",
    url: "#",
    submenu: [...categories]
},
{
    text: "Chi siamo",
    url: "#",
},
]

function CreateNavbarElement (target,navbarltems){
    navbarltems.forEach(item => {
         
        //creo la struttura dei tag
        let li = document.createElement("li");
        let ancor = document.createElement("a");

        //aggiungo le classi
        li.classList.add("nav-item");
        ancor.classList.add("nav-link");

        //do gli attributi necessari
        ancor.setAttribute("href", item.url);
        ancor.innerHTML = item.text;

        li.appendChild(ancor); //appendo al tag "li" il tag "ancor"
        target.appendChild(li);//appendo al target il tag "li"

        // condizione del submenù
        //se il submenu è presente negli oggetti 
        if (item.submenu && item.submenu.length  > 0 ){
            li.classList.add("dropdown"); //aggiungo al tag "li" le classi per il dropdown menu
            ancor.classList.add("dropdown-toggle", "card-text");//aggiungo al tag "ancor" le classi per il dropdown menu
            ancor.setAttribute("data-bs-toggle","dropdown");//do gli attributi per il dropdown al tag "ancor"


            let dropdownUl = document.createElement("ul"); //variabile d'appoggio
            

            dropdownUl.classList.add("dropdown-menu", "card-text") //aggiunto alla variabile d'appoggio le nuovi classi per il dropdown menu
           
            //ciclo dell'array delle mie categorie (file js esterno)
           item.submenu.forEach(submenuItem => {
            let dropdownLi = document.createElement("li") //creo una variabile d'appoggio che crea un tag "li" per ogni categoria del mio array d'oggetti
            let dropdownAncor = document.createElement("a") //creo una variabile d'appoggio che crea un tag "a" per ogni categoria del mio array d'oggetti
        
            dropdownAncor.innerHTML = submenuItem.text //inserisco la mia categoria del mio file js esterno all'interno del tag "a" (uso la dotnotation per accedere alla proprietà che cambia solo il testo)
            dropdownLi.classList.add("dropdown-item", "text-center");//aggiungo le nuovi classi al tag "li" valide solo per il dropdown menu
            dropdownAncor.classList.add("nav-link", "card-text");//aggiungo le nuovi classi al tag "a" valide solo per il dropdown menu
            dropdownUl.appendChild(dropdownLi);//appendo il nuovo tag "ul" del dropdown al nuovo tag "li" del dropdown
            dropdownLi.appendChild(dropdownAncor);//appendo il nuovo tag "li" del dropdown al nuovo tag "a" del dropdown
           });

             li.appendChild(dropdownUl)//appendo il tag "li" creato in precedenza al nuovo tag "ul" valido solo per la funzionalità di dropdown
           
        }
    });
}
//invocazione funzione
CreateNavbarElement(navbar, navbarltems)




//creazione carosello dinamico
const carousel = document.getElementById("imgCarousel");

let img = [
    {
        url: "https://www.etisalat.ae/content/dam/dx_eitsalat_ae/en/images/iphone-13-pro-buy-en-1440x500_tcm313-290834.jpg"
    },
    {
        url: "https://www.netguru.com/hubfs/Codestories/arnel-hasanovic-4oWSXdeAS2g-unsplash.jpg"
    },
    {
        url: "https://edtechmagazine.com/higher/sites/edtechmagazine.com.higher/files/styles/cdw_hero/public/articles/%5Bcdw_tech_site%3Afield_site_shortname%5D/202211/HiEd_Q422_PS_Soto_hero.jpg?itok=1LrqDM_c"
    },
];

function dinamicCarousel(images) {


    images.forEach((img,index) => {

        const carouselItem = document.createElement("div")
        const imgItem = document.createElement("img");

    
        carouselItem.classList.add("carousel-item", "p-5")
        if (index === 0) {
            carouselItem.classList.add("active");
        }

        imgItem.classList.add("d-block", "w-100", "rounded-5");
        
        imgItem.setAttribute("src", img.url);

        carouselItem.appendChild(imgItem);

        carousel.appendChild(carouselItem)

    });
}

dinamicCarousel(img)


