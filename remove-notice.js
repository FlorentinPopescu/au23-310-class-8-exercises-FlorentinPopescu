// ./remove-notice.js

const notice = document.getElementById("maintenance-notice");

let removeNotice = setTimeout(
    notice.remove(), 5000
)

clearTimeout(removeNotice);
