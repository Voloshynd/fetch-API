fetch('https://jsonplaceholder.typicode.com/posts', { 
  method: 'POST',
  body: JSON.stringify({name: 'Dmytro'}), // pryzjmuje jak string tak i obiekt 
  headres: {
    'Content-type': 'aplication/json'
  }// jaki konetent bedzie wyslany, przyjmuje obiekt 
})// robimy zapyt do pierwszej to do z servera, pcji to sa obiekt(metoda i body)
.then(response => response.json())// metoda response.json() przeksztalca json w js obiekt,  response.json() zwraca promise
  .then(json => console.log(json))