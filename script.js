const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'efc017cd4dmshdd262ce56236c90p16666djsnc4d09f565b55',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
    .then(response => response.json()) 
    .then(data => console.log(data))
    .catch(err => console.error(err));
