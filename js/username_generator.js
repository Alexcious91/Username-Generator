let output = document.querySelector("#usernameOutput")
const submit = document.querySelector("#btnGenerate")

submit.addEventListener("click", userDetails);

// get user details
function userDetails() {
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const yearDOB = document.querySelector("#currentYear").value;
    const province = document.querySelector("#province").value;
    
    province_list = ["gauteng", "northern cape", "western cape", "free state", "kwazulu natal", "limpopo", "mpumalanga", "north west", "eastern cape"]

    username = generate_usename(firstName, lastName, yearDOB, province);
    return username
}

// create/generate username 
function generate_usename(firstName, lastName, yearDOB, province) {
    username = firstName.slice(-3) + lastName.slice(0, 3) + yearDOB + province;
    output.textContent = username;
    console.log(username);
}

// Generate province 
function userProvince(province) {

    avaliable_province = {
        "gauteng": "GP",
        "northern cape": "NC",
        "western cape": "WC",
        "free state": "FS",
        "kwazulu natal": "KZN",
        "limpopo": "LP",
        "mpumalanga": "MP",
        "north west": "NW",
        "eastern cape": "EC"
    }
    
    // return province[avaliable_province]
    // const formattedProvince = province.toLowerCase().replace(/\s+/g, '');
    
    return avaliable_province[province.toLowerCase()];
}

userDetails()