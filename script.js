document.querySelector('.themes').addEventListener('change', (event) => {
    if( event.target.nodeName === 'INPUT') {
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(event.target.value);
    }
})

const themeBtn = document.querySelector('.theme-btn');

if(localStorage.getItem('theme') == 'dark'){
    document.documentElement.classList.add('active')
}


themeBtn.onclick = function () {
    // document.documentElement.classList.toggle('active')
    const isDark = document.documentElement.classList.toggle('active')

    if(isDark) {
        localStorage.setItem('theme', 'dark')
    }else{
        localStorage.setItem('theme', 'light')
    }

    
}