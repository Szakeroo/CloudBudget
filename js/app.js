document.addEventListener('DOMContentLoaded', function () {
    const formElement = document.querySelector('form');
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const phoneNumberInput = document.getElementById("phoneNumber");
    const serviceOptionInput = document.getElementById("services");
    const submitButton = document.querySelector(".submit__btn");
    let stringRegExp = "^[A-Za-z]{2,29}";
    let numberRegExp = "^[0-9] {9-11}"
    formElement.addEventListener('submit', function (e) {
        e.preventDefault();
        let listOfErrors = [];
        if (!firstNameInput.value.match(stringRegExp)) {
            listOfErrors.push("First Name have to be between 2-29 characters and can't contain numbers");
        }
        if(!lastNameInput.value.match(stringRegExp)){
            listOfErrors.push("Last Name First Name have to be between 2-29 characters and can't contain numbers");
        }
        if(!phoneNumberInput.value.match(numberRegExp)){
            listOfErrors.push("Only numbers please and between 9-11 characters")
        }
        if(serviceOptionInput.value == "none") listOfErrors.push("You have to choose service option")

        console.log(listOfErrors);
    })



});
