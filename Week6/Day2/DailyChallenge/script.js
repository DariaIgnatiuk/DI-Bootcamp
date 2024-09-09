const postGif = (link) =>{
    html = `<div><img src=${link}><br>
    <button type="button" onClick="deleteGif(event)" >Delete</button></div>`;
    document.getElementById('gifs').innerHTML += html;
}

const deleteAll = (e) =>{
    document.getElementById('gifs').innerHTML = `<button type="button" onClick="deleteAll(event)" >Delete All</button>`;
}

const deleteGif = (e) =>{
    e.target.parentElement.style.display = 'none';
}

const addGIF = async (e) =>{
    e.preventDefault();
    let search = e.target.search.value;
    try {
        let res = await fetch(`https://api.giphy.com/v1/gifs/random?&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=${search}`);
        let data = await res.json();
        postGif(data.data.images.downsized.url);
        } 
    catch (error) {
              console.log(error);
        }
    
}