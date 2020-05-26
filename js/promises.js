'use strict';

//WALKTHROUGH
function wait(seconds){
    seconds = seconds * 1000;
    return new Promise(resolve => {

    });
}

const wait = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num)
    })
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


//unsuccessful
// const commits = (username) => {
//     fetch('https://api.github.com/users/${username}/events', {headers: {"Authorization": 'token ${GIT_KEY}'}})
//         .then(resp => resp.json())
//         .then(data = data.find(event => event.type === 'PushEvent'))
//         .then(event => event.created_at)
//         .then(date => console.log(date));
// }
// commits("Augustine.CervantesIII")

//walkthrough
function getLastCommitDate(username){
    return fetch('https://api.github.com/users/${username}/events', {
        headers: {'Authorization': 'token ${GITHUB_API_KEY}'}
    }).then(response => response.json())
        //we want to filter through push events only
        .then(events => {
            return events.filter(event => event.type === 'PushEvent')[0].created_at;
        });
}
getLastCommitDate('AugustineCervantes').then(date => {
    console.log(new Date(date).toDateString());
});