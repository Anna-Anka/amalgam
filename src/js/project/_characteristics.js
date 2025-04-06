(function () {
    const grid = document.querySelector('.characteristics');

    if (!grid) {
        return
    }
    
    const items = grid.querySelectorAll('.characteristics__item');
    const columns = 3;
    const rows = Math.ceil(items.length / columns);
    grid.style.gridTemplateRows = `repeat(${rows}, auto)`;
})()
