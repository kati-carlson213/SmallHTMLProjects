$(document).ready(function () {
    var dict = new Dictionary(words);
    var wordContainer = $(".word-box");
    var sizeDisplay = $("#arraySize");


    sizeDisplay.text("Amount of Words: " + dict.size());

    // creates a <ul> element w/ the id attribute
    var ulElement = $("<ul>").attr("id", "wordList");

    // iterate over each of the words and add each one to the list as an <li> 
    dict.all().forEach(function (word) {
        var liElement = $("<li>").text(word);
        ulElement.append(liElement);
    });

    // add the <ul> to the word box
    wordContainer.append(ulElement);

    //click event listener to listen to the list items inside the #wordList, to see if they're clicked
    $('#wordList li').on('click', function () {

     //removes if any words were selected before, so it can add the newly selected word
     $('#wordList li').removeClass('selected-word');
     $(this).addClass('selected-word');

      //getting the text of the selected word and display it below the find bar
       var selectedWord = $(this).text();
      $('#displaySelected').text("Selected Word: " + selectedWord);

         
    });


    // handles the query and interacts w/ the dictionary.js to use its functions
    $('#findInput').on('input', function () {
        var query = $(this).val();
        var searchResults = dict.search(query);

        // updates the displayed list and its size based off query 
        updateList(searchResults);
        sizeDisplay.text("Amount of Words: " + searchResults.length);
    });


    //clears the search bar of any input and restores the list to displaying all words
    $('#clearButton').on('click', function () {
    
        $('#findInput').val('');
        $('#wordList li').removeClass('selected-word');

        updateList(dict.all());
        sizeDisplay.text("Amount of Words: " + dict.size());
    });



    //updates list as user types in search bar
    function updateList(results) {

      $('#wordList').empty();


      results.forEach(function (word) {
        var liElement = $("<li>").text(word);

         liElement.on('click', function () {

         $('#wordList li').removeClass('selected-word');

         $(this).addClass('selected-word');

         var selectedWord = $(this).text();

         $('#displaySelected').text("Selected Word: " + selectedWord);
         });

       $('#wordList').append(liElement);
      });
   }

});