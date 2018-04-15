
//requires the express library, so that I can use it leter. It's being put into variable called express
const express = require('express')
//use express() to create app
const app = express()


//give it my first route, path, or endpoints
//there are 2 arguments (all between the parentheses). 
//'/' => first argument is a string, which is the path of the URL that the user is requesting
//req,res => second argument is a function, which contains all the code that executes when the user hits that URL
//the variable req is the argument that contains all theinfo that comprises that client's request
//the variable res(respond) is the argument that you use to send back the response to the client

//express defines what's happening in the /kittens
// app.get('/kittens', (req, res) => {
// 	res.send('Popo!');
// })

// or in ES5 

// app.get('/'), function(req, res) {
// 		res.send('Hello World!');
// }


//this is like turning the key in your ignition 
//"fire up at port 3000. When you're done, fire up console.log"
app.listen(3000, () => console.log('Example app listening on port 3000'));


//get all kittens
// app.get('/kittens', (req, res) => {
// 	res.send('All kittens');
// })

// app.get('/kittens/:id', (req, res) => {
// 	res.send('Kittens with id');
// })

// app.get('/fuzzy', (req, res) => {
// 	res.send('all fuzzies');
// })

// app.get('/fuzzies/:id', (req, res) => {
// 	res.send('Fuzzies with id');
// })

// app.get('/kittens/fuzzies/:id', (req, res) => {
// 	res.send('Fuzzies with id');
// })

// app.get('/kittens/:id/fuzzies/:id', (req, res) => {
// 	res.send('Fuzzy Kittens with id'); 
// })

// app.get('/kittens/pianokitten', (req, res) => {
// 	res.send("<img src= 'https://i.ytimg.com/vi/E9U9xS4thxU/hqdefault.jpg'>"); 
// });


//Challenge 2:
const videos = [
    {id: 1, title: "America is the Greatest Country in the United States", url: "https://www.netflix.com/watch/80208273?trackId=13752289&tctx=0%2C0%2C"},
    {id: 2, title: "Micheal Che Matters", url: "https://www.netflix.com/watch/80049871?trackId=13752289&tctx=0%2C0%2C"},
    {id: 3, title: "Baby Cobra", url: "https://www.netflix.com/watch/80101493?trackId=13752290&tctx=1%2C1%2C"}
  ];

app.get('/videos', (request, response) => {
	// just send one response back, so videos won't die
    response.send(videos);
});

//return resource by id

app.get('/videos/:id', (request, response) => {
	//id is a string that comes from the URL, hopefully it's a number.
	let id = request.params.id;

	//find the object that has an id that matches the id in the url
	//this is minus 1 because it's looking for the index# not the id#
	let video = videos[id - 1];

	response.send(video);

});

app.get('/videos/:id/title/', (request, response) => {
	//id is a string that comes from the URL, hopefully it's a number.
	let id = request.params.id;

	//find the object that has an id that matches the id in the url
	//this is minus 1 because it's looking for the index# not the id#
	let video = videos[id - 1];

	response.send(video.title);

});

app.get('/videos/:id/url/', (request, response) => {
	//id is a string that comes from the URL, hopefully it's a number.
	let id = request.params.id;

	//find the object that has an id that matches the id in the url
	//this is minus 1 because it's looking for the index# not the id#
	let video = videos[id - 1];

	response.send(video.url);

});


// //Bonus:

// app.post('/new-video', (req, res) => {

// 	var stop;
// })

















