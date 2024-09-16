function themeChange() {
	const htmlElement = document.documentElement;
	htmlElement.classList.toggle('dark');

	const theme = htmlElement.classList.contains('dark') ? 'dark' : null;
	localStorage.setItem('theme', theme);
}

window.addEventListener(
	'DOMContentLoaded', 
	() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			document.documentElement.classList.add(savedTheme);
		}
		const switcherButton = document.getElementById('switcherButton');
		switcherButton.addEventListener('click', themeChange);
	}
);