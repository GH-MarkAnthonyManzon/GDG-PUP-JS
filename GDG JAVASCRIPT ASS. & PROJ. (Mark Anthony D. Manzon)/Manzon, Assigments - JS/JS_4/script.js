//For Loop, numbers 1-10
    console.log("For Loop ~ Numbers from 1 - 10");
    for(let i = 1; i <= 10; i++){
        console.log(`Numbers: ${i}`);
    }

    let myHobbies = [
        "Singing",
        "Beatboxing",
        "Gaming",
        "Music Listening",
        "Traveling",
        "Video Editing",
        "Photography",
        "Filming",
        "Drawing",
        "Cooking"
    ];

//Using While Loop
    console.log("\nMy Ten Hobbies:");
    let indexNum = 0;

    while(indexNum < myHobbies.length){
        console.log(`Hobby ${indexNum+1}: ${myHobbies[indexNum]}`);

        indexNum++;
    }