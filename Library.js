/*var book = {
  title :'teste',
  description:'teste',
  author:'teste'
}
var library = {
  listBooks : [],
  addBook : function(){

  },
  showBook(){
    console.log(this.book)
  },
  getBooks(){
    console.log(this.listBooks)
  }
}*/

class Book {
  constructor(title, author, description){
      this.title = title;
      this.author = author;
      this.description = description;
  }
}

class Library {
  constructor(){
      this.books = [];
      //this.book = new Book()
      
   }

  addBook(book) {
      this.books.push(book);
  }
  getBooks(){
      this.books.map(function(item){
        console.log(item)
      })
      }
  removeBookById(title){
    let a = this.books.findIndex( bookTitle => bookTitle.title === title )
    //console.log('a',a,typeof(a))
     delete this.books[a]
    }
   getBookByID(title){
    let a = this.books.find( bookTitle => bookTitle.title === title )
    console.log(a)
    return a
   }
   updateBookByID(title,ntitle,ndescription,nauthor){
    let a = this.books.find( bookTitle => bookTitle.title === title )
   if (a.title != ntitle){
    a.title = ntitle}
    //console.log(a.title,ntitle)
  if (a.description != ndescription){
    a.description = ndescription}
    //console.log(a.description,ndescription)
  if (a.author != nauthor){
    a.author = nauthor}
    //console.log(a.author,nauthor)
      
    this.getBooks()
      

   }
  }  

  


const library = new Library();
var myBook = new Book('teste','J.K Rowling', 'kkk');
library.addBook(myBook);
var myBook = new Book("a","a","a")
library.addBook(myBook)
var myBook = new Book("bla","b","b")
library.addBook(myBook)
console.log(library.books[0].title);
console.log(library);
library.getBooks()
//library.removeBookById("a")
library.getBooks()
library.getBookByID('teste')
console.log(library.books[2],library.books[0])
library.getBookByID('bla')
library.updateBookByID("teste","up","up", "up")





//- adicionar: `addBook(bookInfo: Omit<Book, ‘id’>): Book`
// listar todos: `getBooks(): Book[]`
// remover: `removeBookById(id: string): void`
// mostrar um: `getBookById(id: string): Book`
// editar um: `updateBookById(id: string, info: { title?: string, description?: string, author?: string }): Book`

