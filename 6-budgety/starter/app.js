// this is the Data Module
//BUdget controller 
var budgetController = (function () {

    /* var x = 23;
   
    var add = function(a) {
      
        return x + a;

    }// this is a private method

    return {
        publicTest: function(b) { 
            return add(b);
        } this is public
    } */

})();


// this is the UI Module
var UIcontroller = (function () {

    var DOMstrings = {
        inputTypes: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn:'.add__btn'
    }
    //code here
    return {
        getInput: function() {

            return {

                type: document.querySelector(DOMstrings.inputTypes).value, // will be either inc or exp value defiened in the html
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
            
        }, 

        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();



//this is the Global app controller (module)
var controller = (function(budgetCtrl, UICtrl) {


    /*     var z = budgetCtrl.publicTest(5);

        return {
            anotherPublic: function(){
                console.log(z);
            }
        }
       */

       var setupEventeListener = function() {
           var DOM = UICtrl.getDOMstrings();

           document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

           document.addEventListener('keypress', function (event) {

               if (event.keyCode === 13 || event.which === 13) {
                   ctrlAddItem();
               }
           });
       };

    var ctrlAddItem = function () {
        //1. get the input data
        var input = UICtrl.getInput();
       // console.log(input);
        // 2. add the item to the budger controller
        //3. add the item to the Ui
        //4.calculate  the budget
        //5.Display the budget on the UI

    }
    return {
        init:function() {
            console.log('app has started');
            setupEventeListener();
        }
    }

 
})(budgetController, UIcontroller);

controller.init();


