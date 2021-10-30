if (document.title == "Nicolas BORDEAUX - Skills") {
    var skill_icons = document.getElementsByClassName("skill_ico");
    var skill_divs = document.getElementsByClassName("skill");

    skill_divs[0].innerHTML = skill_divs[1].innerHTML;

    skill_icons[0].addEventListener("click", function(){
        skill_divs[0].innerHTML = skill_divs[1].innerHTML;
    });

    skill_icons[1].addEventListener("click", function(){
        skill_divs[0].innerHTML = skill_divs[2].innerHTML;
    });

    skill_icons[2].addEventListener("click", function(){
        skill_divs[0].innerHTML = skill_divs[3].innerHTML;
    });

    skill_icons[3].addEventListener("click", function(){
        skill_divs[0].innerHTML = skill_divs[4].innerHTML;
    });

    skill_icons[4].addEventListener("click", function(){
        skill_divs[0].innerHTML = skill_divs[5].innerHTML;
    });

    skill_icons[5].addEventListener("click", function(){
        skill_divs[0].innerHTML = skill_divs[6].innerHTML;
    });

    skill_icons[6].addEventListener("click", function(){
        skill_divs[0].innerHTML = skill_divs[7].innerHTML;
    });
}

if (document.title == "Nicolas BORDEAUX - Projects") {

    

    // Sélecteurs section "mobile-app"
    var targetApp = document.getElementById('mobile-app');
    var appH2 = document.getElementById('mobile-app').getElementsByTagName('h2')[0];
    var appH5 = document.getElementById('mobile-app').getElementsByTagName('h5')[0];
    var appH6 = document.getElementById('mobile-app').getElementsByTagName('h6')[0];
    var appDivs = document.getElementsByClassName('flex-app')[0].getElementsByTagName('div');
    
    // Sélecteurs section "showcase-website"
    var targetShowcase = document.getElementById('showcase-website');
    var showcaseH2 = document.getElementById('showcase-website').getElementsByTagName('h2')[0];
    var showcaseH5 = document.getElementById('showcase-website').getElementsByTagName('h5')[0];
    var showcaseH6 = document.getElementById('showcase-website').getElementsByTagName('h6')[0];
    var showcaseDivs = document.getElementsByClassName('flex-showcase')[0].getElementsByTagName('div');

    
    
    document.addEventListener('scroll', () => {
        
        // Fonctions section "mobile-app"

        if (window.scrollY + window.innerHeight/1.5 >= targetApp.offsetTop) {
            appH2.style.opacity = "100%";
            appH5.style.opacity = "100%";
            appH6.style.opacity = "100%";
        }

        if (window.scrollY + window.innerHeight/2 >= targetApp.offsetTop) {
            
            for (i = 0; i < appDivs.length; i++) {
                appDivs[i].style.transform = "translateY(0)";
            }
        }

        // Fonctions section "showcase-website"
        
        if (window.scrollY + window.innerHeight/1.5 >= targetShowcase.offsetTop) {
            
            showcaseH2.style.opacity = "100%";
            showcaseH5.style.opacity = "100%";
            showcaseH6.style.opacity = "100%";
        }

        if (window.scrollY + window.innerHeight/2 >= targetShowcase.offsetTop) {
                
            for (i = 0; i < showcaseDivs.length; i++) {
                showcaseDivs[i].style.transform = "translateY(0)";
            }
        }
        
       
    });
}

