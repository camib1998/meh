//NÆSTE KNAP PÅ FORSIDEN //



// funktionen går ind og finder 'myDiv'i html //

function myFunction() {

    //x er en variabel og bliver deklareret med var-nøgleordet //

  var x = document.getElementById("myDIV");
    
// if angiver en blok kode, der skal udføres, hvis en specificeret betingelse er sand. Metoden getElementById går ind i koden og finder det element, der har ID-attributten med den angivne værdi. //
    
  if (x.innerHTML === "''JK var god til at spørge ind til vores behov og kom med foreslag. Han gav os mulighed for at være med under selve fotograferingen, så vi sammen kunne komme frem til det perfekte billede. Skulle jeg få behov for en dronefotograf igen, ringer jeg til JK.'' <br> - Jacob Munk") 
  
  // når der klikkes på knappen, kommer det næste tekst frem -- onclick=myFunction //
  {
    x.innerHTML = "''Jeg kan i høj grad anbefale JK Dronworks til andre, super god kvalitet samt gode idéer og vinkler på billederne. JK opfyldte mine ønsker og behov. Jeg var meget tilfreds med JK og vil derfor vælge ham igen.'' <br> - Leif Vang";

// else angiver en blok kode, der skal udføres, hvis den samme specificeret betingelse er falsk -- har god sammenhæng ift at man trykker næste // 
      
  } else {
    x.innerHTML = "''JK var god til at spørge ind til vores behov og kom med foreslag. Han gav os mulighed for at være med under selve fotograferingen, så vi sammen kunne komme frem til det perfekte billede. Skulle jeg få behov for en dronefotograf igen, ringer jeg til JK.'' <br> - Jacob Munk";
  }

}

// SEND KNAP PÅ BOOKING SIDEN //


// metoden går ind og finder det id i html filen, som hedder 'myVideo' //
var vid = document.getElementById("myVideo"); 

// play() metoden afspiller videoen, dvs. når man klikker på knappen - on click funktion // 
function playVid() { 
  vid.play(); 
} 



// KORTET PÅ OM JK SIDEN //


// der gives adgang til token //

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsbmllbHNlbjMzMyIsImEiOiJja2Zxa2ZldTcwYnVqMnVvMDJuZDNqczIwIn0.B83n3OaLcdE4vcOxPMaBXw';

var adresse = [9.406,56.429]; // koordinater på den placering, som kortet skal vise //

// style uploadet fra mapbox api //
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/danielnielsen333/ckfqkpwzw25t019livz94f1dv', // stylesheet location
    
center: [9.406, 56.429 ], // starting position [lng, lat]
zoom: 12 // starting zoom
});

// create the popup. ”var popup” finder navnet på kortet. ”Offset: 25”, betyder egentlig bare hvor tæt popup skal være på markeren //
var popup = new mapboxgl.Popup({ offset: 25 }).setText(
'Mosevænget 19, 8800 Viborg'
);
 
// create DOM element for the marker. Ved at der skrives en id på variablen, kan man i sin css gå ind og style markeren //
var el = document.createElement('div');
el.id = 'marker';
 
// create the marker
new mapboxgl.Marker(el)
.setLngLat(adresse) // indstiller markerens geografiske placering
.setPopup(popup) // returnerer til popup’en, som er bundet til markeren
.addTo(map); // fastgør markeren til kortobjektet.   
    












