
document.addEventListener('DOMContentLoaded', function(){
  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      var id = this.getAttribute('href').substring(1);
      var el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth'});
    });
  });
});
