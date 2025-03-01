
function checkAge() {
    const age = document.getElementById('ageInput').value;

    let category;

    if( age === '' || isNaN(age) || age < 0){
        category = "Invalid age. Please enter a valid number.";

        document.getElementById('result').classList.add('error');
    } else {
        document.getElementById('result').classList.remove('error');

        const ageNum = parseInt(age);
    
        if(ageNum >= 0 && ageNum <= 2){
            category = "You are a(n): Baby";
        }else if (ageNum >= 3 && ageNum <= 5){
            category = "You are a(n): Young Child";
        } else if(ageNum >= 6 && ageNum <= 12){
            category = "You are a(n): Older Child"
        }else if(ageNum >= 13 && ageNum <= 19){
            category = "You are a(n): Teenager";
        } else if(ageNum >= 20){
            category = "You are a(n): Adult";
        } 
    }

    document.getElementById('result').innerText = category;

}