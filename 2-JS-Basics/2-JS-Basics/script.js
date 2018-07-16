//Lecture: variables
/* var name = "Andre";
console.log(name);

var lastName = "Carvalho";
console.log(lastName);

var age = 24;
console.log(age); */

// Data types are  primitives not objects
// number, string, Boolean. Undefined, Null
//'cause o f ynamic typing we do not need to define the data types '
// var fullAge = true;
// console.log(fullAge);

//Lecture: Variable 2
/*var name = 'André';
var age = 24;
var job, isMarried;

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married ? ' + isMarried + '.');

age = 'twenty four';
job = 'it';
console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married ? ' + isMarried + '.');

var lastName = prompt('what\'s your last name ?');
alert( 'Your last Name is ' + lastName); */

//Lecture 11 : Operators

/* var ageJohn =30;
var ageMark = 30;
ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn *= 2;
console.log(ageJohn); */

//Lecture 12: if/else statements
/*
var name = 'andre';
var age = 26;
var isMarried = false;
if (isMarried){
        console.log(name + ' is married!');

}else {
        console.log(name + ' will hopefully marry soon :)');
}


//Lecture 13 : if and Boolean values


var job = 'teacher';

job = prompt('what does andre do ?');

switch (job){
        case 'teacher':
           console.log('andre teaches kids');
           break;
        case 'driver':
           console.log('andre é driver in Angola');
           break;
        default:
           console.log('andre does something');
}


var player1Age, player2Age, Player1Height, Player2Height, player3Age,
Player3Height;
player1Age = prompt('What\'s the age of player 1');
player1Height = prompt('What\'s the Height of player 1');

//player 2
player2Age = prompt('What\'s the age of player 2');
player2Height = prompt('What\'s the Height of player 2');

//player 3
player3Age = prompt('What\'s the age of player 3');
player3Height = prompt('What\'s the Height of player 3');

//logging results
console.log('the age of player 1 is ' + player1Age + ' and the height is ' + player1Height + ' cm');
console.log('the age of player 2 is ' + player2Age + ' and the height is ' + player2Height + ' cm');
console.log('the age of player 3 is ' + player3Age + ' and the height is ' + player3Height + ' cm');

var scorePlayer1 = player1Height + player1Age * 5;
var scorePlayer2 = player2Height + player2Age * 5;
var scorePlayer3 = player3Height + player2Age * 5;

console.log('player 1 scored ' + scorePlayer1);
console.log('player 2 scored ' + scorePlayer2);
console.log('player 3 scored ' + scorePlayer3);

if (scorePlayer1 > scorePlayer2 && scorePlayer1 > scorePlayer3) {
        console.log('The Winner is player 1 scored ' + scorePlayer1);
} else if (scorePlayer2 > scorePlayer1 && scorePlayer2 > scorePlayer3) {
        console.log('The Winner is player 2  scored ' + scorePlayer2);
} else if (scorePlayer3 > scorePlayer1 && scorePlayer3 > scorePlayer2) {
        console.log('The Winner is player 3  scored ' + scorePlayer3);

        } else {
        console.log('There is draw');

}
/*
var winner = prompt('according to the scoring who won player 1 or 2 ?');
if (winner === 'player 1') {
        console.log('The Winner is player 1');
}else if (winner === 'player 2') {
        console.log('The winner is player 2')

}

//Lecture:Functions


function calculateAge(yearOfBirth){
        var age = 2018 - yearOfBirth;
        return age;
        console.log(age);
}

var ageAndre = calculateAge(1993);
var ageGabi = calculateAge(1991);
var ageTety = calculateAge(1992);
// console.log(ageAndre);


function yearsUntilRetirement(name, year) {
        var age = calculateAge(year);
        var retirement = 45 - age;

        if (retirement >= 0) {
                console.log(name + ' retires in ' + retirement + ' years.');
        }else {
                console.log(name + ' is already retired. ')
        }
}

yearsUntilRetirement('Andre', 1993);
yearsUntilRetirement('Gabi', 1991);
yearsUntilRetirement('Tety', 1992);



// Lecture 18 : Arrays
var names = ['Andre', 'Gabi', 'Tety'];
var age = new Array(1993, 1991, 1992);

names[1] = 'Bebo';
console.log(names[1]);
names.push('cool');
//unshift
//pop
//shift
//indexOf


if (names.indexOf('Santos') === -1) {
        console.log('there is not this name');

}

// lecture 19:Objects
var andre = {
        name:'Andre',
        lastName:'Carvalho',
        yearOfBirth:1993,
        job:'teacher',
        isMarried:false
};
console.log(andre);
console.log(andre.name);

var x = 'job';

console.log(andre[x]);

andre.lastName = 'Menezes';

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Mirror';
jane['job'] = 'retired';

console.log(jane);

//v1.0

var andre = {
        name:'Andre',
        lastName:'Carvalho',
        yearOfBirth:1993,
        job:'teacher',
        isMarried:false,
        family:['Antonia', 'Toni','Eulalia'],
        calculateAge: function(){
                return 2018 - this.yearOfBirth;
        }
};

//console.log(andre.calculateAge(1993));
console.log(andre.calculateAge());
var age = andre.calculateAge();
andre.age = age;

console.log(andre);
//v2.0
var andre = {
        name:'Andre',
        lastName:'Carvalho',
        yearOfBirth:1993,
        job:'teacher',
        isMarried:false,
        family:['Antonia', 'Toni','Eulalia'],
        calculateAge: function(){
                this.age = 2016 - this.yearOfBirth;
        }
};

andre.calculateAge();
console.log(andre);
*/

