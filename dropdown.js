const features = document.getElementById("features-link");
const dropdown = document.querySelector('.dropdown');

features.addEventListener('click', function(e) {
  e.currentTarget.querySelector('i').classList.toggle('icofont-simple-down');
  e.currentTarget.querySelector('i').classList.toggle('icofont-simple-up');
  dropdown.classList.toggle('closed');
  e.preventDefault();
});

