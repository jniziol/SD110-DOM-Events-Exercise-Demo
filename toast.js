const toast = document.getElementById('toast');

toast.addEventListener('click', function(e) {  
  if (e.target.nodeName === "I") {
    toast.classList.add('hidden');
  }
});

setTimeout(function() {
  toast.classList.remove('hidden');

  setTimeout(function() {    
    toast.classList.add('hidden');
  }, 5000);
}, 2000);