// workout guide

// so do it in the front-end with typescript so your not waiting for an http response on the front end and it never comes because the user pauses or ends the workout

// we have an excersises array with excercise objects in order, contains exercise name, durations, rest periods and whatever else you want to display

// workout start now?
// time for workout start?

// start workout button is clicked:

// start workout immediately?
// start workout at specific time?
// enable text notifications?

// if workout is set for future time: screen shows workout begins at: specified time... or do a countdown.

// when its time to workout:

//list with all the exercise objects
let exercisesList = []

//create mock exercises for exerciseList
let ex1 = {
    name: 'PUSHUPS',
    duration: 2500,
    rest: 3000
};
exercisesList[0] = ex1;

let ex2 = {
    name: 'SQUATS',
    duration: 3000,
    rest: 2000
};
exercisesList[1] = ex2;

let ex3 = {
    name: 'PULLUPS',
    duration: 4500,
    rest: 3500
};
exercisesList[2] = ex3;

//bind the exercise name, duration, and rest to html elements displayed on the page
//variables that represent the bound html elements
// let mockHtmlName;
// let mockHtmlDuration;
// let mockHtmlRest;

//let fullWorkout = [];
let set = [];
let runningDuration = 1000;

//create the workout to run
for (let i = 0; i < exercisesList.length; i++){

    //If it's the first set of the entire exercise then start immediately (after 1 second).
    if(i == 0){
        setTimeout(function(){
            //mockHtmlName = exercisesList[i].name;
            console.log(exercisesList[i].name);
            //mockHtmlDuration = exercisesList[i].duration;
            console.log("exercise duration: " + exercisesList[i].duration);
            //mockHtmlRest = exercisesList[i].rest;
            console.log("rest period after exercise: " + exercisesList[i].rest);  
        }, 1000);

    //else every other set in the workout
    }else{

        runningDuration += (exercisesList[i-1].duration + exercisesList[i-1].rest);

        setTimeout(function(){  

            //display the current exercise's name and duration on the page with property binding
            //mockHtmlName = exercisesList[i].name;
            console.log(exercisesList[i].name);
            //mockHtmlDuration = exercisesList[i].duration;
            console.log("exercise duration: " + exercisesList[i].duration);
            //mockHtmlRest = exercisesList[i].rest;
            console.log("rest period after exercise: " + exercisesList[i].rest);

        }, runningDuration); //the timer should equal a running total of the previous iterations duration plus rest, so it waits that long until displaying the next set.  
    }
}
