
$(document).ready(function () {
    const form =  $('form');
    const ul = $('ul');
    const input = $('input');

    form.on('submit', (e) => {
        e.preventDefault()
    const newTask = input.val();

$(`<li>${newTask}</li>`).appendTo('ul')
input.val("");
})

ul.on ('click', 'li', (e) => {
    if ($(e.target).hasClass ('done-task')) {
        $(e.target).removeClass('done-task')
    } else {
        $(e.target).addClass ('done-task')
    }
})    
}) 
    


    
