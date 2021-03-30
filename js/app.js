document.addEventListener('DOMContentLoaded', function () {
    const formElement = document.querySelector('form');
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const phoneNumberInput = document.getElementById("phoneNumber");
    const serviceOptionInput = document.getElementById("services");
    const submitButton = document.querySelector(".submit__btn");
    const header = document.querySelector(".navigation");
    const burgerIcon = document.querySelector(".burger__wrapper");
    const burgerList = document.querySelector(".burger_list");
    const burgerBody = document.querySelector(".burger");
    let stringRegExp = "^[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż]{2,20}";
    let numberRegExp = /^\d{9,11}$/;

    const resetFormData = () => {
        firstNameInput.value = "";
        firstNameInput.placeholder = "First Name";
        phoneNumberInput.value = "";
        phoneNumberInput.placeholder = "Phone Number";
        lastNameInput.value = "";
        lastNameInput.value.placeholder = "Last Name";
        serviceOptionInput.value = "none";
    }
    formElement.addEventListener('submit', function (e) {
        e.preventDefault();
        let listOfErrors = [];
        if (!firstNameInput.value.match(stringRegExp)) {
            listOfErrors.push("First Name have to be between 2-20 characters and can't contain numbers");
            firstNameInput.classList.add("error");
            firstNameInput.placeholder = "String 2-20 chars please";
        }
        else {
            firstNameInput.classList.remove("error");
        }
        if (!lastNameInput.value.match(stringRegExp)) {
            listOfErrors.push("Last Name First Name have to be between 2-20 characters and can't contain numbers");
            lastNameInput.classList.add("error");
            lastNameInput.placeholder = "String 2-20 Chars Please";
        }
        else {
            lastNameInput.classList.remove("error");
        }
        if (!phoneNumberInput.value.match(numberRegExp)) {
            listOfErrors.push("Only numbers please and between 9-11 characters");
            phoneNumberInput.classList.add("error");
            phoneNumberInput.placeholder = "Only numbers please and between 9-11 characters";
        }
        else {
            phoneNumberInput.classList.remove("error");
        }
        if (serviceOptionInput.value == "none") {
            listOfErrors.push("You have to choose service option");
            serviceOptionInput.classList.add("error");
        }
        else {
            serviceOptionInput.classList.remove("error");
        }
        if (listOfErrors.length < 1) {
            let fullName = firstNameInput.value + " " + lastNameInput.value;

            alert(`Thanks ${fullName} we contact you soon`)
            resetFormData()
            //Dane gotowe do wstawienia lecz nie chcialem psuć ukladu strony wiec pozostawilem je tylko zwalidowane
        };
    })
    burgerIcon.addEventListener("click", function () {
        burgerList.classList.toggle("open");
        burgerBody.classList.toggle("listopen");
    });

});

