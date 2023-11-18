const container = document.querySelector('#container');
const btnMenu = document.querySelector('#btn-menu');
const verifyWidthDevice = () => {
	window.innerWidth <= 768 ? container.classList.remove('active') : container.classList.add('active');
}

window.addEventListener('DOMContentLoaded', verifyWidthDevice);
window.addEventListener('resize', verifyWidthDevice);

btnMenu.addEventListener('click', () => {
	container.classList.toggle('active');
});
