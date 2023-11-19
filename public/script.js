const music = new Audio("audio/haaye-dard.mp3")


// TILL SONG 16


const songs = [
    {
        id: 1,
        songName: `Haaye Dard <div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/haaye-dard.jpg",
        source: "audio/haaye-dard.mp3"
    },
    {
        id: 2,
        songName: `Lo Aayi Barsaat<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/lo-aayi-barsaat.jpg",
        source: "audio/lo-aayi-barsaat.mp3"
    },

    {
        id: 3,
        songName: `Kesariya <div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/kesariya.jpg",
        source: "audio/arijit/kesariya.mp3"
    },
    {
        id: 4,
        songName: `Yaad Na Aaye<div class="subtitle">Akull</div>`,
        poster: "img/Posters/yaad-na-aaye.jpg",
        source: "audio/yaad-na-aaye.mp3"
    },
    {
        id: 5,
        songName: `Fake Love <div class="subtitle">Fukra Insaan</div>`,
        poster: "img/Posters/fake-love.jpg",
        source: "audio/fake-love.mp3"
    },
    {
        id: 6,
        songName: `Sajna X Aadat<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/sajna-aadat.jpg",
        source: "audio/jalraj/sajna-aadat.mp3"
    },
    {
        id: 7,
        songName: `Faasla <div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/faasla.jpg",
        source: "audio/faasla.mp3"
    },
    {
        id: 8,
        songName: `Laree Choote<div class="subtitle">Raico</div>`,
        poster: "img/Posters/laree-choote.jpg",
        source: "audio/laree-choote.mp3"
    },
    {
        id: 9,
        songName: `Pyaar Karte Ho Na <div class="subtitle">Stebin Ben</div>`,
        poster: "img/Posters/pyaar-karte-ho-na.jpg",
        source: "audio/pyaar-karte-ho-na.mp3"
    },
    {
        id: 10,
        songName: `Ek Tarfa<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/ek-tarfa.jpg",
        source: "audio/ek-tarfa.mp3"
    },
    {
        id: 11,
        songName: `Halki Si Barsaat <div class="subtitle">Munawar Faruqui</div>`,
        poster: "img/Posters/halki-si-barsaat.jpg",
        source: "audio/halki-si-barsaat.mp3"
    },
    {
        id: 12,
        songName: `Zara Zara<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/zara-zara.jpg",
        source: "audio/jalraj/zara-zara.mp3"
    },
    {
        id: 13,
        songName: `Mehrama<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/mehrama.jpg",
        source: "audio/mehrama.mp3"
    },
    {
        id: 14,
        songName: `Chaand Baaliyan<div class="subtitle">Aditya A</div>`,
        poster: "img/Posters/chaand-baaliyan.jpg",
        source: "audio/chaand-baaliyan.mp3"
    },
    {
        id: 15,
        songName: `Sajde Kiye Hain Laakhon<div class="subtitle">K K </div>`,
        poster: "img/Posters/sajde-kiye-hain-laakhon.jpg",
        source: "audio/sajde-kiye-hain-laakhon.mp3"
    },
    {
        id: 16,
        songName: `Dhoondhe Akhiyaan<div class="subtitle">Yasser & Altamash</div>`,
        poster: "img/Posters/dhoonde-akhiyaan.jpg",
        source: "audio/dhoonde-akhiyaan.mp3"
    },
    {
        id: 17,
        songName: `Dil Ko Karar Aaya <div class="subtitle">Neha Kakkar</div>`,
        poster: "img/Posters/dil-ko-karar.jpg",
        source: "audio/dil-ko-karar.mp3"
    },
    {
        id: 18,
        songName: `Log Kehte Hain Pagal<div class="subtitle">Rahul Ja</div>`,
        poster: "img/Posters/log-kahte-hain-paagal.jpg",
        source: "audio/log-kahte-hain-paagal.mp3"
    },
    {
        id: 19,
        songName: `Mujhe Peene Do<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/mujhe-pene-dojpg.jpg",
        source: "audio/mujhe-peene-do.mp3"
    },
    {
        id: 20,
        songName: `Tum Mere<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/tum-mere.jpg",
        source: "audio/tum-mere.mp3"
    },
    {
        id: 21,
        songName: `Teri Aankhon Mein <div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/teri-aankhon-mein.jpg",
        source: "audio/teri-aankhon-mein.mp3"
    },
    {
        id: 22,
        songName: `Baarish Lete Aana 2.0<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/baarish-lete-aana.jpg",
        source: "audio/baarish-lete-aana.mp3"
    },
    {
        id: 23,
        songName: `Mahiye Jinna Sona<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/mahiye-jinna-sona.jpg",
        source: "audio/mahiye-jinna-sona.mp3"
    },
    {
        id: 24,
        songName: `Do Kinaare<div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/do-kinaare.jpg",
        source: "audio/jalraj/do-kinaare.mp3"
    },
    {
        id: 25,
        songName: `Tu Hai Kahan<div class="subtitle">AUR</div>`,
        poster: "img/Posters/tu-hai-kahan.jpg",
        source: "audio/tu-hai-kahan.mp3"
    },
    {
        id: 26,
        songName: `Maana Ke Hum Yaar Nahin <div class="subtitle">Ayushman Khurana</div>`,
        poster: "img/Posters/maana-ke-ab-yaar-nahin.jpg",
        source: "audio/maana-ke-ab-yaar-nahin.mp3"
    },
    {
        id: 27,
        songName: `GUZAARISH <div class="subtitle">Jalraj</div>`,
        poster: "img/Posters/jalraj/guzaarish.jpg",
        source: "audio/jalraj/guzaarish.mp3"
    },
    {
        id: 28,
        songName: `Tum Jaisa<div class="subtitle">Jajraj</div>`,
        poster: "img/Posters/tum-jaisa.jpg",
        source: "audio/tum-jaisa.mp3"
    },
    {
        id: 29,
        songName: `Zindgi Bata De <div class="subtitle">Tony Kakkar </div>`,
        poster: "img/Posters/zindagi-bata-de.jpg",
        source: "audio/zindagi-bata-de.mp3"
    },
    {
        id: 30,
        songName: `Kabhi Jo Badal X<div class="subtitle">Let Me Down Slowly</div>`,
        poster: "img/Posters/let-me-down-slowly.jpg",
        source: "audio/let-me-down-slowly.mp3"
    },
    {
        id: 31,
        songName: `Tera Zikr <div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/tera-zikr.jpg",
        source: "audio/tera-zikr.mp3"
    },
    {
        id: 32,
        songName: `Dooniya Choor Doon<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/duniya-chorr-doon.jpg",
        source: "audio/duniya-chorr-doon.mp3"
    },
    {
        id: 33,
        songName: `Love Me Thoda Aur<div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/love-me-thoda-aur.jpg",
        source: "audio/arijit/love-me-thoda-aur.mp3"
    },
    {
        id: 34,
        songName: `Tera Hoone Laga Hoon<div class="subtitle">Stebin Ben</div>`,
        poster: "img/Posters/tera-hone-laga-hoon.jpg",
        source: "audio/tera-hone-laga-hoon.mp3"
    },
    {
        id: 35,
        songName: `Deewane Hum Nahi Nahi Hote<div class="subtitle">Aditya A</div>`,
        poster: "img/Posters/deewane-hum nahi-hote.jpg",
        source: "audio/deewane-hum nahi-hote.mp3"
    },
    {
        id: 36,
        songName: `Iktara <div class="subtitle">Arijit Singh</div>`,
        poster: "img/Posters/arijit/iktara.jpg",
        source: "audio/arijit/iktara.mp3"
    },
    {
        id: 37,
        songName: `Is Qadar<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/is-qadar.jpg",
        source: "audio/is-qadar.mp3"
    },
    {
        id: 38,
        songName: `Judaiyaan<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/judaiyaan.jpg",
        source: "audio/judaiyaan.mp3"
    },
    {
        id: 39,
        songName: `Pachataoge <div class="subtitle">Arijit Singh`,
        poster: "img/Posters/arijit/pachataoge.jpg",
        source: "audio/arijit/pachataoge.mp3"
    },
    {
        id: 40,
        songName: `Piya Re<div class="subtitle">Darshan Raval</div>`,
        poster: "img/Posters/piya-re.jpg",
        source: "audio/piya-re.mp3"
    },
    {
        id: 41,
        songName: `Lajawab 2<div class="subtitle">Taimaur</div>`,
        poster: "img/Posters/lajawab-2.jpg",
        source: "audio/lajawab-2.mp3"
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
let card = document.getElementsByClassName('card')[0]

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
    search_results.addEventListener('click', () => {
        search_results.style.display = 'none';
        input.value = ""
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