console.log('umesh');
console.log(window.location.href);

var baseUrl = "https://jira.opnfv.org/rest";
var authUrl = "/auth/1/session";
var issueUrl = "/api/2/issue";

var docsProjectID = "10309";
var issueTypeID = "4"; // for "Improvement"
var priorityTypeID = "5"; // for "Trivial"
var username = "";

function toggleLoginForm(s, b) {
    var h;
    var jira_form = document.getElementById("jira-form");

    h = (s == "show") ? "hide":"show";
    jira_form.classList.toggle(s, b);
    jira_form.classList.toggle(h, !b);
}

function toggleFeedbackForm(s, b) {
    var h;
    var feedback_form = document.getElementById("feedback-form");

    h = (s == "show") ? "hide":"show";
    feedback_form.classList.toggle(s, b);
    feedback_form.classList.toggle(h, !b);
}

function hideFeedbackButton() {
    document.getElementById("bug-form").style.display = 'block';
    document.getElementById("give-feedback-button").style.display = 'none';
}

function showFeedbackButton() {
    document.getElementById("bug-form").style.display = 'none';
    document.getElementById("give-feedback-button").style.display = 'block';
    toggleFeedbackForm("hide", true);
    toggleLoginForm("hide", true);
}

function giveFeedback() {
    if (isLoggedIn()) {
        toggleFeedbackForm("show", true);
        toggleLoginForm("hide", true);
    } else {
        toggleFeedbackForm("hide", true);
        toggleLoginForm("show", true);
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

function isLoggedIn() {
    var logged_in = false;
    console.log('checking login');

    //logged_in = isLoggedInAPI();
    console.log(logged_in);
    return logged_in;
}

function loginAPI(username, password) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": baseUrl + authUrl,
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

function login() {
    console.log($('#usr').val())
    // if successful login
    toggleFeedbackForm("show");
    toggleLoginForm("hide");
}

function createIssueAPI(summary, description) {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": baseUrl + issueUrl,
        "method": "POST",
        "headers": {
        "content-type": "application/json"
        },
        "processData": false,
        "data": {
            "project":{
                "id": docsProjectID
            },
            "summary": summary,
            "issuetype":{
                "id": issueTypeID
            },
            "reporter":{
                "name": username
            },
            "priority":{
                "id": priorityTypeID
            },
            "labels":[
                "website"
            ],
            "description": description
        }
    }

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
}

function createIssue(argument) {

}
