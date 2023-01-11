const darkbutton = document.getElementById("dark");
const lightbutton = document.getElementById("light");
const solarbutton = document.getElementById("solar");
const body = document.body;


//local sto
const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme){
    body.classList.add(theme);
    isSolar && body.classList.add("solar");
}

//button Event Handler

darkbutton.onclick = () => {

     body.classList.replace(`light`, `dark`);
     localStorage.setItem('theme', 'dark');

};
lightbutton.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
};
solarbutton.onclick = () => {
    if (body.classList.contains('solar')) {
        body.classList.remove('solar');
        solarbutton.style.cssText= "--bg-solar: var(--yellow);"
        solarbutton.innerText ='solarize';
        localStorage.removeItem('isSolar');
    }
    else {
        solarbutton.style.cssText ='--bg-solar: white;'
        body.classList.add('solar');
    }
};