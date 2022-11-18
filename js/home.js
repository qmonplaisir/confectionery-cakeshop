/*const menuToggle = document.querySelector('.toggle')


menuToggle.addEventListener('click', 
function listener() {
    menuToggle.classList.toggle('active')
})
*/
/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  
  /*FAQ accordion*/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}