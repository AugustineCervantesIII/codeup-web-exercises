(function () {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
        //pipe used in '|' because its already separating the string in the array.
    var planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var newPlanetsArray = planetsArray.join('<br>');
    console.log(newPlanetsArray);

    // function returnList(arr){
    // var newList = "<ul>";
    // arr.forEach(function(element){
    //
    // }
    // })

    // var planetsList = '<ul>';
    // planetsArray.forEach(function(planet){
    //     planetsList += '<li>' + planet + '</li>';
    // });
    // planetsList += '</ul>';
    // document.getElementById('planets-list').innerHTML = planetsList;
    // in html <div id='planets-list'><div>




    //function functionName(parameter, parameter2){
    // return argument1 + - / argument2;
    //}

    function returnName(name){
        return name;
    }
    function returnGreeting(){
        return 'hello ' + returnName();
    }
    console.log(returnGreeting("John"));

    function doMath(callback, num1 , num2){
        return callback(num1, num2);
    }
    function add(num1, num2){
        return num1 + num2;
    }
    console.log(doMath(add, 2, 2))



})();
