
//Get these three id's from the HTML file to use later in the process
const ctr_Txt = document.querySelector("#counter-ID");
const subBtn = document.querySelector("#subtract-Button");
const addBtn = document.querySelector("#plus-Button");

let counter_Value = 0;

    //When subtract button is clicked
    subBtn.addEventListener("click", function(){

        //Decrease only if the counter is greater than 0 
        if(counter_Value > 0){
            counter_Value--;
        }
        
        //Updates the counter value
        ctr_Txt.textContent = counter_Value;

    });

    //When subtract button is clicked
    addBtn.addEventListener("click", function(){

        //Increase the counter by 1
        counter_Value++;
        
        //Updates the counter value
        ctr_Txt.textContent = counter_Value;

    });

    