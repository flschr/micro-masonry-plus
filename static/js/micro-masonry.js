window.onload = function() {
    masonryLayout();
    window.addEventListener('resize', masonryLayout);
};

function masonryLayout() {
    const masonry = document.querySelector('.masonry');
    const items = masonry.querySelectorAll('li');
    const columns = getComputedStyle(masonry).getPropertyValue('--columns') || 3;

    // Set the number of columns based on screen size
    let columnHeights = Array(parseInt(columns)).fill(0);

    items.forEach(item => {
        let minColIndex = columnHeights.indexOf(Math.min(...columnHeights));
        item.style.gridColumnStart = minColIndex + 1;
        item.style.gridRowStart = columnHeights[minColIndex] + 1;
        columnHeights[minColIndex] += item.offsetHeight;
    });
}