let tracks = [
    {   url : './audio/ACDC - Thunderstruck.mp3' ,
    cover : './cover/cover acdc.jpg', artist : 'ACDC' , title : 'Thunderstruck', id : 1},  
    {   url : './audio/Green Day - Boulevard of Broken Dreams.mp3' ,
    cover : './cover/cover american idiot.jpg', artist : 'GREEN DAY' , title : 'Boulevard Of Broken Dreams', id: 2},
    {   url : './audio/Guns n  Roses - Sweet Child O Mine.mp3' ,
    cover : './cover/cover apetite for descruction.jpg', artist : `GUNS N' ROSES` , title : `Sweet Child O' Mine`, id: 3},
    {   url : './audio/Maneskin - Amandoti.mp3' ,
    cover : './cover/cover teatro d ira.jpg', artist : 'MANESKIN' , title : 'Amandoti', id : 4},
    {   url : `./audio/Gloria Gaynor - I Will Survive.mp3` ,
    cover : './cover/cover love tracks.jpg', artist : 'GLORIA GAYNOR' , title : `I Will Survive`, id : 5},
    {   url : './audio/ACDC - Shoot to Thrill.mp3' ,
    cover : './cover/cover back in black.jpg', artist : 'ACDC' , title : 'Shoot to Thrill', id : 6},
    {   url : './audio/Green Day - Holiday.mp3' ,
    cover : './cover/cover american idiot.jpg', artist : 'GREEN DAY' , title : 'Holiday', id: 7},
    {   url : `./audio/Guns N Roses - Don't Damn Me.mp3` ,
    cover : './cover/cover use your illusion.jpg', artist : `GUNS N'ROSES` , title : `Don't Damn Me`, id: 8},
    {   url : './audio/Pink Floyd - Another Brick In The Wall.mp3' ,
    cover : './cover/cover the wall.jpg', artist : 'PINK FLOYD' , title : 'Another Brick In The Wall', id: 9},
    {   url : './audio/All American Rejects - Gives You Hell.mp3' ,
    cover : './cover/cover When The World Comes Down.jpg', artist : 'ALL AMERICAN REJECTS' , title : 'Gives You Hell', id: 10},
    {   url : './audio/Måneskin - Chosen.mp3' ,
    cover : './cover/cover chosen.jpg', artist : 'MANESKIN' , title : 'Chosen', id: 11},
    {   url : './audio/Placebo - Every Me And Every You.mp3' ,
    cover : `./cover/cover without you i'm nothing.jpg`, artist : 'PLACEBO' , title : 'Every Me And Every You', id: 12},
    {   url : './audio/Måneskin - Supermodel.mp3',
    cover : './cover/cover Supermodel.jpg', artist: 'MANESKIN',  title : 'Supermodel', id: 13},
    {   url : './audio/Queen - Fat Bottomed Girls.mp3',
    cover : './cover/cover jazz.jpg', artist: 'QUEEN',  title : 'Fat Bottomed Girls', id:14},
    {   url : './audio/Jeff Buckley - Grace.mp3' ,
    cover : './cover/cover grace.jpg', artist : 'JEFF BUCKLEY' , title : 'Grace', id:15},
    {   url : './audio/Muse - Hysteria.mp3' ,
    cover : './cover/cover absolution.jpg', artist : 'MUSE' , title : 'Hysteria', id:16},
    {   url : './audio/Guns N Roses- Dont Cry (Alt Version).mp3' ,
    cover : './cover/cover use your illusion 2.jpg', artist : `GUNS N' ROSES` , title : `Don't Cry (Alt)`, id:17},
    {   url : './audio/Omnia - Free Ra Huri.mp3' ,
    cover : './cover/cover Musick and Poëtree.jpg', artist : 'OMNIA' , title : 'Free Ra Huri', id: 18},
    {   url : './audio/Guns N Roses - Paradise City.mp3' ,
    cover : './cover/cover apetite for descruction.jpg', artist : `GUNS N' ROSES` , title : 'Paradise City', id:19},
    {   url : './audio/Elton John - Rocket Man.mp3' ,
    cover : './cover/Cover Honky Chateau.jpg', artist : 'ELTON JOHN' , title : 'Rocket Man', id:20},
    {   url : `./audio/Red Hot Chili Peppers - Shes Only 18.mp3` ,
    cover : './cover/cover stadium arcadium.jpg', artist : 'RHCP' , title : `She's Only 18`, id:21},
    {   url : `./audio/Slash, Derek Sherinian, Billy Idol - In the Summertime!.mp3` ,
    cover : './cover/cover in the summertime.jpg', artist : 'SLASH, BILLY IDOL' , title : `In the Summertime`, id:22},
    {   url : './audio/Placebo - Running Up That Hill.mp3' ,
    cover : './cover/cover Sleeping with Ghosts.jpg', artist : 'PLACEBO' , title : 'Running Up That Hill', id:23},
    {   url : './audio/Maneskin - I Wanna Be Your Slave.mp3' ,
    cover : './cover/cover teatro d ira.jpg', artist : 'MANESKIN' , title : `I Wanna Be Your Slave`, id:24},
    {   url : `./audio/4 Non Blondes - What's Up .mp3` ,
    cover : './cover/cover bigger.jpg', artist : '4 NON BLONDES' , title : `What's Up`, id:25},
    {   url : './audio/Guns n Roses - Dont Cry.mp3' ,
    cover : './cover/cover use your illusion.jpg', artist : `GUNS N' ROSES` , title : `Don't Cry`, id:26},
    {   url : './audio/Måneskin - Coraline.mp3' ,
    cover : './cover/cover teatro d ira.jpg', artist : 'MANESKIN' , title : 'Coraline', id:27},
    {   url : './audio/Beatles - Let It Be.mp3' ,
    cover : './cover/cover Let It Be.jpg', artist : 'BEATLES' , title : 'Let It Be', id:28},
    {   url : './audio/David Bowie - Heroes Lyrics.mp3' ,
    cover : './cover/cover heroes.jpg', artist : 'DAVID BOWIE' , title : 'Heroes', id:29},
    {   url : './audio/Green Day - Stray Heart.mp3' ,
    cover : './cover/cover ¡dos!.jpg', artist : 'GREEN DAY' , title : 'Stray Heart', id:30},
    {   url : './audio/Kate Bush - Running Up That Hill (A Deal With God).mp3' ,
    cover : './cover/cover hunds of love.jpg', artist : 'KATE BUSH' , title : 'Running Up That Hill (A Deal With God)', id:31},
    {   url : 'audio/Pink Floyd - Comfortably Numb.mp3' ,
    cover : './cover/cover the wall.jpg', artist : 'PINK FLOYD' , title : 'Comfortably Numb', id:32},
    {   url : 'audio/Litfiba - Fata Morgana.mp3' ,
    cover : './cover/cover terremoto.jpg', artist : 'LITFIBA' , title : 'Fata Morgana', id:33},
    {   url : './audio/Red Hot Chili Peppers - Tell Me Baby.mp3' ,
    cover : './cover/cover stadium arcadium.jpg', artist : 'RHCP' , title : 'Tell Me Baby', id:34},
    {   url : './audio/Queen - Bohemian Rhapsody.mp3' ,
    cover : './cover/cover a night at the opera.jpg', artist : 'QUEEN' , title : 'Bohemian Rhapsody', id:35},
    {   url : './audio/Green Day - Wake Me Up When September Ends.mp3' ,
    cover : './cover/cover american idiot.jpg', artist : 'GREEN DAY' , title : 'Wake Me Up When September Ends', id:36},
    {   url : './audio/Red Hot Chili Peppers - Dani California.mp3' ,
    cover : './cover/cover stadium arcadium.jpg', artist : 'RHCP' , title : 'Dani California', id:37},
    {   url : './audio/Guns N Roses - November Rain.mp3' ,
    cover : './cover/cover use your illusion.jpg', artist : `GUNS N' ROSES` , title : 'November Rain', id:38},
    {   url : './audio/Green Day - 21 Guns.mp3' ,
    cover : './cover/cover 21st Century Breakdown.jpg', artist : 'GREEN DAY' , title : '21 Guns', id:39},
    {   url : `./audio/Queen - Don't Stop Me Now.mp3` ,
    cover : './cover/cover jazz.jpg', artist : 'QUEEN' , title : `Don't Stop Me Now`, id:40},
    {   url : './audio/Red Hot Chili Peppers - Scar Tissue.mp3' ,
    cover : './cover/cover californication.jpg', artist : 'RHCP' , title : 'Scar Tissue', id:41},
    {   url : `./audio/Guns n Roses - Knockin' on Heaven's Door.mp3` ,
    cover : './cover/cover use your illusion 2.jpg', artist : `GUNS N' ROSES` , title : `Knockin' on Heaven's Door`, id:42},
    {   url : `./audio/Rolling Stones - Sympaty For The Devil.mp3` ,
    cover : './cover/cover Gimme Shelter.jpg', artist : `ROLLING STONES` , title : `Sympaty For The Devil`, id:43},
    {   url : './audio/Måneskin - Vent Anni.mp3' ,
    cover : './cover/cover teatro d ira.jpg', artist : 'MANESKIN' , title : `Vent' Anni`, id:44},
    {   url : './audio/Red Hot Chili Peppers - Stadium Arcadium.mp3' ,
    cover : './cover/cover stadium arcadium.jpg', artist : 'RHCP' , title : 'Stadium Arcadium', id:45},
    {   url : '/audio/Nirvana - Smells Like Teen Spirit.mp3' ,
    cover : './cover/cover nevermind.jpg', artist : 'NIRVANA' , title : ' Smells Like Teen Spirit', id:46},
    {   url : './audio/Maneskin - Torna A Casa.mp3' ,
    cover : './cover/cover il ballo della vita.jpg', artist : 'MANESKIN' , title : `Torna A Casa`, id:47},
    {   url : './audio/Queen - Radio Ga Ga.mp3' ,
    cover : './cover/cover the works.jpg', artist : 'QUEEN' , title : 'Radio Ga Ga', id:48},
    {   url : './audio/Green Day - American Idiot.mp3' ,
    cover : './cover/cover american idiot.jpg', artist : 'GREEN DAY' , title : 'American Idiot', id:49},    
    {   url : 'audio/Pink Floyd - Wish You Were Here.mp3',
    cover : './cover/cover whish you where here.jpg', artist : 'PINK FLOYD' , title : 'Whish You Where Here', id:50},
    {   url : '/audio/Green Day - Time of Your Life(Good Riddance).mp3' ,
    cover : './cover/cover nimrod.jpg', artist : 'GREEN DAY' , title : 'Time Of Your Life (Good Riddance)', id:51},    
    {   url : './audio/Kiss - Rock and Roll all Night.mp3' ,
    cover : './cover/cover dressed to kill.jpg', artist : 'KISS' , title : 'Rock And Roll All Night', id:52},
    {   url : './audio/Rolling Stones - (I Cant Get No) Satisfaction.mp3' ,
    cover : './cover/cover Gimme Shelter.jpg', artist : 'ROLLING STONES' , title : '(I Cant Get No) Satisfaction', id:53},
    {   url : './audio/Kiss - Detroit Rock City.mp3' ,
    cover : './cover/cover destroyer.jpg', artist : 'KISS' , title : 'Detroit Rock City', id:54},
    {   url : './audio/Rolling Stones - Start Me up.mp3' ,
    cover : './cover/cover start me up.jpg', artist : 'ROLLING STONES' , title : 'Start Me Up', id:55},
    {   url : './audio/Kiss - I Was Made For Loving You.mp3' ,
    cover : './cover/cover dynasty.jpg', artist : 'KISS' , title : 'I Was Made For Loving You', id:56},
    {   url : './audio/Joan Jett - I Hate Myself For Loving You.mp3' ,
    cover : './cover/cover up your alley.jpg', artist : 'JOAN JETT' , title : 'I Hate Myself For Loving You', id:57},
    {   url : './audio/Red Hot Chili Peppers - Snow (Hey-oh).mp3' ,
    cover : './cover/cover stadium arcadium.jpg', artist : 'RHCP' , title : 'Snow (Hey-oh)', id:58},
    {   url : './audio/Manesktin - The Loneliest.mp3' ,
    cover : './cover/cover rush.jpg', artist : 'MANESKIN' , title : 'The Loneliest', id:59},
    {   url : './audio/Queen - Under Pressure.mp3' ,
    cover : './cover/cover hot space.jpg', artist : 'QUEEN' , title : 'Under Pressure', id:60},
    {   url : './audio/Rolling Stones - Gimme Shelter.mp3' ,
    cover : './cover/cover Gimme Shelter.jpg', artist : 'ROLLING STONES' , title : 'Gimme Shelter', id:61},
    {   url : `./audio/Joan Jett - I Love Rock n Roll.mp3` ,
    cover : './cover/cover I love rock n roll.jpg', artist : 'JOAN JETT' , title : `I Love Rock 'N Roll`, id:62},
    {   url : `./audio/The Doors - Roadhouse Blues.mp3` ,
    cover : './cover/cover morrison hotel.jpg', artist : 'THE DOORS' , title : `Roadhouse Blues`, id:63},
    {   url : `./audio/Litfiba - L'impossibile.mp3` ,
    cover : './cover/cover eutopia.jpeg', artist : 'LITFIBA' , title : `L'impossibile`, id:64},
    {   url : `./audio/Jets - Are You Gonna Be My Girl.mp3` ,
    cover : './cover/cover get born.jpg', artist : 'JET' , title : `Are You Gonna Be My Girl`, id:65},
    {   url : `./audio/Soundgarden - Black Hole Sun.mp3` ,
    cover : './cover/cover superunknown.jpg', artist : 'SOUNDGARDEN' , title : `Black Hole Sun`, id:66},
    {   url : `./audio/Ramones - Blitzkrieg Bop.mp3` ,
    cover : './cover/cover havana affair.jpg', artist : 'RAMONES' , title : `Blitzkrieg Bop`, id:67},
    {   url : `./audio/Hole - Celebrity Skin.mp3` ,
    cover : './cover/cover celebrity skin.jpg', artist : 'HOLE' , title : `Celebrity Skin`, id:68},
    {   url : `./audio/Garbage - I Think Im Paranoid.mp3` ,
    cover : './cover/cover version 2.0.jpg', artist : 'GARBAGE' , title : `I Think I'm Paranoid`, id:69},
    {   url : `./audio/Mountain - Mississippi Queen.mp3` ,
    cover : './cover/cover climping!.jpg', artist : 'MOUNTAIN' , title : `Mississippi Queen`, id:70},
    {   url : `./audio/Beastie Boys - Sabotage.mp3` ,
    cover : './cover/cover sabotage.jpg', artist : 'BEASTIE BOYS' , title : `Sabotage`, id:71},
    {   url : `./audio/Weezer - Say it aint so.mp3` ,
    cover : './cover/cover weezer.jpg', artist : 'WEEZER' , title : `Say it ain't so`, id:72},
    {   url : `./audio/Bon Jovi -Wanted Dead Or Alive.mp3` ,
    cover : './cover/cover Slippery When Wet.jpg', artist : 'BON JOVI' , title : `Wanted Dead Or Alive`, id:73},
    {   url : './audio/U2 - I Still Havent Found What Im Looking For.mp3' ,
    cover : './cover/cover the joshua three.jpg', artist : 'U2' , title : `I Still Haven't Found What I'm Looking For`, id:74},
    {   url : './audio/Måneskin - Gossip.mp3' ,
    cover : './cover/cover teatro d ira.jpg', artist : 'MANESKIN' , title : 'Gossip', id:75},
    {   url : './audio/Maneskin - Zitti E Buoni.mp3' ,
    cover : './cover/cover teatro d ira.jpg', artist : 'MANESKIN' , title : 'Zitti E Buoni', id:76},
]

