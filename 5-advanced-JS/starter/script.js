var john = {
    
}

// This a constructor or function constructor because we use function
var Person = function(name, yearOfBirth, job) {
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