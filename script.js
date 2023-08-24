function displaymessage(message) {
    const display = document.getElementById('display')
    display.innerHTML = message;

}

function countdown(number, callback){
 
    if(number > 0) {
        displaymessage(number);
        setTimeout(function(){
            countdown(number - 1 , callback)
        }, 1000);

    } else {
        callback();
    }
}

countdown(10, function() {
    displaymessage("Happy Independence Day!")
})

const refreshbutton = document.getElementById('refreshbutton')

refreshbutton.addEventListener('click', function(){
    location.reload();
});