/* global */
let playing = false;
let currentTrack = 0;
let totalTracks = tracks.length;
let random = false;

/* selectors */
const playlistSidebar = document.querySelector('.sidebar-playlist');
const playlistBtn = document.querySelector('.fa-headphones');

const searchSidebar = document.querySelector('.search-playlist');
const searchBtn = document.querySelector('.fa-napster');

const title = document.querySelector('.title');
const artist = document.querySelector('.artist');
const songCover = document.querySelector('.song-cover');

const playBtn = document.querySelector('.fa-circle-play');
const pauseBtn = document.querySelector('.fa-circle-pause');

let track = document.querySelector('#track');

const nextBtn = document.querySelector('.fa-chevron-right');
const prevBtn = document.querySelector('.fa-chevron-left');

const currentTime = document.querySelector('.current-time');
const timeLeft = document.querySelector('.time-left');
const currentBar = document.querySelector('.song-current');
let progressBar = document.querySelector('.song-length');
const imgContainer = document.querySelector('.img-container');

const shuffleBtn = document.querySelector('.fa-repeat');


/* listeners */
playlistBtn.addEventListener('click', openPlaylist);
searchBtn.addEventListener('click', openSearch);
playBtn.addEventListener('click', play);
pauseBtn.addEventListener('click', play);
nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);
shuffleBtn.addEventListener('click', randomPlay);
progressBar.addEventListener('click', setProgress);
track.addEventListener('ended', next);