//Lecture Loops

//for loops

//var array = ['andre', 'vemba', 'Menezes', 'de', 'carvalho'];
/*for (var i = array.length-1; i >= 0; i--) {
        console.log(array[i]);
}
*/
//while Loops
/*
var i = 0;
while (i < array.length) {
        console.log(array[i]);
        i++;
}

for (var i = 0; i < 5; i++) {
      console.log(i);

      if (i ===3) {
              break;
      }
}


for (var i = 0; i < 5; i++) {

      if (i ===3) {//3- will not be printed
              continue;
      }
          console.log(i);
}
*/


//challenge
/*
var years = [1993, 1995, 1997, 2000, 2004];

function printFullAge(years) {
        var empty = [];
        var fullAges = [];

        for (var i = 0; i < years.length; i++) {
                empty = 2018 - years[i];
                //console.log(empty);

                if (empty >= 18) {
                        console.log('Person ' + (i + 1) + ' is : ' + empty + ' years old, and is full age');
                        fullAges.push(true);
                } else {
                        console.log('Person ' + (i + 1) + ' is : ' + empty + ' years old, and is NOT full age');
                        fullAges.push(false);
                 }
                }
                return fullAges
        }

        //var yearOfBirth = [1993, 1995, 1997, 2000, 2004];
        var full_1 = printFullAge(years);
        var full_2 = printFullAge([1999, 2010, 2009,2004]);


        */
/*
       var results = "";
       var markMass = 45;//kg
       var markHeight = 1.72; //meters


        var johnMass = 42;
        var johnHeight = 1.50;

        var markBmi = markMass / Math.pow(markHeight, 2);
        
        console.log(markBmi);


        var johnBmi = johnMass / Math.pow(johnHeight, 2);
        console.log(johnBmi);

        var markHigherBmi = markBmi > johnBmi;
        var johnHigherBmi = johnBmi > markBmi;
        
        console.log(markBmi, johnBmi);

        console.log('Is Mark\'s BMI higher than john\'s ? ' + johnHigherBmi);

        */

        /*
        if( markBmi >= johnBmi) {
              results = true;
              console.log("Is Mark\'s BMI higher than john\'s ? " + results);
        }else {
                results = false;
                console.log("Is Mark\'s BMI higher than john\'s ? " + results);
        }
*/

/*
function tipCalculator(bill) {
        var percentage;
        if (bill < 50) {
                percentage = .2;
        } else if (bill >= 50 && bill < 200) {
                percentage = .15;
        } else {
                percentage = .1;
        }
        return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, finalValues);
*/

var john =  {
        fullName : 'John Smith',
        bills: [124, 48, 268, 180, 42],
        calcTips: function(){
                this.tips = [];
                this.finalValues = [];

                for ( var i= 0; i < this.bills.length; i++){

                        //Determine percentage based on tipping rules
                        var percentage;
                        var bill = this.bills[i];

                        if (bill < 50){
                                percentage = .2;
                        }else if (bill >= 50 && bill < 200){
                                percentage = .15;
                        }else {
                                percentage = .1;
                        }

                        //Add results to the corresponding arrays
                        this.tips[i] = bill * percentage;
                        this.finalValues[i] = bill + bill * percentage;
                }
        }
}


var mark  =  {
        fullName : 'Mark Miller',
        bills: [77, 475, 110, 45,],
        calcTips: function(){
                this.tips = [];
                this.finalValues = [];

                for ( var i= 0; i < this.bills.length; i++){

                        //Determine percentage based on tipping rules
                        var percentage;
                        var bill = this.bills[i];

                        if (bill < 100){
                                percentage = .2;
                        }else if (bill >= 100 && bill < 300){
                                percentage = .1;
                        }else {
                                percentage = .25;
                        }

                        //Add results to the corresponding arrays
                        this.tips[i] = bill * percentage;
                        this.finalValues[i] = bill + bill * percentage;
                }
        }
}

function calcAverage(tips) {
        var sum = 0;
        for (var i = 0; i < tips.length; i++){
                sum = sum + tips[i];
        }
        return sum / tips.length;
}

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if(john.average > mark.average) {
        console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
}else if (mark.average > john.average) {
        console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}