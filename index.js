
const reviews = [
    {
      id: 1,
      name: "Kavya",
      job: "College Student",
      img:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      text:
        "I have been studying languages for years, and I can confidently say that this language learningwebsite is one of the best resources I have come across."
    },
    {
        id: 2,
        name: "Ishan",
        job: "Web Developer",
        img:
          "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
        text:
          "I have been studying languages for years, and I can confidently say that this language learningwebsite is one of the best resources I have come across."
      },
      {
        id: 3,
        name: "Krishna",
        job: "Reviewer ",
        img:
          "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
        text:
          "I have been studying languages for years, and I can confidently say that this language learningwebsite is one of the best resources I have come across."
      },
      {
        id: 4,
        name: "Karan Goyal",
        job: "Senior College Student",
        img:
          "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
        text:
          "I have been studying languages for years, and I can confidently say that this language learningwebsite is one of the best resources I have come across."
      }
  ];
  
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  
  let currentItem = 0;
  
  window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  
  nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  
  prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  
  let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}