console.log('umesh');
console.log(window.location.href);

function toggleFeedbackForm() {
    console.log("i'm playing");
    document.getElementById("myForm").classList.toggle("show");
    check_login();
}

function check_login() {

    var logged_in = false;
    console.log('checking login');

    var submit_btn= document.getElementById("submit-btn");
    var login_btn= document.getElementById("login-btn");

    // TODO: call JIRA API

    if (logged_in) {
        submit_btn.style.display = 'block';
        login_btn.style.display = 'none';
    } else {
        submit_btn.style.display = 'none';
        login_btn.style.display = 'block';
    }
}
