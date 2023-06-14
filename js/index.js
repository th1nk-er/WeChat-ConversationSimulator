function onDarkModeChanged(e) {
    if (e.checked == true)
        document.getElementById("wechat-conversation").classList.add("dark");
    else
        document.getElementById("wechat-conversation").classList.remove("dark");
}