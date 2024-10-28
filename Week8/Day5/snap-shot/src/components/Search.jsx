import { useState, useEffect } from 'react';
import axios from 'axios'

const Search = ({searchRef}) => {
    const searchObject = searchRef.current.value
    const [photos, setPhotos] = useState([])
  const API_KEY = "XAwBBCokGAnE0srUbj8GYGmoso9VLQzGKLf5ln809tskgYUz2wJxSyJO";
  const searchInput = document.getElementById('searchInput'); 


  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': API_KEY
    }
  };

    const fetchImages = async() => {
        try {
          const response = await axios.get(`https://api.pexels.com/v1/search?query=${searchObject}&per_page=20`, config)
          setPhotos(response.data.photos)
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      } 
    
    useEffect(() => {
        searchInput.value = ''
        fetchImages()
    }, [])
    
    return (
        <div>
        {photos.map(photo=> {return(
            <img className='image'key={photo.id} src={photo.src.small} />
        )} )}
        </div>
    )
}

export default Search