'use strict';

//WALKTHROUGH
function wait(seconds){
    return new Promise(resolve => {
        setTimeout(resolve,seconds)
    });
}
wait(1000).then(() => console.log("You'll see this after 1 second"));
wait(2000).then(() => console.log("You'll see this after 2 seconds"));
wait(3000).then(() => console.log("You'll see this after 3 seconds"));


function waitVersionTwo(seconds){
    seconds = seconds * 1000;
    return new Promise(resolve => {
        setTimeout(() => {
            if(seconds > 1000){
                console.log("You'll see this after " + seconds/1000 + " seconds.")
            }else{
                console.log("You'll see this after " + seconds/1000 + " second.")
            }
        },seconds)
    });
}
waitVersionTwo(1);
waitVersionTwo(5);

// const wait = (num) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, num)
//     })
// }
//  wait(1000).then(() => console.log('You\'ll see this after 1 second'));
//  wait(2000).then(() => console.log('You\'ll see this after 2 second'));
//  wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


//unsuccessful
// const commits = (username) => {
//     fetch('https://api.github.com/users/${username}/events', {headers: {"Authorization": 'token ${GIT_KEY}'}})
//         .then(resp => resp.json())
//         .then(data = data.find(event => event.type === 'PushEvent'))
//         .then(event => event.created_at)
//         .then(date => console.log(date));
// }
// commits("AugustineCervantesIII")

//walkthrough
function getLastCommitDate(username){
    return fetch(`https://api.github.com/users/${username}/events`, {
        headers: {'Authorization': `token ${GITHUB_API_KEY}`}
    }).then(response => response.json())
        // we want to filter through PushEvents only
        .then(events => {
            return events.filter(event => event.type === "PushEvent")[0].created_at;
        });
}

getLastCommitDate('AugustineCervantesIII').then(date => {
    console.log(new Date(date).toDateString());
});