export class Movie {
    id: number;
    name: String;
    genre: String;
    year: number;

    constructor(id: number, name: string, genre: string, year: number) {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.year = year;
    }
}
