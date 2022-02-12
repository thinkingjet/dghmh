// var request = ne w XMLHttpRequest()
// request.open('GET', 'https://getpickuplines.herokuapp.com/lines/random', true)
// request.onload = function () {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)
document.addEventListener("DOMContentLoaded", async function () {
  const data = await fetch("https://getpickuplines.herokuapp.com/lines/random");
  //" https://gnews.io/api/v4/search?q=weather&token=a38e7f1225ce41d278a77b285823c848"
  const json = await data.json();
  console.log(json);
});
/*(() => {
  fetch("https://getpickuplines.herokuapp.com/lines/random")
    .then((response) => response.json())
    .then((data) => console.log(data));
})();
// request.send()
*/ //
