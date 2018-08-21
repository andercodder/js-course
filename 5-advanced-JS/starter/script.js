var john = {
    
}

// This a constructor or function constructor because we use function
/*var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
}
Person.prototype.lastName = 'André'; //last name will be a property inherited from the prototype it not it own

var john = new Person('john', 1990, 'teacher');
var tiago = new Person('tiago', 1993, 'it');
var miro = new Person('miro', 1991 , 'designer');

john.calculateAge();
tiago.calculateAge();
miro.calculateAge();


console.log(john.lastName);
console.log(tiago.lastName);
console.log(miro.lastName);


//Object create
var personProto = {
    calculateAge: function () {
         console.log(2016 - this.yearOfBirth);
    }
};

var billy = object.create(personProto);
billy.name = 'john';
billy.yearOfBirth = 1993;
billy.job = 'teacher';

var jairo = object.create(personProto, {
    name: { value: 'jairo' }, 
    yearOfBirth: {value: 1993},
    job: {value:'teacher'}
});

//Primitives vs Objects

//primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


//objects
var obj1 = {
    name: 'andre',
    age: 24
};

var obj2 = obj1;
obj1.age = 24;
console.log(obj1.age);
console.log(obj2.age);

 // Functions
 var age = 27;
 var obj = {
     name: 'john',
     city: 'Lisbon'
 }

 function change(a, b){
     a = 30;
     b.city = 'San Francisco';
 }

 change(age, obj);

 console.log(age);
 console.log(obj.city);

*/
 //FUNCTIONS lecture 62
/*
 var years = [1990, 1965, 1937, 2005, 1998, 1993];

 function arrayCalc(arr, fn){
     var arrRes = [];
     for (var i = 0; i < arr.length; i++) {
         arrRes.push(fn(arr[i]));
     }
     return arrRes;
 }

 function calculateAge(el) {
     return 2018 - el;
      }

 function isFullAge(el) {
     return el >= 18;
      }

      function maxHeartRate(el){
          if (el >= 18 && el <= 81) {
             return Math.round(206.9 - (0.67 * el));

          }else {
              return -1;
          }
      }
      var ages = arrayCalc(years, calculateAge);

     var fullAges = arrayCalc(ages, isFullAge);
     var rates = arrayCalc(ages, maxHeartRate);

      console.log(ages);
  console.log(fullAges);
    console.log(rates);

//FUNCTION Lecture 63

function interviewQuestion(job) {

    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    }else if (job === 'teacher') {
        return function(name) {
            console.log(name + ', what subject do you teach?');
        }
    }else {
        return function (name) {
            console.log(name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('andre');
designerQuestion('belo');
designerQuestion('nELO');
designerQuestion('tONI');
designerQuestion('belo');

interviewQuestion('teacher')('Rosa');

*/


