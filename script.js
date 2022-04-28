

//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one.
	let comedy = ["https://wwwimage-us.pplusstatic.com/thumbnails/photos/370-q80/movie_asset/92/46/84/DADDYH_SAlone_Poster_1400x2100.jpg", "https://miro.medium.com/max/1400/1*4Cbfm8OB6bSwlDOHTTNBdQ.jpeg","https://bestsimilar.com/img/movie/thumb/9c/26261.jpg"];
	 let action =["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBEZ5uPg8T1en58VNdHK08U-k6kDyM1igmVg&usqp=CAU", "https://icdn.digitaltrends.com/image/digitaltrends/gknx04mxnkcf5uodhhhaakqccg-500x500.jpg","https://upload.wikimedia.org/wikipedia/en/8/8f/Fast_and_Furious_Poster.jpg"];
	 let drama =["https://i0.wp.com/moviesandmania.com/wp-content/uploads/2022/01/the-other-me-poster.jpeg?resize=300%2C439&ssl=1", "https://stat1.bollywoodhungama.in/wp-content/uploads/2020/02/Little-Women-306x393.jpg","https://genylifestyles.com/wp-content/uploads/2020/01/once-upon-hollywood-poster-xl.jpg"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
    if(genreInput==="comedy"){
     for(let show of comedy){
    $(".shows").append("<img src="+show+">");
    }
	}
    else if(genreInput==="action"){
    for (let show of  action){
    $(".shows").append("<img src="+ show+">");
    }
    }
    else if(genreInput==="drama"){
    for (let show of drama){
    $(".shows").append("<img src="+ show+">");
    }
    }
});

$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
	comedy.push(suggestion);
     console.log(comedy);
   action.push(suggestion);
    console.log(action);
    drama.push(suggestion);
    console.log(drama);

    
});