const music = new Audio("audio/jalraj/do-kinaare.mp3")


// TILL SONG 16


const songs = [
    {
        id: 1,
        songName: `Do Kinaare <div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/do-kinaare.jpg",
        source: "audio/jalraj/do-kinaare.mp3"
    },
    {
        id: 2,
        songName: `Chaand Ne Kaha<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/chaand-ne-kaha.jpg",
        source: "audio/jalraj/chaand-ne-kaha.mp3"
    },

    {
        id: 3,
        songName: `Sajni <div class="subtitle">Jalraj`,
        poster: "img/Posters/jalraj/sajni.jpg",
        source: "audio/jalraj/sajni.mp3"
    },
    {
        id: 4,
        songName: `Tum Jaisa<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/tum-jaisa.jpg",
        source: "audio/jalraj/tum-jaisa.mp3"
    },
    {
        id: 5,
        songName: `Hasi Ban Gaye<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/hasi-ban-gaye.jpg",
        source: "audio/jalraj/hasi-ban-gaye.mp3"
    },
    {
        id: 6,
        songName: `Has Ban Gaye 2.0<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/hasi-ban-gaye-2.0.jpg",
        source: "audio/jalraj/hasi-ban-gaye-2.0.mp3"
    },
    {
        id: 7,
        songName: `Lut Gaye<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/lut-gaye.jpg",
        source: "audio/audio/jalraj/lut-gaye.mp3"
    },
    {
        id: 8,
        songName: `Sajna X Aadat<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/sajna-aadat.jpg",
        source: "audio/jalraj/sajna-aadat.mp3"
    },
    {
        id: 9,
        songName: `Ilzaam<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/ilzaam.jpg",
        source: "audio/jalraj/ilzaam.mp3"
    },
    {
        id: 10,
        songName: `Kitna Haseeb Chehara<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/Kitna-haseen-chehara.jpg",
        source: "audio/jalraj/Kitna-haseen-chehara.mp3"
    },
    {
        id: 11,
        songName: `Humko Tere Siva <div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/humko-tere-siva.jpg",
        source: "audio/jalraj/humko-tere-siva.mp3"
    },
    {
        id: 12,
        songName: `Chhup Gaye Saare Nazare<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/chhup-gaye-saare-nazare.jpg",
        source: "audio/jalraj/chhup-gaye-saare-nazare.mp3"
    },
    {
        id: 13,
        songName: `Guzaarish<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/guzaarish.jpg",
        source: "audio/jalraj/guzaarish.mp3"
    },
    {
        id: 14,
        songName: `Zara Zara<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/zara-zara.jpg",
        source: "audio/jalraj/zara-zara.mp3"
    },
    {
        id: 15,
        songName: `Maan Mera<div class="subtitle">Jalraj </div>`,
        poster: "img/Posters/jalraj/mann-mera.jpg",
        source: "audio/jalraj/mann-mera.mp3"
    },
    {
        id: 16,
        songName: `Dheere Dheere Bol<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/dheere-dheere-bol.jpg",
        source: "audio/jalraj/dheere-dheere-bol.mp3"
    },
    {
        id: 17,
        songName: `Zindagi Ban Gaye Ho Tum<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/zindagi-ban-gaye-ho-tum.jpg",
        source: "audio/jalraj/zindagi-ban-gaye-ho-tum.mp3"
    },
    {
        id: 18,
        songName: `Zaroori Tha<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/zaroori-tha.jpg",
        source: "audio/jalraj/zaroori-tha.mp3"
    },
    {
        id: 19,
        songName: `Qaid<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/qaid.jpg",
        source: "audio/jalraj/qaid.mp3"
    },
    {
        id: 20,
        songName: `Sunn Zara<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/sunn-zara.jpg",
        source: "audio/jalraj/sunn-zara.mp3"
    }
]


const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105,105,105,.0)'
    })
}

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill')
        el.classList.remove('bi-pause-circle-fill')
        el.classList.remove('color')
    })
}





// SEARCH START

let search_results = document.getElementsByClassName('search-results')[0]

