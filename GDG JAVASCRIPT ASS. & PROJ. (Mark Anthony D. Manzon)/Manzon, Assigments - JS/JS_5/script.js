//Array
    let myfavoriteMovies = [
        "Interstellar",
        "Spider Man: Into the Spider-Verse",
        "Dune: Part Two",
        "One Piece: Stampede",
        "Inside Out 2"
    ];

//While Loop
    console.log("\nMy Top Movies:");

    let indexNum = 0;
    while(indexNum < myfavoriteMovies.length){
        console.log(`${indexNum+1}. ${myfavoriteMovies[indexNum]}`);

        indexNum++;
    }
