const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//1
let threeLanguages = users.filter(user => {
    return user.languages.length >= 3
});
//let threeLanguages = users.filter((user) => user.languages.length > 2)
console.log(threeLanguages);


//2
let allEmails = users.map(user => {
    return user.email
});
console.log(allEmails);


//3
let totalYears = users.reduce((total, year) => {
    const result = year.yearsOfExperience
    return result + total
}, 0)
console.log(totalYears);
console.log(totalYears/users.length);

let longestEmail = users.reduce((short,long) => {
    const currentEmail = long.email;
    if(currentEmail.length > short.length){
        return currentEmail;
    }else{
        return short;
    }
},'');
console.log(longestEmail)


//5
let userNames = users.reduce((total,user,index,array) => {
    if(index === (array.length -1)){
        return total + `${user.name}.`
    }else {
        return total + `${user.name}, `
    }
},"Your instructors are: ");
console.log(userNames);


//bonus
let uniqueLang = users.reduce((langList, user) => {
    for (let lang of user.languages){
        if(!langList.includes(lang)){
            langList.push(lang);
        }
    }
    return langList;
}, []);


    console.log(uniqueLang)