const wrapper = document.querySelector('.search-input');
const box = document.querySelector('.auto-box');
const input = document.querySelector('input');

input.onkeyup = (e) => {
    let key = e.target.value;
    let noArray = [];
    if(key){
        noArray = suggestions.filter(data => {
            return data.toLowerCase().startsWith(key)
        })

        noArray = noArray.map(data => {
            return data = '<li>' + data + '</li>'
        });
        wrapper.classList.add('active')
        show(noArray)
        console.log(noArray)
        const allList = box.querySelectorAll('li');
        for (let i = 0; i < allList.length; i++){
            allList[i].setAttribute('onclick', 'hello(this)')
        }

    } else {
        wrapper.classList.remove('active')
    }
}

function hello(value) {
    input.value = value.textContent;
    wrapper.classList.remove('active');
}

function show(items) {

    let data;
    if(items.length){
        data = items.join('')
    } else {
        data = '<li>'+ input.value +'</li>'
    }

    box.innerHTML = data
}