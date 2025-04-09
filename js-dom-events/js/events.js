// console.log("This is separate js file");


// add onclick function
// Important : we will use sometimes
function makeTomato(){
    document.body.style.backgroundColor='tomato';
}

// option 2

const makeOrangeButton = document.getElementById('make-orange');
console.log(makeOrangeButton);
makeOrangeButton.onclick = makeOrange;
function makeOrange() {
        document.body.style.backgroundColor = 'orange';
}



// option 3

const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function() {
    document.body.style.backgroundColor = 'purple';
}
        
// option 4 
const makeGoldButton = document.getElementById('make-gold');
makeGoldButton.addEventListener('click', makeGold);

function makeGold() {
    document.body.style.backgroundColor = 'gold';
}

// option 4 another

const makeLightYellowButton = document.getElementById('make-light-yellow');
makeLightYellowButton.addEventListener('click', function makeLightYellow() {
    document.body.style.backgroundColor = 'lightyellow';
});


// option 4 another
const makeDarkGreenButton = document.getElementById('make-darkgreen');
makeDarkGreenButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'darkgreen';
});

// option 4 final
// Important : we will use this
document.getElementById('make-lightcyan').addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightcyan';
});

