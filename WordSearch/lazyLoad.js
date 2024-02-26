$(document).ready(function () {
    var dict = new Dictionary(words);
    var lazyLoadContainer = $("#lazyLoadContainer");
    var sizeDisplay = $("#arraySize");


    sizeDisplay.text("Amount of Words: " + dict.size());


    var ulElement = $("<ul>").attr("id", "wordList");

    lazyLoadContainer.append(ulElement);

    // start up intersection observer
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                loadMoreResults();
            }
        });
    });

    // target  last <li> element in the list for lazy-loading
    var targetLi = ulElement.find("li:last").get(0);
    if (targetLi) {
        observer.observe(targetLi);
    }

    loadMoreResults();

    $('#findInput').on('input', function () {
        var query = $(this).val();
        var searchResults = dict.search(query);

        updateList(searchResults);
        sizeDisplay.text("Amount of Words: " + searchResults.length);
    });


    $('#clearButton').on('click', function () {
        $('#findInput').val('');

        updateList(dict.all());
        sizeDisplay.text("Amount of Words: " + dict.size());
    });

    function loadMoreResults() {
        var moreResults = dict.all().slice(ulElement.children().length, ulElement.children().length + 5);
    
        moreResults.forEach(function (word) {
            var liElement = $("<li>").text(word);

            liElement.on('click', function () {
                $('#wordList li').removeClass('selected-word');

                $(this).addClass('selected-word');

                  var selectedWord = $(this).text();

                    $('#displaySelected').text("Selected Word: " + selectedWord);
            });

            ulElement.append(liElement);
        });


        targetLi = ulElement.find("li:last").get(0);
        if (targetLi) {
            observer.observe(targetLi);
        }
    }

    function updateList(results) {
        // Clear the existing list
        ulElement.empty();
    
        // Add only the words that match the query
        results.forEach(function (word) {
            var liElement = $("<li>").text(word);
    
            liElement.on('click', function () {
                $('#wordList li').removeClass('selected-word');
                $(this).addClass('selected-word');
                var selectedWord = $(this).text();
                $('#displaySelected').text("Selected Word: " + selectedWord);
            });
    
            ulElement.append(liElement);
        });
    
        
    }


});
