if (document.title == "Nicolas BORDEAUX - Home") {
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
    var targetScroll = document.getElementById('mobile-app');
    var mobilesDivs = document.getElementsByClassName('flex-app')[0].getElementsByTagName('div');
    
    var targetOpacity = document.getElementsByClassName('grille-projects')[0].getElementsByTagName('a')[3];
    var mobileH2 = document.getElementById('mobile-app').getElementsByTagName('h2')[0];
    var mobileH5 = document.getElementById('mobile-app').getElementsByTagName('h5')[0];
    console.log(mobilesDivs);

    
    document.addEventListener('scroll', () => {
        if (window.scrollY >= targetScroll.getBoundingClientRect().top) {
            
            for (i = 0; i < mobilesDivs.length; i++) {
                mobilesDivs[i].style.transform = "translateY(0)";
            }
        }

        if (window.scrollY >= targetOpacity.getBoundingClientRect().top) {
            mobileH2.style.opacity = "100%";
            mobileH5.style.opacity = "100%";
        }
    })

    






}