songs.forEach(element => {
    const { id, songName, poster } = element
    // console.log(id)
    let card = document.createElement('a')
    card.classList.add('card')
    card.href="#"+id;
    card.innerHTML = `
    <img src="${poster}" alt="">
                            <div class="content">
                                ${songName}
                            </div>
    `
    search_results.appendChild(card)
});

let input=document.getElementById('input')

input.addEventListener('keyup',()=>{
    let input_value=input.value.toUpperCase()
    let items=search_results.getElementsByTagName('a')
    for (let index = 0; index < items.length; index++) {
        let as=items[index].getElementsByClassName('content')[0]
        let text_value=as.textContent||as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value)>-1) {
            items[index].style.display='flex'
        } else {
            items[index].style.display='none'            
        }
        if (input.value==0) {
            search_results.style.display='none'
        } else {
            search_results.style.display=''            
        }
    }
    search_results.addEventListener('click',()=>{
        search_results.style.display='none';
        input.value=""
    })

})

// SEARCH END


play = document.getElementById('play')

play.addEventListener('click', () => {
    index = 1
    music.play()
    masterPlay.classList.add('bi-pause-circle-fill')
    masterPlay.classList.remove('bi-play-circle-fill')
})






let masterPlay = document.getElementById('masterPlay')
// let masterPause = document.getElementById('masterPause')
let wave = document.getElementById('wave')
// // alert("hello")

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play()
        wave.classList.add('active1')
        masterPlay.classList.remove('bi-play-circle-fill')
        masterPlay.classList.add('bi-pause-circle-fill')
    }
    else {
        music.pause();
        wave.classList.remove('active1')
        masterPlay.classList.add('bi-play-circle-fill')
        masterPlay.classList.remove('bi-pause-circle-fill')
    }
})




let index = 0;
let postar_master_play = document.getElementById("poster-master-play")
let download_music = document.getElementById("download-music")
let title = document.getElementById("title")

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.assertlog(index)
        music.src = `${songs[index - 1].source}`
        postar_master_play.src = `${songs[index - 1].poster}`
        music.play()
        wave.classList.add('active1')
        masterPlay.classList.remove('bi-play-circle-fill')
        masterPlay.classList.add('bi-pause-circle-fill')
        download_music.href = `${songs[index - 1].source}`
        // download_music.setAttribute('download',`${songs[index - 1].songName}`)

        title.innerHTML = `${songs[index - 1].songName}`
        makeAllBackground()
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,.1)'
        makeAllPlays()
        el.target.classList.remove('bi-play-circle-fill')
        el.target.classList.add('bi-pause-circle-fill')
        el.target.classList.add('color')

        // if (music.paused || music.currentTime <= 0) {
        //     music.play()
        //     wave.classList.add('active1')
        //     makeAllBackground()
        //     Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,.1)'
        //     makeAllPlays()
        //     el.target.classList.remove('bi-play-circle-fill')
        //     el.target.classList.add('bi-pause-circle-fill')
        //     el.target.classList.add('color')
        // }

        // console.log(index)
        // source=songs[index-1].source
        // console.log(source)
        // music.src=`${source}`

        // let SongTitles = songs.filter((els) => {
        //     return els.id = index
        // })
        // SongTitles.forEach(elss => {
        //     let { songName } = elss;
        //     title.innerHTML = songName
        // })
        // playListPause.addEventListener('click', () => {
        //     music.pause()
        //     wave.classList.remove('active1')
        //     masterPlay.classList.add('bi-play-circle-fill')
        //     masterPlay.classList.remove('bi-pause-circle-fill')
        // })
        return index;
    })
})


Array.from(document.getElementsByClassName('songName')).forEach((el) => {
    el.addEventListener('click', (ele) => {
        // music.pause()
        index = ele.target.id;
        // console.log(index)
        music.src = `${songs[index - 101].source}`
        postar_master_play.src = `${songs[index - 101].poster}`
        music.play()
        wave.classList.add('active1')
        masterPlay.classList.remove('bi-play-circle-fill')
        masterPlay.classList.add('bi-pause-circle-fill')
        download_music.href = `${songs[index - 101].source}`
        // download_music.setAttribute('download',`${songs[index - 1].songName}`)

        title.innerHTML = `${songs[index - 101].songName}`
        makeAllBackground()
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,.1)'
        makeAllPlays()
        ele.target.classList.remove('bi-play-circle-fill')
        ele.target.classList.add('bi-pause-circle-fill')
        ele.target.classList.add('color')
        return index;
    })
})

