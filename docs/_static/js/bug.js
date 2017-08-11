console.log('umesh');
console.log(window.location.href);

function toggleFeedbackForm() {
    console.log("i'm playing");
    document.getElementById("myForm").classList.toggle("show");
    check_login();
}

function isLoggedInAPI() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://jira.opnfv.org/rest/auth/1/session",
        "method": "POST",
        "headers": {}
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    })
}

function loginAPI(username, password) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://jira.opnfv.org/rest/auth/1/session",
        "method": "POST",
        "headers": {
            "content-type": "application/json"
        },
        "processData": false,
        "data": {
            "username": username,
            "password": password
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    })
}

function check_login() {

    var logged_in = false;
    console.log('checking login');

    var submit_btn = document.getElementById("submit-btn");
    var login_btn = document.getElementById("login-btn");

    logged_in = isLoggedInAPI();

    if (logged_in) {
        submit_btn.style.display = 'block';
        login_btn.style.display = 'none';
    } else {
        submit_btn.style.display = 'none';
        login_btn.style.display = 'block';
    }
}
