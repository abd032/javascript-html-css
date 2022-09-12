let songIndex=1;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let gif =  document.getElementById('gif')
let masterSongName =  document.getElementById('masterSongName')
let myProgessBar = document.getElementById('myProgressBar')
let songItem = Array.from(document.getElementsByClassName('songItem'))
let songs = [
    {songName:"Deva Deva",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Kesariya",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Pasoori",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Waat Laga Denge",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Deva-Deva",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Kesariya",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Pasoori",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Waat Laga Denge",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    
]
songItem.forEach((element,i)=>{
element.getElementsByTagName('img')[0].src= songs[i].coverPath
element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName
})
//handl play pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0
    }
})

//listen to event
audioElement.addEventListener('timeupdate',()=>{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgessBar.value = progress;
})
myProgessBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgessBar.value * audioElement.duration)/100;
})


const makeAllPlays = () =>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
})

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex  = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0
        audioElement.play();
        gif.style.opacity=1
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex=1
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=1
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})