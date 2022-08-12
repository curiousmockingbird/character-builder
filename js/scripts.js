window.onload = function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const species = document.getElementById("species").value;
    const trade = document.getElementById("trade").value;
    const gender = document.querySelector("input[name='gender']:checked").value;

    console.log(species);
    console.log(trade);
    console.log(gender);

    if (species === "Elf" ){
        document.getElementById("results").removeAttribute("class");
        document.getElementById("text").innerHTML = species + trade + gender;
    }

     });
    }