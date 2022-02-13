// // fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
// // 	"method": "GET",
// // 	"headers": {
// // 		"x-rapidapi-host": "imdb8.p.rapidapi.com",
// // 		"x-rapidapi-key": "32dd381160msh99bb01610af0e66p1028e8jsn8974f40040df"
// // 	}
// // })
// fetch("https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "imdb8.p.rapidapi.com",
// 		"x-rapidapi-key": "32dd381160msh99bb01610af0e66p1028e8jsn8974f40040df"
// 	}
// })

// .then(response => response.json())
// .then(data => {
// 	const list = data.d
// 	list.map((item) => {
// 		const name = item.l;
// 		const poster = item.i.imageUrl;
// 		const movie = `<li><img src="${poster}"><h2>${name}</h2></li>`;
// 		document.querySelector(".movies").innerHTML += movie;

// 	})
// })

// .catch(err => {
// 	console.error(err);
// });


// const request = {
//     location: new google.maps.LatLng(51.5287352, -0.3817841),
//     radius: 5000,
//     type: ['restaurant']
// };

// const results = [];
// const places = document.getElementById('places');
// const service = new google.maps.places.PlacesService(places);

// service.nearbySearch(request, callback);

// const places = new google.maps.Map(document.getElementById('places'), {
//     center: {lat: 51.5287352, lng: -0.3817841},
//     zoom: 10
// });

// const callback = (response, status, pagination) => {
//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//         results.push(...response);
//     }

//     if (pagination.hasNextPage) {
//         setTimeout(() => pagination.nextPage(), 2000);
//     } else {
//         displayResults();
//     }
// }
// const displayResults = () => {
//     results.filter(result => result.rating)
//             .sort((a, b) => a.rating > b.rating ? -1 : 1)
//             .forEach(result => {
//                 places.innerHTML += `<li>${result.name} - ${result.rating}</li>`;
//             });
// }

