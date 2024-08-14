
// 30 Day DSA challenge from Hello coders team

// Day:7

// Question 1: OOP Related

// Create a TypeScript class Book that has properties for title, author, publicationYear, and genre. The class should have methods to:
// 1. Display the book details.
// 2. Check if the book is a recent publication (within the last 5 years).
// 3. Change the genre of the book.
// 4. Check if the book's author matches a given author name.

// *Hints:*
// - Use console.log to print book details in the displayDetails method.
// - In the isRecent method, get the current year using new Date().getFullYear() and compare it with publicationYear.
// - Update the genre property in the changeGenre method.
// - In the isAuthor method, compare the author property with the given author name.

class book {
    title : string;
    author : string;
    publicationYear : number;
    genre : string;

    constructor( title : string, author : string, publicationYear : number, genre : string){
        this.title = title
        this.author = author
        this.publicationYear = publicationYear
        this.genre = genre 
    }
    logBookDetails():void{
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Publication Year: ${this.publicationYear}`);
        console.log(`Genre: ${this.genre}`);
    }
    isrecent():boolean{
        const currentYear = new Date().getFullYear()
        return (currentYear - this.publicationYear) <=5
    }
    changeGenre (newGenre : string): void{
        this.genre = newGenre
    }
    isAuthor(authorName : string):boolean{
        return this.author === authorName
    }
    }

const Book = new book('The Great Gatsby', 'shakesspear', 1925, 'Novel');
Book.logBookDetails();
console.log(`Is recent: ${Book.isrecent()}`);
Book.changeGenre('Classic');
console.log(`Updated genre: ${Book.genre}`);
console.log(`Is author F. Scott Fitzgerald: ${Book.isAuthor('shakesspear')}`);


//  Question 2: Nested Object with Interfaces

// Create an interface Person that includes properties for name, age, email, phone, and addresses. The addresses property should be an array of objects, each containing street, city, state, and zipcode. Write a function to find the first person living in a specific city and return their name and email.

// *Hints:*
// - Define the Address and Person interfaces with the required properties.
// - Use nested loops to iterate through the people array and each person's addresses array.
// - Check if the city property matches the given city in the function.
// - Return the name and email of the first matching person or undefined if no match is found.

interface Address {
    street: string;
    city: string;
    state: string;
    zipcode: string;
}

interface Person {
    name: string;
    age: number;
    email: string;
    phone: string;
    addresses: Address[];
}
function findPersonInCity(people: Person[], city: string): { name: string, email: string } | undefined {
    for (const person of people) {
        for (const address of person.addresses) {
            if (address.city === city) {
                return { name: person.name, email: person.email };
            }
        }
    }
    return undefined;
}
const people: Person[] = [
    {
        name: 'Aisha',
        age: 30,
        email: 'aisha@example.com',
        phone: '143-456-7890',
        addresses: [
            { street: '123 Main St', city: 'New York', state: 'NY', zipcode: '10001' },
            { street: '456 Elm St', city: 'Los Angeles', state: 'CA', zipcode: '90001' }
        ]
    },
    {
        name: 'Bob',
        age: 25,
        email: 'bob@example.com',
        phone: '987-654-3210',
        addresses: [
            { street: '789 Oak St', city: 'Chicago', state: 'IL', zipcode: '60601' }
        ]
    },
    {
        name: 'Charlie',
        age: 35,
        email: 'charlie@example.com',
        phone: '555-555-5555',
        addresses: [
            { street: '321 Pine St', city: 'San Francisco', state: 'CA', zipcode: '94101' }
        ]
    }
    ];

    const result = findPersonInCity(people, 'Los Angeles');
    if (result) {
        console.log(`Found person: Name - ${result.name}, Email - ${result.email}`);
    } else {
        console.log('No person found in the specified city.');
    }








