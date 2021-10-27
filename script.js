var skill_icons = document.getElementsByClassName("skill_ico");
var skill_divs = document.getElementsByClassName("skill");



console.log(skill_divs);
console.log(skill_icons);

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