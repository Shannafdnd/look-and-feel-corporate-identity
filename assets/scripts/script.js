const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
hamburger = document.getElementById('hamburger-menu'),
toggle = body.querySelector(".toggle-navbar"),
searchBtn = body.querySelector(".search-box"),
darkModeCheckbox = document.getElementById("darkmode"),
modeText = body.querySelector(".mode-text");

function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}

function setDarkMode(value) {
    darkModeCheckbox.checked = value;
    
    if (value) {
        console.log("adding");
        body.style.setProperty("--body-color", "#18191a");
        body.style.setProperty("--sidebar-color", "#242526");
        body.style.setProperty("--primary-color", "#3a3b3c");
        body.style.setProperty("--primary-color-light", "#3a3b3c");
        body.style.setProperty("--toggle-color", "#fff");
        body.style.setProperty("--text-color", "#ccc");
        body.style.setProperty("--text-color-inv-dark", "#ccc");
        body.style.setProperty("--red-color", "#f00");
        body.style.setProperty("backdrop-filter", "saturate(0.6)");
    } else {
        console.log("removing");
        body.style.removeProperty("--body-color");
        body.style.removeProperty("--sidebar-color");
        body.style.removeProperty("--primary-color");
        body.style.removeProperty("--primary-color-light");
        body.style.removeProperty("--toggle-color");
        body.style.removeProperty("--text-color");
        body.style.removeProperty("--text-color-inv-dark");
        body.style.removeProperty("--red-color");
        body.style.removeProperty("backdrop-filter");
    }
}

setDarkMode(getCookie("darkmode") === "true" ?? (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches));

// check if browser color scheme is changed
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    console.log("system change", event.matches)
    console.log(getCookie("darkmode"))
    if (getCookie("darkmode") === undefined) {
        console.log("system change", event.matches)
        setDarkMode(event.matches);
    }
});

darkModeCheckbox.addEventListener("change", () => {
    setDarkMode(darkModeCheckbox.checked);
    document.cookie = `darkmode=${darkModeCheckbox.checked}`;
})

toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

hamburger.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
    searchBtn.querySelector("input").focus();
})

function switchTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
};

function standardTab() {
    let home = document.getElementById('home');
    home.style.display = "block";
    home.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
  standardTab();
});