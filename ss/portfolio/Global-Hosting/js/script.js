var feedbackPopup = document.querySelector(".feedback");
var feedbackButton = document.querySelector(".support-btn");
var feedbackClose = document.querySelector(".feedback-close");
var feedbackLogin = feedbackPopup.querySelector("[name=name]");
 
    feedbackButton.addEventListener("click", function (event) {
        event.preventDefault(event);
        feedbackPopup.classList.add("show-block");
        feedbackLogin.focus();
    });

   
    feedbackClose.addEventListener("click", function (event) {
        event.preventDefault(event);
        feedbackPopup.classList.remove("show-block");
    });

    window.addEventListener("keydown", function (event) {
        if (event.keyCode == 27) {
            if (feedbackPopup.classList.contains("show-block")) {
                feedbackPopup.classList.remove("show-block");
            }
        }
    });