const reportButton = document.getElementById('analytic-report');
const modal = document.getElementById('news-letter-modal');
const modalClose = document.querySelector('.modal-nav i');
const modalMain = document.querySelector('.modal-main');

reportButton.addEventListener('click', function(e) {
  document.body.classList.toggle('modal-open'); 
  modal.classList.toggle('closed');
});

modalClose.addEventListener('click', function(e) {
  document.body.classList.toggle('modal-open'); 
  modal.classList.toggle('closed');
});

modal.addEventListener('click', function(e) {
  if(!modalMain.contains(e.target)) {
    document.body.classList.toggle('modal-open'); 
    modal.classList.toggle('closed');
  }
});