/* inners */
title.innerText = tracks[0].title;
artist.innerText = tracks[0].artist;

/* functions */

function openPlaylist() {
    playlistSidebar.classList.toggle('open-playlist')
}

function openSearch() {
    searchSidebar.classList.toggle('open-search')
}

function play() {
    if (!playing) {
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
        imgContainer.classList.add('pulse-accent');
        track.play();
        playing = true;
    } else {
        playBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
        imgContainer.classList.remove('pulse-accent');
        track.pause();
        playing = false;
    }
}

function next() {
    if (!random) {
        currentTrack++
        checkSongWork();
    } else {
        currentTrack = [Math.floor(Math.random() * tracks.length)];
        checkSongWork();
    }

    if(currentTrack > tracks.length -1) currentTrack = 0;

    changeTrackDetails();
    controlPlaying();
}

function prev() {
    if (!random) {
        currentTrack--
        checkSongWork();
    } else {
        currentTrack = [Math.floor(Math.random() * tracks.length)]
        checkSongWork();
    }

    if (currentTrack < 0) currentTrack = tracks.length -1

    changeTrackDetails();
    controlPlaying();
}

function controlPlaying() {
    if (playing) {
        playing = false;
        play()
    }
}

function changeTrackDetails() {
    title.innerText = tracks[currentTrack].title;
    artist.innerText = tracks[currentTrack].artist;
    songCover.src = tracks[currentTrack].cover;
    track.src = tracks[currentTrack].url;
}

