const music = new Audio("audio/arijit/bedardaya.mp3")


// TILL SONG 16


const songs = [
    {
        id: 1,
        songName: `Bedardaya<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/bedardaya.jpg",
        source: "audio/arijit/bedardaya.mp3"
    },
    {
        id: 2,
        songName: `Dhokha<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/dhokha.jpg",
        source: "audio/arijit/dhokha.mp3"
    },
    {
        id: 3,
        songName: `Iktara<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/iktara.jpg",
        source: "audio/arijit/iktara.mp3"
    },
    {
        id: 4,
        songName: `Dil Ko Maine Di Kasam<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/dil-ko-maine-di-kasam.jpg",
        source: "audio/arijit/dil-ko-maine-di-kasam.mp3"
    },
    {
        id: 5,
        songName: `Pachataoge<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/pachataoge.jpg",
        source: "audio/arijit/pachataoge.mp3"
    },
    {
        id: 6,
        songName: `Samjhawan <div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/samjhawan.jpg",
        source: "audio/arijit/samjhawan.mp3"
    },
    {
        id: 7,
        songName: `Tu Hi Yaar Mera<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/tu-hi-yaar-mera.jpg",
        source: "audio/arijit/tu-hi-yaar-mera.mp3"
    },{
        id: 8,
        songName: `Love Me Thoda Aur<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/love-me-thoda-aur.jpg",
        source: "audio/arijit/love-me-thoda-aur.mp3"
    },
    {
        id: 9,
        songName: `Phir Bhi Tuko Chahunga<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/phir-bhi-tumko-chahunga.jpg",
        source: "audio/arijit/phir-bhi-tumko-chahunga.mp3"
    },
    {
        id: 10,
        songName: `Tere Vaaste<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/tere-vaaste.jpg",
        source: "audio/arijit/tere-vaaste.mp3"
    },
    {
        id: 11,
        songName: `Phir Aur Kya Chahiye<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/phir-aur-kya-chahiye.jpg",
        source: "audio/arijit/phir-aur-kya-chahiye.mp3"
    },
    {
        id: 12,
        songName: `Heeriye<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/heeriye.jpg",
        source: "audio/arijit/heeriye.mp3"
    },    
    {
        id: 13,
        songName: `Lambiyaan Si Judaiyaan<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/lambiyaan-si-judaiyaan.jpg",
        source: "audio/arijit/lambiyaan-si-judaiyaan.mp3"
    },
    {
        id: 14,
        songName: `Tere Hawale<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/tere-hawale.jpg",
        source: "audio/arijit/tere-hawale.mp3"
    },
    {
        id: 15,
        songName: `Kesariya<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/kesariya.jpg",
        source: "audio/arijit/kesariya.mp3"
    },
    {
        id: 16,
        songName: `Sun Raha Hai Na Tu<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/sun-raha-hai-na-tu.jpg",
        source: "audio/arijit/sun-raha-hai-na-tu.mp3"
    },
    {
        id: 17,
        songName: `Ae Dil Hai Muskil<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/ae-dil-hai-muskil.jpg",
        source: "audio/arijit/ae-dil-hai-muskil.mp3"
    },
    {
        id: 18,
        songName: `Mann Mast Magan <div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/mann-mast-magan.jpg",
        source: "audio/arijit/mann-mast-magan.mp3"
    },
    {
        id: 19,
        songName: `Kabira<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/kabira.jpg",
        source: "audio/arijit/kabira.mp3"
    },
    {
        id: 20,
        songName: `Illahi<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/illahi.jpg",
        source: "audio/arijit/illahi.mp3"
    },
    {
        id: 21,
        songName: `Chaleya<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/chaleya.jpg",
        source: "audio/arijit/chaleya.mp3"
    },
    {
        id: 22,
        songName: `Agar Tum Saath Ho<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/agar-tum-saath-ho.jpg",
        source: "audio/arijit/agar-tum-saath-ho.mp3"
    },
    {
        id: 23,
        songName: `Kalank<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/kalank.jpg",
        source: "audio/arijit/kalank.mp3"
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
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
                            <div class="content">
                                ${songName}
                            </div>
    `
    search_results.appendChild(card)
});

let input = document.getElementById('input')

input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase()
    let items = search_results.getElementsByTagName('a')
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0]
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = 'flex'
        } else {
            items[index].style.display = 'none'
        }
        if (input.value == 0) {
            search_results.style.display = 'none'
        } else {
            search_results.style.display = ''
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
    let b = shuffle.innerHTML
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