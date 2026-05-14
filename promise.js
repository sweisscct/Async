result = new Promise((resolve, reject) => {
    total = 0;
    for (i=0; i<10000000; i++) total += i**2;
    // this is a sucessful result - it acts like a return
    resolve(total);

    // this is a failure result
    reject(20);
    
});

// access the output from resolve
result
.then(result => {
    console.log(`this is the resolve result: ${result}`);
})
.catch(error => {
    console.log(`We have an error with: ${error}`);
})

console.log(result);

function hello() {
    return "Hello, class";
}

/*
API: Application Programming Interface
- Ways programs can talk to each other

REST API

https:// - communication protocol
api. - subdomain
open-meteo - domain name
.com - top level domain
/v1/forecast - API endpoint
? - start of the url query, everything in key=value pairs, separated by &
latitude=53.3331
&longitude=-6.2489
&hourly=temperature_2m,rain

*/

let weatherData = fetch("https://api.open-meteo.com/v1/forecast?latitude=53.3331&longitude=-6.2489&hourly=temperature_2m,rain");
// console.log(weatherData);

// weatherData
// .then(response => {
//     // HTTP Response
//     // console.log(response);

//     // console.log(response.json())
//     response.json().then(processedData => {
//         // console.log(processedData);
//         const hourlyData = processedData.hourly;
//         const timeData = hourlyData.time;
//         const tempData = hourlyData.temperature_2m;
//         const rainData = hourlyData.rain;
//         for (let time=0; time<24; time++) {
//             console.log(`Time: ${timeData[time]}, temp: ${tempData[time]}, rain: ${rainData[time]} `);
//         }
//     })
// })

// handles resolves
async function getWeatherData() {
    let weatherData = await fetch("https://api.open-meteo.com/v1/forecast?latitude=53.3331&longitude=-6.2489&hourly=temperature_2m,rain");
    let processedData = await weatherData.json();
    const hourlyData = processedData.hourly;
    const timeData = hourlyData.time;
    const tempData = hourlyData.temperature_2m;
    const rainData = hourlyData.rain;
    for (let time=0; time<24; time++) {
        console.log(`Time: ${timeData[time]}, temp: ${tempData[time]}, rain: ${rainData[time]} `);
    }    
}

getWeatherData();

async function getImageURI(url) {
    const image = document.getElementById("cool-image");
    let imageData = await fetch(url);
    let processedData = await imageData.blob();
    image.src = await URL.createObjectURL(processedData);
}


 getImageURI("https://i0.wp.com/www.sara-sees.com/wp-content/uploads/2016/04/killiney2-e1461493910573.jpg?w=1716");







/*

Repository Access Issue

You no longer have access to your assignment repository. Contact your teacher for support.


*/