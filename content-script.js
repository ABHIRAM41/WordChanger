// const { json } = require('stream/consumers');

document.addEventListener('mousemove', (event) => {

    // Check if the element exists
    const element = document.getElementsByClassName("atvwebplayersdk-captions-text");
    if(element.length == 0) return;

    var rect = element[0].getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    // // Check if the cursor is within the boundaries of the target element
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
    //   console.log('Cursor is over the element');
    } else {
        return
    }

    if(element[0].childNodes[0].nodeName != 'SPAN') {
        var temp = element[0].innerHTML
        temp = temp.split('<br>')
        temp = temp.map(s => {
        return ("<span>" + s.split(' ').join("&nbsp;</span><span>") + "</span>")
        })
        element[0].innerHTML = temp.join('<br>')   
    }

    var words = element[0].childNodes
    for(var i = 0; i < words.length; i++)
    {
        var rect = words[i].getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
    
        // // Check if the cursor is within the boundaries of the target element
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {

            // console.log(getMeaning(words[i].innerText))
            words[i].style.color = 'yellow'
        } else {
            words[i].style.color = 'white'
        }
    }
})

/*
var fs = require('fs');
const rawData = fs.readFileSync('./combined.json')
const jsonData = JSON.parse(rawData)

function getMeaning(word)
{
    word = word.trim()
    word = word.toLowerCase()
    return jsonData[word]
}
*/
