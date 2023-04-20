"use Strict";
$(document).ready(function () {
  $.ajax({
    url: "https://openlibrary.org/search.json",
    data: { q: "*" },
    dataType: "json",
    success: function (data) {
      displayResults(data);
    },
  });

  function displayResults(data) {
    var books = data.docs;

    books = $.map(books, function (book) {
      if (!book.hasOwnProperty("first_publish_year")) {
        book.first_publish_year = "no tiene";
      }
      return book;
    });

    var table = $("#tabla").DataTable({
      data: books,
      columns: [
        { title: "Título", data: "title" },
        { title: "Autor", data: "author_name" },
        { title: "Año de publicación", data: "first_publish_year" },
      ],
    });

    $("#spinner").addClass("visually-hidden");
  }
});
