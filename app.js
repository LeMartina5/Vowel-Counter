const input = document.querySelector('.input');
const submitBtn = document.querySelector('.submit');
let result = document.querySelector('div');

submitBtn.addEventListener('click', () => {
    const text = input.value;
    let vowels = 0;
    for (let i = 0; i <= text.length; i++) {
        (text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u') ? (vowels += 1) : vowels;
    }
    result.innerText = vowels;
})
