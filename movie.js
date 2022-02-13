// fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "imdb8.p.rapidapi.com",
// 		"x-rapidapi-key": "32dd381160msh99bb01610af0e66p1028e8jsn8974f40040df"
// 	}
// })
fetch("https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "32dd381160msh99bb01610af0e66p1028e8jsn8974f40040df"
	}
})

.then(response => response.json())
.then(data => {
	const list = data.d
	list.map((item) => {
		const name = item.l;
		const poster = item.i.imageUrl;
		const movie = `<li><img src="${poster}"><h2>${name}</h2></li>`;
		document.querySelector(".movies").innerHTML += movie;

	})
})

.catch(err => {
	console.error(err);
});