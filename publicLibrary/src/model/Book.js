function Book(slots){
  this.isbn = slots.isbn;
  this.title = slots.title;
  this.year = slots.year;
};

Book.instances = {};

Book.loadAll = function () {
  var key = "", keys=[], booksString="", books={};
  try {
    if (localStorage["Books"]){
      booksString = localStorage["Books"];
    }
  } catch (e) {
    alert("Error when reading from Local Storage\n" + e);
  }
  if (booksString){
    books = JSON.parse(booksString);
    keys = Object.keys(books);
    console.log(keys.length + " books loaded.");
    for ( i=0; i< keys.length; i++){
      key=keys[i];
      Book.instances[key] = Book.convertRow2Obj( books[key]);
    }
  }
};