
  const carouselInner = document.getElementById("carouselInner");
  const images = document.querySelectorAll(".carousel-inner img");
  let index = 0;
  const imageWidth = images[0].clientWidth + 20; // 20 = margin-right

  function slideCarousel() {
    index++;
    carouselInner.style.transition = "transform 0.5s ease-in-out";
    carouselInner.style.transform = `translateX(${-imageWidth * index}px)`;

    // لو وصلنا لآخر صورة (المكررة)، نرجع لأول صورة فجأة
    if (index === images.length - 1) {
      setTimeout(() => {
        carouselInner.style.transition = "none";
        index = 0;
        carouselInner.style.transform = `translateX(0)`;
      }, 500); // لازم يساوي زمن الـ transition (0.5s)
    }
  }

  setInterval(slideCarousel, 1000); // يتحرك كل 3 ثواني
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // يمنع الإرسال التلقائي
  
    const form = event.target;
    const formData = new FormData(form);
  
    fetch("https://formsubmit.co/YOUR_EMAIL_HERE", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        form.reset();
        document.getElementById("thankYouMessage").style.display = "block";
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch(error => {
      alert("Error sending message!");
    });
  });
  
  // فتح الصورة
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', function () {
      const modal = document.getElementById("image-modal");
      const modalImg = document.getElementById("modal-img");
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  // إغلاق المودال
  function closeImageModal() {
    document.getElementById("image-modal").style.display = "none";
  }
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', e => e.preventDefault());
  });
  ocument.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("img").forEach(function (img) {
      img.setAttribute("draggable", "false");
      img.setAttribute("oncontextmenu", "return false;");
    });
  });

