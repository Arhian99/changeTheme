


function setTheme() {
    let root = document.documentElement;
    let newTheme = root.className === 'DARK' ? 'LIGHT' : 'DARK';
    root.className = newTheme;

    
    document.querySelector('.theme-name').textContent = newTheme;
}


document.querySelector('.toggle-theme').addEventListener('click', setTheme);

