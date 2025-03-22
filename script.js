function diceroll() {
    return (Math.floor(Math.random() * 6) + 1);
}
const diceValues = document.querySelectorAll(".num");
const btn = document.querySelector("button");
const out = document.querySelector(".rolls");
const res = document.querySelector(".result");
const end = document.querySelector(".numbers");
let rolls = 0;
let logs = 0;
let done = [0, 0, 0, 0, 0, 0];
console.log(diceValues);
btn.addEventListener("click", () => {

    if (logs < 6) {
        const dice = diceroll();
        console.log(dice);
        rolls++;
        out.innerHTML = "Rolls : " + rolls + "<br> You rolled a " + dice;
        diceValues.forEach((val, ind) => {
            if (dice == ind + 1 && !done[ind]) {
                val.classList.add("active");
                logs++; done[ind] = 1;
            }
        });
    }
    if (logs == 6) {
        let comment='';
        if(Math.floor(100 * 6 / rolls)<30){
            comment="Damn you REALLY have a bad luck"
        }
        else if(Math.floor(100 * 6 / rolls)<50){
            comment="OK That score is normal, nice"
        }
        else if(Math.floor(100 * 6 / rolls)<80){
            comment="You really have a good luck damn";
        }
        else{
            comment="NAH THAT'S IMPOSSIBLE DUDE WTF <br>I'M JEALOUS"
        }
        end.classList.add("active");
        out.innerHTML = "Congrats you won!</p><br>"+ "<br>" + comment + "</p><p> Refresh the page to Play Again.";
        res.textContent = Math.floor(100 * 6 / rolls) + "/100";
        document.body.style.filter = 'invert(1)';
        document.body.style.background = 'black';
        btn.innerHTML="DON'T TOUCH THIS NOW";
        btn.onclick=()=>{
            window.open('https://youtu.be/xvFZjo5PgG0?si=L1LqSZ30lIxHk_Y7');
    }};
})
