function createCard(title, cName, views, monthOld, duration, thumbnailUrl, a) {
    if (views < 1000000 && views > 999) {
        a = views / 1000 + 'K';
    }
    else if (views < 1000000000 && views > 999999) {
        a = views / 1000000 + 'M';
    }
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnailUrl}"
            alt="">
        <p>${duration}</p>
    </div>
    <div class="text">
        <h3>${title}</h3>
        <p>${cName} &nbsp;·&nbsp; ${a} &nbsp;·&nbsp;&nbsp; ${monthOld} ago</p>
    </div>
    <div class="3dot">
        <div style="width: 100%; height: 100%; display: block; fill: white;"><svg
                xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24"
                viewBox="0 0 24 24" width="24" focusable="false"
                style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
                <path
                    d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z">
                </path>
            </svg></div>
    </div>
</div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

createCard("Introduction to Backened | Sigma Web Development Course | Tutorial #33", 'CodeWithHarry', 10000000, '2 months', '31:52', 'https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ');

createCard("Chai aur Python", 'Chai aur Code', 3400000, '10 months', '41:34', 'https://i.ytimg.com/vi/Ca5DLSDfPec/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNWfWdSuQ0X0nVpFhAEJgFVYFcLg');