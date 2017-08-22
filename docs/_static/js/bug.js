console.log('umesh');
console.log(window.location.href);

var baseUrl = "https://test-odl-docs.atlassian.net/rest";
var authUrl = "/auth/1/session";

function toggleLoginForm(show) {
    document.getElementById("jira-form").classList.toggle(show);
}

function toggleFeedbackForm(show) {
    document.getElementById("feedback-form").classList.toggle(show);
}

function hideFeedbackButton() {
    document.getElementById("bug-form").style.display = 'block';
    document.getElementById("give-feedback-button").style.display = 'none';
}

function showFeedbackButton(){
    document.getElementById("bug-form").style.display = 'none';
    document.getElementById("give-feedback-button").style.display = 'block';
}

function giveFeedback() {
    if (check_login()) {
        toggleFeedbackForm("show");
        toggleLoginForm("hide");
    } else {
        toggleFeedbackForm("hide");
        toggleLoginForm("show");
    }
    hideFeedbackButton();
}

function isLoggedInAPI() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": baseUrl + authUrl,
        "method": "GET",
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
    var logged_in = true;
    console.log('checking login');

    //logged_in = isLoggedInAPI();
    console.log(logged_in);
    return logged_in;
}

function login() {
    // if successful login
    toggleFeedbackForm("show");
    toggleLoginForm("hide");
}
