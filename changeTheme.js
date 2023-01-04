const btn_Theme = document.getElementById('btn_Theme');

window.onload = function() {
    if(typeof(localStorage) !== "undefined")
    {
        let themeMode = localStorage.getItem('theme');

        if(themeMode == '"dark-theme-variables"')
        {
            ChangeTheme();
        }
    }
};

function ChangeTheme() {
    document.body.classList.toggle('dark-theme-variables');
    btn_Theme.querySelector('div:nth-child(1)').classList.toggle('active');
    btn_Theme.querySelector('div:nth-child(2)').classList.toggle('active');
};

btn_Theme.addEventListener('click', () =>{
    ChangeTheme();
    localStorage.setItem("theme", JSON.stringify(document.body.classList.toString()));
});