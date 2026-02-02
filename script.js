const kontaktLink = document.getElementById("kontaktLink");
const modal = document.getElementById("contactModal");
const btn = document.getElementById("contactBtn");
const closeBtn = document.querySelector(".close");

kontaktLink.onclick = (e) => {
  e.preventDefault();      
  modal.style.display = "flex"; 
};
  
btn.onclick = (e) => { e.preventDefault(); modal.style.display="flex"; };
closeBtn.onclick = () => modal.style.display="none";
window.onclick = (e) => { if(e.target === modal) modal.style.display="none"; };

document.getElementById("contactForm").addEventListener("submit", async (e)=>{
  e.preventDefault();
  const name = e.target.name.value;
  const contact = e.target.contact.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  const botToken = "8337351504:AAHNNqQ1Ue4aD2_InyVu0woOCvwybblFXcQ"; 
  const chatId = "1830045630";
  const text = `📩 Yangi Xabar:\n👤 Ism: ${name}\n📞 Raqami: ${contact}\n💬 Xati: ${message}\n✉️ Email: ${email}`;
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const res = await fetch(url,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({chat_id:chatId,text})
    });
    if(res.ok){
      alert("✅ Xabar yuborildi!");
      e.target.reset();
      modal.style.display="none";
    } else alert("❌ Xabar yuborilmadi.");
  } catch(err){ alert("⚠️ Error: "+err.message); }
});
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navbar");

toggle.onclick = () => {
  if(nav.style.display === "flex") nav.style.display = "none";
  else nav.style.display = "flex";
};
// 🌍 Language Dropdown
const langBtn = document.getElementById("langBtn");
const langOptions = document.getElementById("langOptions");

langBtn.onclick = () => {
  langOptions.style.display =
    langOptions.style.display === "block" ? "none" : "block";
};

// Click outside to close dropdown
window.addEventListener("click", (e) => {
  if (!langBtn.contains(e.target) && !langOptions.contains(e.target)) {
    langOptions.style.display = "none";
  }
});

// 🌐 Translations
const translations = {
  en: {
    home: "Home",
    about: "Projects I've participated in",
    kontaktLink: "Contact",
    name: "Hello, I'm Shohjahon Bakhtiyorov",
    skill: "Frontend Developer",
    contactBtn: "Let's Talk",
    langBtn: "Language",
    contactTitle: "Contact Me",
    nameInput: "Your Name and Surname",
    contactInput: "Your Phone Number",
    emailInput: "Your Email Address",
    messageInput: "What do you want to talk about?",
    sendBtn: "Send",

  },
  ru: {
    home: "Главная",
    about: "Проекты я участвовал",
    kontaktLink: "Контакт",
    name: "Привет, я Шохжахон Бахтияров",
    skill: "Фронтенд Разработчик",
    contactBtn: "Давайте поговорим",
    langBtn: "Язык",
    contactTitle: "Свяжитесь со мной",
    nameInput: "Ваше имя и фамилия",
    contactInput: "Ваш номер телефона",
    emailInput: "Ваш адрес электронной почты",
    messageInput: "О чём вы хотите поговорить?",
    sendBtn: "Отправить",
  },
  uz: {
    home: "Uy",
    about: "Men qatnashgan loyihalar",
    kontaktLink: "Kontakt",
    name: "Salom, men Shohjahon Baxtiyorov",
    skill: "Frontend Dasturchi",
    contactBtn: "Gaplashaylik",
    langBtn: "Til",
    contactTitle: "Men bilan bog'laning",
    nameInput: "Ismingiz",
    contactInput: "Telefon raqamingiz",
    emailInput: "Email pochtangiz",
    messageInput: "Nima haqida gaplashamiz?",
    sendBtn: "Yuborish",
  },
};

// 🧠 Change language text
document.querySelectorAll(".lang-options button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    langOptions.style.display = "none";

    for (const key in translations[lang]) {
      const el = document.getElementById(key);
      if (el)
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        };
    }
  });
});
// const text = "Salom! Men Web Dasturchiman";  
// let i = 0;

// function typeEffect() {
//   if (i < text.length) {
//     document.getElementById("typedText").textContent += text.charAt(i);
//     i++;
//     setTimeout(typeEffect, 7);}}