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
        //Getting data from api
        songName = result.data.name
        img = result.data.albumOfTrack.coverArt.sources[0].url
        //Placing data into element using DOM
        title = document.createElement('a')
        title.innerHTML = `<h3>${songName}</h3>`
        title.href = `https://open.spotify.com/track/${result.data.id}`
        
        thumbnail = document.createElement('img')
        thumbnail.src = img
        //append child into block div
        block.appendChild(title)
        block.appendChild(thumbnail)
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

let mybutton = document.getElementById("scrollUp");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
