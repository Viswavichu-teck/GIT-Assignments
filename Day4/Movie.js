class Movie{
    constructor(title, studio, rating = "PG13")
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getpg(movies)
    {
        let title = []
    for (let i=0;i<movies.length;i++)
    {
        if(movies[i].rating === "PG")
        {
            title.push(movies[i]);
        }
    }
    if (movies.length <= 0) 
    {
        return "No PG movies";
    }   
      else 
      return title;
    }
    display(){
        console.log(`The Title : ${this.title}`,`The Studio : ${this.studio}`,`Rating : ${this.rating}`);
    }
    }
    
    let movie = new Movie("Casino Royale", "Eon Productions");
    movie.display();
    console.log("Get PG ", movie.getpg(["Casino Royale","LEO"]));
    