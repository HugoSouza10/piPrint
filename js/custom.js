// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// Pegar post do instagram


const accessToken = '1c2a51147848167589d1b0fbc28bb03e'; // Substitua pelo seu Token de Acesso
const userId = '57422161592'; // Substitua pelo seu ID de Usuário

const apiUrl = `https://graph.instagram.com/v12.0/${userId}/media?fields=id,media_type,media_url,permalink,caption,thumbnail_url,timestamp&access_token=${accessToken}`;

async function fetchInstagramData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Erro na solicitação');
        }

        const data = await response.json();
        console.log(data);
        // Faça algo com os dados das postagens
    } catch (error) {
        console.error(error);
    }
}

fetchInstagramData();



// Rolagem suável menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Verifique se o link aponta para uma âncora interna com um ID
        if (href && href.startsWith('#')) {
            e.preventDefault();

            const targetId = href.substring(1); // Remova o "#" da âncora
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});




// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}