// Module ile bunu yapıyoruz. saka.js ve unsplash.js 'i index.html'e yazmadık ve direk module ile buraya tanıttık ve 
// main.js üzerinden sadece buraya tanıttığımız şeyi çağırdık..

import sakaGetir from "./saka_api.js"; // İSMİ FARKLI DA OLABİLİRDİ.. saka vs olabilirdi veya Faruk olabilirdi..
import resimGetir from "./unsplash_api.js" //EXPORT DEFAULT OLDUĞU İÇİN...

class Ekran{
    constructor(){
        this.sakaGetirBtn = document.querySelector(".saka-getir");
        this.sakaGetirBtn.addEventListener("click", this.sakaGetir.bind(this)); // Ekrana eriştik bind ile..
    }

    async sakaGetir(){
        //Modül sonrası bunu yazmaya gerek kalmadı..
        // const rastgeleSaka = await new JokeApi().randomSakaGetir();
        // const rastgeleResim = await new UnsplashApi().randomResimGetir();

        const rastgeleSaka = await sakaGetir(); // ARTIK SADECE ÇAĞIRDIK..
        const rastgeleResim = await resimGetir(); // ARTIK SADECE ÇAĞIRDIK.
        const tumSonuclar = {
            rastgeleSaka,
            rastgeleResim
        }
        this.ekranaSonuclariYazdir(tumSonuclar)
    }

    ekranaSonuclariYazdir(sonuc){
        document.querySelector(".sonuc").innerHTML=
        `          
        <div class="card">
        <div class="card-image">
          <figure class="image is-16by9">
            <img src="${sonuc.rastgeleResim}" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 has-text-danger pb-2">${sonuc.rastgeleSaka}</p>
            </div>
          </div>
        </div>

        <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4 has-text-warning pb-2">${sonuc.rastgeleSaka}</p>
              </div>
            </div>
          </div>
      </div>`
    }
}

export default function startApp(){
  const ekran = new Ekran();
  return ekran;
}