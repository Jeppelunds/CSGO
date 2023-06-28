/* Burger menu */

const navigationSection = document.querySelector('#navigation-section')

navigationSection.innerHTML = `<nav>
<a href="index.html"><img src="img/CSGO-Logo.png" alt="csgo logo" width="75px"></a>
<ul>
    <a href="gamemodes.html"><li>Gamemodes</li></a>
    <a href="community.html"><li>Community</li></a>
    <a href="operations.html"><li>Operations</li></a>
    <a href="operations.html"><li>Skins</li></a>
</ul>
<i class="fa-solid fa-bars" id="burger-icon" style="color: #000000;"></i>
</nav>
<div class="burger-drop">
<a href="gamemodes.html">Gamemodes</a>
<a href="community.html">Community</a>
<a href="operations.html">Operations</a>
<a href="operations.html">Skins</a>
</div>`

const burgerIcon = document.querySelector('#burger-icon')
const burgerMenu = document.querySelector('.burger-drop')

burgerIcon.addEventListener('click', myFunction);

function myFunction() {
  burgerMenu.classList.toggle('active')
}









