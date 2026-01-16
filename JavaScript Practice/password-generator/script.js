const generatePassword = document.querySelector(".generate-button");
const input = document.querySelector(".input");

generatePassword.addEventListener("click", () => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+?{}[],.";
    const passwordLength = 12;
    let password = "";
    for(let i = 0; i < passwordLength; i++) {
        const  randomIndex = Math.floor(Math.random() * characters.length);
        const randomNumber = characters[randomIndex];
        password += randomNumber;
    }
    input.value = password;
    navigator.clipboard.writeText(input.value)
    console.log(password);
});

