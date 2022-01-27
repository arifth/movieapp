import Movie from './Movie.js';
import React, {useEffect, useState} from 'react';


const App = () => 
{


	//disini kita akan melakukan fetch api data dari API TMDB org lalu return sbg json dan di console log 
	const [movie,setMovie]= useState([]);
	const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?api_key=f8a88a605d021d7add571e3ac9dec9aa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'; 
	const IMG_API =  null; 
	const SEARCH_API = null; 

	useEffect(() => {
		fetch(FEATURED_API)
			.then(res => res.json())
			.then(data =>{
				console.log(data)
				setMovie(data.results)
			})
			
	},[])

	return (
		<div>
			{movie.map((movies) => <Movie key={movies.id} data={movies} />)}
		</div>	
	);
}


export default App;
