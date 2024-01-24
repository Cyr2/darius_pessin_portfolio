let input = document.querySelectorAll('input');
let textarea = document.querySelector('textarea');
let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let extValid = ['.fr', '.com', '.eu', '.org']
let nameOk = false;
let mailOk = false;

input.forEach(e => {
    e.addEventListener('click',()=>{
        inputValid(e)
    })
    e.addEventListener('input',()=>{
        inputValid(e)
    })
});

textarea.addEventListener('input',()=>{
    buttonValid();
});

function inputValid(e){
    if(e.value.length != 0) {
        e.style.caretColor = "white"
    } else {
        e.style.caretColor = "transparent"
    }

    if(input[0].value.includes(" ") && input[0].value.length >= 5) {
        input[0].style.borderBottom = "1px solid #4EE1A0"
        nameOk = true;
    } else {
        input[0].style.borderBottom = "1px solid red"
    }

    if(alpha.includes(input[1].value.charAt().toLowerCase()) && input[1].value.includes("@") && !input[1].value.includes(' ')) {
        let before = input[1].value.substring(0, input[1].value.indexOf('@'));
        let after = input[1].value.slice(input[1].value.indexOf('@') + 1).substring(0, input[1].value.slice(input[1].value.indexOf('@') + 1).indexOf('.'))
        let ext = input[1].value.slice(input[1].value.indexOf('.'))
        if(before.length >= 3 && after.length >= 3 && extValid.includes(ext)) {
            input[1].style.borderBottom = "1px solid #4EE1A0"
            mailOk = true;
        } else {
            input[1].style.borderBottom = "1px solid red"
        }
    } else {
        input[1].style.borderBottom = "1px solid red"
    }
    buttonValid();
}

function buttonValid(){
    if(nameOk == true && mailOk == true && textarea.value != "") {
        input[2].disabled = false;
    } else {
        input[2].disabled = true;
    }
}

input[2].addEventListener('click', ()=>{
    alert('Send')
})