function randomPlay() {
    if (!random) {
        shuffleBtn.classList.add('random-btn-shadow');
        random = true;
    } else {
        shuffleBtn.classList.remove('random-btn-shadow');
        random = false;
    }
}

function populatePlaylistSidebar(array) {
    let wrapper = document.querySelector('.sidebar-playlist');
    array.forEach((track, i)=>{
        let card = document.createElement('div');
        card.classList.add('sidebar-card');
        if (i== 0) card.classList.add('active');
        card.innerHTML = 
        `
        <div class="card-img-container">
            <img src="${track.cover}" alt="cover">
        </div>
        <div class="track-data">
            <h1 class="sidebar-title tc_white">${track.title}</h1>
            <h5 class="sidebar-artist tc_white">${track.artist}</h5>
        </div>
        <div class="commands">
                <i data-track="${track.id -1}" class="fa-solid fa-circle-play pointer sidebar-play tc_sec"></i>
                <i class="fa-solid fa-circle-pause pointer sidebar-pause tc_accent"></i>
        </div>
        `;
        wrapper.appendChild(card);
    })

    let playBtns = document.querySelectorAll('.sidebar-play');
    playBtns.forEach(btn=>btn.addEventListener('click', ()=>{
        let selectedTrack = btn.getAttribute('data-track');
        currentTrack = selectedTrack;
        changeTrackDetails();
        changePlaylistActive();
        sidebarsRemove();
        if(playing ){
            play()
        }
        if (!playing) {
            play()
        }        
    }))
}

