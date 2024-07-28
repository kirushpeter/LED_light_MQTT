document.addEventListener('DOMContentLoaded', function() 

{

    const circle = document.querySelector('.circle');

    const onButton = document.getElementById('on_button');

    const offButton = document.getElementById('off_button');

    onButton.addEventListener('click', function() {

        circle.style.backgroundColor = 'gold';

    });

    offButton.addEventListener('click', function() {

        circle.style.backgroundColor = 'white';

    });

});



