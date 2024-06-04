const passwordBox = document.querySelector("#Password");
const btn = document.querySelector("button")
const copy = document.querySelector(".copy")

const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456799";
const symbols = "!@#$%^&*()_+-=}{[]|'\?><,./'";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }

    passwordBox.value = password;
    // passwordBox.innerText=passwordBox.innerText+password;
}
btn.addEventListener("click", () => {
    createPassword();
});

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}
copy.addEventListener("click", () => {
    copyPassword();
})


