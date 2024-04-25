document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith("index.html")) {
        var newPathname = window.location.pathname.replace("index.html", "");
        window.location.pathname = newPathname;
    }
});

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        document.querySelector('.bg-loading-container').style.display = 'none';
    } else {
        document.querySelector('.bg-loading-container').style.display = 'block';
    }
};

document.onreadystatechange = function () {
    document.querySelector('.bg-loading-container').style.display = 'block';
};