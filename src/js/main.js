const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
  });