Array.from(document.getElementsByClassName('imgPlay')).forEach((el) => {
    el.addEventListener('click', (ele) => {
        index = ele.target.id;
        // console.log(index)
        music.src = `${songs[index - 101].source}`
        postar_master_play.src = `${songs[index - 101].poster}`
        music.play()
        wave.classList.add('active1')
        masterPlay.classList.remove('bi-play-circle-fill')
        masterPlay.classList.add('bi-pause-circle-fill')
        download_music.href = `${songs[index - 101].source}`
        // download_music.setAttribute('download',`${songs[index - 1].songName}`)

        title.innerHTML = `${songs[index - 101].songName}`
        makeAllBackground()
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,.1)'
        makeAllPlays()
        ele.target.classList.remove('bi-play-circle-fill')
        ele.target.classList.add('bi-pause-circle-fill')
        ele.target.classList.add('color')
        return index;
    })
})

let currentStart = document.getElementById('currentStart')
let currentEnd = document.getElementById('currentEnd')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementsByClassName('dot')[0]

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime
    let music_dur = music.duration
    let min1 = Math.floor(music_dur / 60)
    let sec1 = Math.floor(music_dur % 60)
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    // console.log(min1+':'+sec1)
    currentEnd.innerText = `${min1}:${sec1}`

    let min2 = Math.floor(music_curr / 60)
    let sec2 = Math.floor(music_curr % 60)
    if (sec2 < 10) {
        sec2 = `0${sec2}`
    }
    // console.log(min2+':'+sec2)
    currentStart.innerText = `${min2}:${sec2}`

    let progessBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progessBar
    // console.log(seek.value);
    let seekbar = seek.value;
    // console.log(seekbar)
    bar2.style.width = `${seekbar}%`
    dot.style.left = `${seekbar}%`

    // if (music_curr == music_dur) {
    //     nextSong()
    // }
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100
})


