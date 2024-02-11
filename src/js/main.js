const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
  });


  document.getElementById('bSend').addEventListener('click', function () {
    var name = document.getElementById('nameForm').value;
    var email = document.getElementById('emailForm').value;
    var date = document.getElementById('dateForm').value;
    var phone = document.getElementById('phoneForm').value;

    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    var phoneRegex = /^\d{10}$/;

    if (!nameRegex.test(name)) {
      alert('Please enter a valid name');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (!dateRegex.test(date)) {
      alert('Please enter a valid date');
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid phone number');
      return;
    }

    alert('Form submitted successfully!');
    // Aquí puedes agregar código para enviar el formulario a través de AJAX o cualquier otro método
  });