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
var book = /** @class */ (function () {
    function book(title, author, publicationYear, genre) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.genre = genre;
    }
    book.prototype.logBookDetails = function () {
        console.log("Title: ".concat(this.title));
        console.log("Author: ".concat(this.author));
        console.log("Publication Year: ".concat(this.publicationYear));
        console.log("Genre: ".concat(this.genre));
    };
    book.prototype.isrecent = function () {
        var currentYear = new Date().getFullYear();
        return (currentYear - this.publicationYear) <= 5;
    };
    book.prototype.changeGenre = function (newGenre) {
        this.genre = newGenre;
    };
    book.prototype.isAuthor = function (authorName) {
        return this.author === authorName;
    };
    return book;
}());
var Book = new book('The Great Gatsby', 'shakesspear', 1925, 'Novel');
Book.logBookDetails();
console.log("Is recent: ".concat(Book.isrecent()));
Book.changeGenre('Classic');
console.log("Updated genre: ".concat(Book.genre));
console.log("Is author F. Scott Fitzgerald: ".concat(Book.isAuthor('shakesspear')));
function findPersonInCity(people, city) {
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        for (var _a = 0, _b = person.addresses; _a < _b.length; _a++) {
            var address = _b[_a];
            if (address.city === city) {
                return { name: person.name, email: person.email };
            }
        }
    }
    return undefined;
}
var people = [
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
var result = findPersonInCity(people, 'Los Angeles');
if (result) {
    console.log("Found person: Name - ".concat(result.name, ", Email - ").concat(result.email));
}
else {
    console.log('No person found in the specified city.');
}