let vol_icon = document.getElementById('vol-icon')
let vol = document.getElementById('vol')
let vol_bar = document.getElementsByClassName('vol-bar')[0]
let vol_dot = document.getElementById('vol-dot')

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill')
        vol_icon.classList.remove('bi-volume-down-fill')
        vol_icon.classList.add('bi-volume-mute-fill')
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill')
        vol_icon.classList.add('bi-volume-down-fill')
        vol_icon.classList.remove('bi-volume-mute-fill')
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill')
        vol_icon.classList.remove('bi-volume-down-fill')
        vol_icon.classList.remove('bi-volume-mute-fill')
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`
    vol_dot.style.left = `${vol_a}%`
    music.volume = vol_a / 100
})

let back = document.getElementById('back')
let next = document.getElementById('next')

const backSong = () => {
    index -= 1
    if (index < 1) {
        index = (Array.from(document.getElementsByClassName('songItem')).length)
    }
    music.src = `${songs[index - 1].source}`
    postar_master_play.src = `${songs[index - 1].poster}`
    music.play()
    wave.classList.add('active1')
    masterPlay.classList.remove('bi-play-circle-fill')
    masterPlay.classList.add('bi-pause-circle-fill')
    title.innerHTML = `${songs[index - 1].songName}`
    download_music.href = `${songs[index - 1].source}`
    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,.1)'
    makeAllPlays()
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.remove('bi-play-circle-fill')
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.add('bi-pause-circle-fill')
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.add('color')
}

back.addEventListener('click', () => {
    backSong()
})

const nextSong = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index++
    }
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1
    }
    // index += 1
    music.src = `${songs[index - 1].source}`
    postar_master_play.src = `${songs[index - 1].poster}`
    music.play()
    wave.classList.add('active1')
    masterPlay.classList.remove('bi-play-circle-fill')
    masterPlay.classList.add('bi-pause-circle-fill')
    title.innerHTML = `${songs[index - 1].songName}`
    download_music.href = `${songs[index - 1].source}`
    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,.1)'
    makeAllPlays()
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.remove('bi-play-circle-fill')
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.add('bi-pause-circle-fill')
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.add('color')
}

next.addEventListener('click', () => {
    nextSong()
})












// SONG SCROLLBARR
let pop_song_left = document.getElementById('pop-song-left')
let pop_song_right = document.getElementById('pop-song-right')
let pop_song = document.getElementsByClassName('pop-song')[0]

// alert('hello')

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})

// ARTISt SCROLLBARR
let pop_art_left = document.getElementById('pop-art-left')
let pop_art_right = document.getElementById('pop-art-right')
let Artist_bx = document.getElementsByClassName('Artist-bx')[0]

pop_art_right.addEventListener('click', () => {
    Artist_bx.scrollLeft += 330;
})

pop_art_left.addEventListener('click', () => {
    Artist_bx.scrollLeft -= 330;
})

















Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


// music.play()


let shuffle = document.getElementsByClassName('shuffle')[0]
// shuffle.innerHTML="next"


shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;
    // alert(a)
    // alert(1)
    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat')
            shuffle.classList.remove('bi-music-note-beamed')
            shuffle.classList.remove('bi-shuffle')
            shuffle.innerHTML = 'repeat'
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat')
            shuffle.classList.remove('bi-music-note-beamed')
            shuffle.classList.add('bi-shuffle')
            shuffle.innerHTML = 'random'
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat')
            shuffle.classList.add('bi-music-note-beamed')
            shuffle.classList.remove('bi-shuffle')
            shuffle.innerHTML = 'next'
            break;

        default:
            break;
    }
})

music.addEventListener('ended', () => {
    let b=shuffle.innerHTML
    if (b == 'next') {
        nextSong()
    } else if (b == 'repeat') {
        repeatSong()
    }
    else if (b == 'random') {
        randomSong()
    }
})


const repeatSong = () => {
    index;
    music.src = `${songs[index - 1].source}`
    postar_master_play.src = `${songs[index - 1].poster}`
    music.play()
    wave.classList.add('active1')
    masterPlay.classList.remove('bi-play-circle-fill')
    masterPlay.classList.add('bi-pause-circle-fill')
    title.innerHTML = `${songs[index - 1].songName}`
    download_music.href = `${songs[index - 1].source}`
    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,.1)'
    makeAllPlays()
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.remove('bi-play-circle-fill')
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.add('bi-pause-circle-fill')
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.add('color')
}

const randomSong = () => {
    if (index == songs.length) {
        index = 1
    } else {
        // index++
        index = Math.floor((Math.random() * songs.length) + 1)
    }
    music.src = `${songs[index - 1].source}`
    postar_master_play.src = `${songs[index - 1].poster}`
    music.play()
    wave.classList.add('active1')
    masterPlay.classList.remove('bi-play-circle-fill')
    masterPlay.classList.add('bi-pause-circle-fill')
    title.innerHTML = `${songs[index - 1].songName}`
    download_music.href = `${songs[index - 1].source}`
    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgb(105,105,105,.1)'
    makeAllPlays()
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.remove('bi-play-circle-fill')
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.add('bi-pause-circle-fill')
    Array.from(document.getElementsByClassName('playListPlay'))[index - 1].classList.add('color')
}

let menu_list_active_button = document.getElementById('menu-list-active-button')
let menu_list_deactive_button = document.getElementById('menu-list-deactive-button')
let menu_side = document.getElementsByClassName('menu-side')[0]
let song_side = document.getElementsByClassName('song-side')[0]

menu_list_deactive_button.style.display = 'none'

menu_list_active_button.addEventListener('click', () => {
    menu_side.style.transform = "unset"
    menu_list_active_button.style.display = 'none'
    menu_list_deactive_button.style.display = 'flex'
})


song_side.addEventListener('click', () => {
    menu_side.style.transform = "translateX(-100%)"
    menu_list_active_button.style.display = 'flex'
    menu_list_deactive_button.style.display = 'none'
})

menu_list_deactive_button.addEventListener('click', () => {
    menu_side.style.transform = "translateX(-100%)"
    menu_list_active_button.style.display = 'flex'
    menu_list_deactive_button.style.display = 'none'
})