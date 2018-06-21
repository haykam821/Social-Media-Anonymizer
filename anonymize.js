(() => {
    const colors = [
        // Primary
        "red",
        "blue",
        "yellow",
        // Secondary
        "orange",
        "lime",
        "fuchsia",
        // Brighter primary
        "pink",
        "aquamarine",
        "papayawhip",
    ]

    const users = {
        "haykam821": "goldenrod",
    };

    Array.from(document.querySelectorAll(".author, a[href^='/u/']")).forEach((item, index) => {
        item.style.color = "transparent";
        if (!users[item.innerHTML]) {
            console.log(item.innerHTML, colors[index % colors.length])
            users[item.innerHTML] = colors[index % colors.length];
        }
        item.style.backgroundColor = users[item.innerHTML];
    });
})();