function sidebarsRemove() {
    playlistSidebar.classList.remove('open-playlist');
}

function changePlaylistActive(){
    let trackListCards = document.querySelectorAll('.sidebar-card');
    trackListCards.forEach((card, index)=>{
        if(index == currentTrack){
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    })
}

function setProgress(e) {
    let width = this.clientWidth;
    let clickX = e.offsetX;
    let duration = track.duration;
    
    track.currentTime = (clickX / width) * duration;
    
}

/* global functions */
document.addEventListener('keydown', (ev)=>{
    if (ev.code == 'Space') play();
    if (ev.code == 'ArrowRight') next();
    if (ev.code == 'ArrowLeft') prev();
})

setInterval(() => {
    timeLeft.innerText = formatTime(track.duration - track.currentTime);
    currentTime.innerText = formatTime(track.currentTime);
    const progress = (track.currentTime / track.duration) * 100;
    currentBar.style.width = `${progress}%`;
}, 900);

function formatTime(sec){
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec - minutes * 60);
    if(seconds <10){
        seconds = `0${seconds}`;
    }
    return `${minutes}.${seconds}`;
}
function checkSongWork() {
    setTimeout(function() {
        if (timeLeft.textContent == 'NaN.NaN' || currentTime.textContent == 'NaN.NaN') {
            next();
        }
    }, 4000);
}

populatePlaylistSidebar(tracks);
