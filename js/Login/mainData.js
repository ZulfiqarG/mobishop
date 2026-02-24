//----------------------MAIN DATA GET------------------------------//
window.onload = function () {

    // 🔍 GET DATA FROM LOCAL STORAGE
    const userID = localStorage.getItem("userID");
    const userName = localStorage.getItem("userName");
    const userType = localStorage.getItem("userType");
    const userImage = localStorage.getItem("userImage");

    // ❌ AGAR DATA NA HO → LOGIN PAGE
    if (!userID || !userName || !userType) {
        window.location.href = "login.html";
        return;
    }
    // ✅ DATA MIL GAYA → HTML ME SHOW
    const userTitle = document.querySelector(".user-details__title");
    const userTitle2 = document.querySelector(".user-profile__name");

    if (userTitle) {
        document.getElementById("showImage").src = userImage;
        userTitle.innerHTML = `<span>Hello</span> ${userName} ${userID}`;
        userTitle2.innerHTML = `<span>Hello</span> ${userName}`;
    }


    // Optional debug
    console.log("Logged User:", userID, userName, userType);
};