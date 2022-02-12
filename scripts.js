const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

// var request = ne w XMLHttpRequest()
// request.open('GET', 'https://getpickuplines.herokuapp.com/lines/random', true)
// request.onload = function () {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)

                          fetch('https://getpickuplines.herokuapp.com/lines/random').then((response)=> {
                              return myElement.innerHTMLresponse.json()
                              myElement.innerHTML = response.json(response.data)
                          }).then((result) => {
                              console.log(result)
                          })


  
                    


// request.send()