const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const multipleSelections = document.querySelectorAll("nav a");
multipleSelections[0].textContent = "Servisler";
multipleSelections[1].textContent = "Ürünler";
multipleSelections[2].textContent = "Vizyon";
multipleSelections[3].textContent = "Özellikler";
multipleSelections[4].textContent = "Hakkımızda";
multipleSelections[5].textContent = "İletişim";

for (let i = 0; i < multipleSelections.length; i++) {
  multipleSelections[i].setAttribute("class", "italic");
}

const mySelection = document.querySelector(".cta h1");
mySelection.textContent = "Bu DOM Mükemmel";

const buttonText = document.querySelector(".cta button");
buttonText.textContent = "Başlayın";

const logoImg = document.querySelector("#logo-img");
logoImg.setAttribute("src", "http://localhost:9000/img/logo.png");

const values = Object.values(siteContent["ana-içerik"]);
const mainText = document.querySelectorAll(".text-content h4, .text-content p");
for (let i = 0; i < mainText.length; i++) {
  mainText[i].textContent = values[i];
}

const valuesContact = Object.values(siteContent["iletisim"]);
const contactText = document.querySelectorAll(".contact h4, .contact p");
for (let i = 0; i < contactText.length; i++) {
  contactText[i].textContent = valuesContact[i];
}

const footerA = document.querySelector("footer a");
footerA.textContent = Object.values(siteContent["footer"]);
footerA.setAttribute("class", "bold");
