document.addEventListener("DOMContentLoaded", function() {
    var blocks = document.querySelectorAll('main > div');
    blocks.forEach(function(block, index) {
        block.addEventListener('click', function() {
            switch(index) {
                case 0:
                    window.location.href = 'page1.html';
                    break;
                case 1:
                    window.location.href = 'page2.html';
                    break;
                case 2:
                    window.location.href = 'page3.html';
                    break;
                case 3:
                    window.location.href = 'page4.html';
                    break;
                default:
                    break;
            }
        });
    });
});