document.addEventListener("DOMContentLoaded", function() {
  const words = ["Debt-Collection", "Sales", "GTM", "Reception"];
  const el = document.querySelector('.typewriter-text');
  let wordIndex = 0, charIndex = 0, isDeleting = false;

  function type() {
    const current = words[wordIndex];
    if (!isDeleting) {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(type, 1200); // Pause before deleting
        return;
      }
    } else {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    setTimeout(type, isDeleting ? 60 : 120);
  }
  type();
});


document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active from all buttons
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    // Add active to clicked
    this.classList.add('active');
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    // Show selected tab
    document.getElementById(this.dataset.tab).classList.add('active');
  });
});

//agent page - section3
// ...existing code...

// Liza impact section - infinite popup animation in dark theme
document.addEventListener("DOMContentLoaded", function() {
  const avatarImages = [
    "../assets/John.png",
    "../assets/sara.png",
    "../assets/zara.png",
    "../assets/John.png",
    "../assets/sara.png",
    "../assets/zara.png", 
    "../assets/John.png",
    "../assets/sara.png",
    "../assets/zara.png",
    "../assets/John.png",
  ];
  const positions = [
    {top: "10%", left: "55%"},
    {top: "25%", left: "80%"},
    {top: "55%", left: "80%"},
    {top: "75%", left: "55%"},
    {top: "75%", left: "25%"},
    {top: "55%", left: "5%"},
    {top: "25%", left: "5%"},
    {top: "10%", left: "25%"},
    {top: "50%", left: "50%"},
    {top: "30%", left: "30%"},
  ];
  const container = document.getElementById("impact-avatars");
  container.innerHTML = "";
  avatarImages.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "impact-avatar";
    img.style.top = positions[i].top;
    img.style.left = positions[i].left;
    container.appendChild(img);
  });
  const avatars = container.querySelectorAll(".impact-avatar");
  function animateAvatars(idx = 0) {
    avatars.forEach(a => a.classList.remove("visible"));
    function showNext(i) {
      if (i < avatars.length) {
        avatars[i].classList.add("visible");
        setTimeout(() => showNext(i + 1), 350);
      } else {
        setTimeout(() => animateAvatars(0), 1000);
      }
    }
    showNext(0);
  }
  animateAvatars();
});