window.onload = function() {
    var masonry = new Masonry('.grid', {
        itemSelector: '.grid-item',
        columnWidth: '.grid .grid-item',
        percentPosition: true,
        gutter: 0
    });
};