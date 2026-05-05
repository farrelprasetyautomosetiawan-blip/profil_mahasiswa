function ubahWarna() {
    var element = document.getElementById("profileCard");
   
    if (element.classList.contains("dark-mode")) {
        element.classList.remove("dark-mode");
    } else {
        element.classList.add("dark-mode");
    }
}
