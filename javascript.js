const request = new XMLHttpRequest();
request.open(`GET`, `https://restcountries.com/v3.1/all`);
request.send(null);
request.onload = function(){
    const response = JSON.parse(request.responseText);
    console.log(response);


//display all the country flags in the console (day-4-task-2)
for (var country of response){
    const { flag } = country;
    console.log(flag);
}
//display all the country name in the console (day-4-task-3.1)
for (var country of response){
    const { name } = country;
    console.log(name);
}
//display all the country region in the console (day-4-task-3.2)
for (var country of response){
    const { region } = country;
    console.log(region);
}
//display all the country sub-region in the console (day-4-task-3.3)
for (var country of response){
    const { subregion } = country;
    console.log(subregion);
}
//display all the country population in the console (day-4-task-3.4)
for (var country of response){
    const { population } = country;
    console.log(population);
}
};
