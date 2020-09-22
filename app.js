function converttocelsius (fahrenheit){
    var celsius = (fahrenheit - 32 ) * 5 / 9
console.log(celsius);
var result = fahrenheit + "fahrenheit degree equals to" + celsius + "celsius degree"
console.log(result);
console.log(typeof(celsius))
console.log(typeof(result))
};
converttocelsius(212)




var FavouriteMovies = [];

function addFavouriteMovies (movieName){
    if (movieName.includes("The") == false){
        FavouriteMovies.push (movieName);
    }
}
addFavouriteMovies("The Titanic")
addFavouriteMovies("Spiderman")
addFavouriteMovies("Spirtied Away")
addFavouriteMovies("Totoro")
addFavouriteMovies("Firefly")
console.log(FavouriteMovies)

var NumberOfMovies = FavouriteMovies.length
function printFavouriteMovie(){
    console.log("Favourite Movies..:" + NumberOfMovies)
    for(var i = 0; i < NumberOfMovies; i ++){
        console.log(i)
        console.log(FavouriteMovies[i])
    }
}

printFavouriteMovie()

