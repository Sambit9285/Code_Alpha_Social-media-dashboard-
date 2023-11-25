let html = document.documentElement;
let mode = document.getElementById('dark-mode');
let checkbox = document.querySelector('input[type=checkbox]');
checkbox.addEventListener('change', () => {
    if(checkbox.checked){
        transition()
        mode.textContent = 'Light Mode';
        html.setAttribute('data-theme', 'light');
    } else{
        transition()
        mode.textContent = 'Dark Mode';
        html.setAttribute('data-theme', 'dark');
    }
})

let transition = () => {
    html.classList.add('transition');
    window.setTimeout(() => {
        html.classList.remove('transition');
    }, 1000);
}
