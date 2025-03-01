/*
//Declarations
    let car = {
        make: "Toyota", 
        model: "Corolla", 
        year: 2021
    };
    

//Function
    function getDescripton(car){
        console.log(`This car is a ${car.year} ${car.make} ${car.model}`);
    }

    getDescripton(car);
*/

    let webDev = {
        progLanguage_1: "HTML", 
        progLanguage_2: "CSS", 
        progLanguage_3: "Javascript"
    };

    let languages = Object.values(webDev);

    function webDev_Description(webDev){
        
        console.log(`Starting in Web Development involves these 3 main languages:\n`);
        let count = 0;
        while(count < languages.length){

        console.log(`${count+1}. ${languages[count]}`);
        count++;
    }
        console.log(`\nLearning first with ${webDev.progLanguage_1} builds your foundation to go next in designing your website using ${webDev.progLanguage_2}
            \nThen once you're done with those 2, you can add functionality to your website by using ${webDev.progLanguage_3}.`);

    }

    webDev_Description(webDev);