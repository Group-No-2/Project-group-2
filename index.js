const getData = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '67fb182c67msh32674fa495b2f06p17d8e9jsncf1acdd21c21',
            'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
        }
    };
    //Search handler
    const search = document.getElementById('search').value
    
    if(!search) return document.getElementById('error').innerHTML = "No search was found"

    var res = ""
    
    try {
    //Fetching data from api
    res = await fetch(`https://youtube-music1.p.rapidapi.com/v2/search?query=${search}`, options)
    
    data = await res.json()

    songs = data.result.songs

    document.getElementById('root').innerHTML = ""
    document.getElementById('result').innerHTML = `${songs.length} results was found (based on api)`

    songs.forEach(result => {
        //Create div element id block
        const block = document.createElement('div')
        block.id = "block"
        //Getting data from api
        songName = result.name
        img = result.thumbnail
        //Placing data into element using DOM
        title = document.createElement('h3')
        title.innerHTML = songName
        
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

