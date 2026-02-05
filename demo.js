// demo.js

const prisma = require("./db/index");

const newBook = {
  title: "The Fellowship of the Ring",
  year: 1954,
  quantity: 5,
  genre: ["High fantasy", "Adventure"],
  authorName: "J. R. R. Tolkien",
};

const createBook = async () => {
  try {
    const book = await prisma.book.create({ data: newBook });
    console.log("Success... a new book was created!!");
    console.log(book);
  } catch (error) {
    console.log("Something went wrong...");
    console.log(error);
  }
};

createBook();
