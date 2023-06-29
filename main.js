//i
        //creating new div and class and id on the element, 
        let myDiv = document.createElement("div");
        myDiv.className = "my_class_name";
        myDiv.id = "my_id_name";
        
        //remove class and id
        myDiv.classList.remove('my_class_name'); 

        //add another class

        myDiv.classList.add('new_class_name');
        
        //check if class name is deleted or added

        let checkIfDeleted = myDiv.classList.contains('my_class_name');//false
        let checkIfAdded = myDiv.classList.contains('new_class_name');//true
       
        //console.log(checkIfDeleted);
        //console.log(checkIfAdded);

        //to add or to delete multiple classes at once

        myDiv.classList.add("class_one", "class_two", "class_three");
        myDiv.classList.remove("class_one", "class_two", "class_three");

        //console.log(myDiv);

        //to add or to delete multiple classes at once [using spread synthax, ...]

        let addThese = ["class_one", "class_two"];
        //myDiv.classList.add(...addThese);
        myDiv.classList.remove(...addThese);

        //substituting class names

        myDiv.classList.replace('new_class_name', 'replaced_class_name');

        //console.log(myDiv);
        //
//ii     //dom querying and dom manipulation inside a function
        //
        const showOnDom = () => {
            let myUl = document.getElementById("ul");
            myUl.style.border = "2px solid gold";
            myUl.style.backgroundColor = 'silver';
            let myP = document.getElementsByTagName('p')[0];
            let myP1 = document.getElementsByTagName('p')[1];
            let myP2 = document.getElementsByTagName('p')[2];
            myP.textContent = "one";
            myP.style.border = "1px solid black";
            myP1.innerHTML = "two";
            myP1.style.border = "1px solid black";
            myP2.innerText = "three";
            myP2.style.border = "1px solid black";
        }
        showOnDom();
        //
//iii 
        //javascipt functions on the DOM
        let myResult = document.getElementById('result');
        function calculateIt(a, b, c){
            return a * b * c
        }
        let result = calculateIt(8,4,6);
        myResult.innerHTML = "the result of the function is " + result;
        //console.log(result);

        //
        //show loops result on the dom

        //let myLoop = document.querySelector('.loop');
        let myArr = ['one', 'two', 'three', 'four', 'five'];
        for(let i =0; i<myArr.length; i++){
           // myLoop.innerHTML += myArr[i] + '<br>';
        }
        //
        //higher order functions
        //forEach()
        let myLoop1 = document.querySelector('.loop');
        let myArr1 = ['one', 'two', 'three', 'four', 'five'];
            myArr1.forEach((item)=>{
                myLoop1.innerHTML += item + '<br>';
            })

            //
           


















