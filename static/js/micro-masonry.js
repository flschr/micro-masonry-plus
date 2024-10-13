window.onload = function() {
    // Initialize Masonry after the window loads
    var masonry = new Masonry('.masonry', {
        itemSelector: 'li',   // The elements Masonry will position
        columnWidth: '.masonry li', // Use the width of the items for column size
        percentPosition: true, // Use percentages for responsive layout
        //gutter: 0             // Space between items
    });
};