import registerHUD from "./registerHUD.js";
import form from "./loginUser.js";

const registerBtn = document.querySelector('#register');


registerBtn.addEventListener('click', e => {
    e.preventDefault();
    const slogan = document.querySelector('p');
    form.style.display = 'none';
    slogan.style.display = 'none';
    registerHUD(); 
})

export default registerBtn