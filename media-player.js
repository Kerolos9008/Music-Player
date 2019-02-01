var originalArray = ["1.mp3","2.mp3","3.mp3","4.mp3"];
var repeatall = false;
var playingArray = [];
var shuffleFlag = false;
var trackWords = document.getElementsByTagName("li");
var sourceTag = document.getElementById("source");
var audioTag = document.getElementById("audio");
var btnRepeatall = document.getElementById("repeatAll");
var btnShuffle = document.getElementById("shuffle");
var currentPlaying = 0;

btnRepeatall.style.ba
unShuffle();
sourceTag.src = originalArray[currentPlaying];

for(var currTrack of trackWords)
{
    currTrack.addEventListener("click",function(e){
        currentPlaying = +e.target.getAttribute("id") - 1 ;
        sourceTag.src = originalArray[currentPlaying];
        audioTag.load();
        audioTag.play();
    });
}

btnRepeatall.addEventListener("click",function(e){
    if(repeatall === false)
    {
        repeatall =  true;
        btnRepeatall.style.backgroundColor = "blue";
    }
    else
    {
        repeatall = false;
        btnRepeatall.style.backgroundColor = "#009688";
    }

});

btnShuffle.addEventListener("click",function(){
    if(shuffleFlag === false)
    {
        shuffleFlag =  true;
        btnShuffle.style.backgroundColor = "blue";
        shuffle();
    }
    else
    {
        shuffleFlag = false;
        btnShuffle.style.backgroundColor = "#009688";
        unShuffle();
    }
});

audioTag.addEventListener("ended",function(){
    if(currentPlaying < 3)
    {
        currentPlaying++;
        sourceTag.src = playingArray[currentPlaying];
        audioTag.load();
        audioTag.play();
    }
    else
    {
        if(repeatall === true)
        {
            currentPlaying = 0;
            sourceTag.src = playingArray[currentPlaying];
            audioTag.load();
            audioTag.play();
        }
    }
    
});

function shuffle(){
    var currentIndex = playingArray.length, temporaryValue, randomIndex;
    while (0 !== currentIndex)
    {
        
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        
        temporaryValue = playingArray[currentIndex];
        playingArray[currentIndex] = playingArray[randomIndex];
        playingArray[randomIndex] = temporaryValue;

    }
    currentPlaying = 0;
    sourceTag.src = playingArray[currentPlaying];
    audioTag.load();
    audioTag.play();
}

function unShuffle(){
    for(var i =0;i<4;i++)
    {
        playingArray[i] = originalArray[i];
    }
}