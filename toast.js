const toast = document.getElementById('toast');

toast.addEventListener('click', function(e) {  
  if (e.target.nodeName === "I") {
    toast.classList.toggle('hidden');
  }
});

setTimeout(function() {
  toast.classList.toggle('hidden');
}, 2000);