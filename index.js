isLogin()

const getData = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '67fb182c67msh32674fa495b2f06p17d8e9jsncf1acdd21c21',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    //Search handler
    const search = document.getElementById('search').value
    
    if(!search) return document.getElementById('error').innerHTML = "No search was found"

    var res = ""
    
    try {
    //Fetching data from api
    res = await fetch(`https://spotify81.p.rapidapi.com/search?q=${search}&type=tracks&offset=0&limit=20&numberOfTopResults=5`, options)
    
    data = await res.json()

    songs = data.tracks

    document.getElementById('root').innerHTML = ""

    songs.forEach(result => {
        console.log(result.data.albumOfTrack)
        //Create div element id block
        const block = document.createElement('div')
        block.id = "block"
        const detailBlock = document.createElement('div')
        detailBlock.id = "detailBlock"
        //Getting data from api2
        songName = result.data.name
        img = result.data.albumOfTrack.coverArt.sources[0].url
        //songs details
        detail1 = result.data.albumOfTrack.name
        detail2 = result.data.artists.items[0].profile.name
        detail3 = millisToMinutesAndSeconds(result.data.duration.totalMilliseconds)
        //Placing data into element using DOM
        title = document.createElement('a')
        title.innerHTML = `<h3>${songName}</h3>`
        title.href = `https://open.spotify.com/track/${result.data.id}`
        
        detail = document.createElement('ul')
        detail.id = "details"
        detail.innerHTML = `<li><strong>Ablum</strong>: ${detail1}</li> <li><strong>Artist</strong>: ${detail2}</li> <li><strong>${detail3}</strong></li>`

        thumbnail = document.createElement('img')
        thumbnail.src = img

        detailBlock.appendChild(thumbnail)
        detailBlock.appendChild(detail)
        
        //append child into block div
        block.appendChild(title)
        block.append(detailBlock)

        //putting all the block div into root
        document.getElementById('root').appendChild(block)

    });
    } catch(err) {
        //Catching error
        document.getElementById('error').innerHTML = err
    }
}

function reload() {
    //reload the page
    document.location.reload()
}

let srollBtn = document.getElementById("scrollUp");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    srollBtn.style.display = "block";
  } else {
    srollBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function isLogin() {
  const userData = JSON.parse(localStorage.getItem('UsersLogin'))
  if(userData.isLogin == false) {
    document.getElementById('nav3').innerHTML = `<a href="http://127.0.0.1:5500/account/login.html">Login</a>`
    document.getElementById('nav4').innerHTML = `<a href="http://127.0.0.1:5500/account/register.html">Register</a>`
  } else {
    document.getElementById('nav4').innerHTML = `<a href="#" onclick="logout()">Logout</a>`
    document.getElementById('nav3').innerHTML = `<a>${userData.username}</a>`
  }
}

function logout() {
  const loginData = JSON.parse(localStorage.getItem('UsersLogin'))
  loginData.isLogin = false
  localStorage.setItem("UsersLogin", JSON.stringify(loginData));
  location.reload()
}
