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

weatherData
.then(response => {
    // HTTP Response
    // console.log(response);

    // console.log(response.json())
    response.json().then(processedData => {
        console.log(processedData);
    })
})