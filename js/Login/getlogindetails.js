window.onload = async function () {
    
    const supabaseUrl = "https://gnproortjmxsuqljsuza.supabase.co";
    const supabaseKey = "sb_publishable_croNz3tQRNm9Z79sEMFgSQ_czVsCaD7";

     const supabaseClient = window.supabase.createClient(
        supabaseUrl,
        supabaseKey
    );
 
    document.getElementById("LoginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    console.log("Login Started");

    const loginUsername = document.getElementById("loginUsername").value.trim();
    const loginPassword = document.getElementById("loginPassword").value;

    // Basic validation
    console.log("Login" + loginUsername);
    if (!loginUsername || !loginPassword) {
        alert("Username and Password required");
        return;
    }

    // Fetch user
    const { data, error } = await supabaseClient
        .from("users")
        .select("*")
        .eq("username", loginUsername)
        .eq("password", loginPassword)
        .single();

    if (error || !data) {
        console.error("Login Error ❌", error);
        alert("Invalid Username or Password");
        return;
    }

    // Login success
    console.log("Login Success ✅", data.type);
    alert("Login Success ✅");
    //showUserDetails(data);
//this blow one line is chat realted code
 sessionStorage.setItem("loggedUser", JSON.stringify(data));

    // 🔐 STORE DATA IN LOCAL STORAGE
localStorage.setItem("userID", data.user_id);
localStorage.setItem("userName", data.username);       // ya data.firstname
localStorage.setItem("userType", data.type);
 if (data.profile_url) {
    localStorage.setItem("userImage", data.profile_url);
    }

// 🚦 ROLE BASED REDIRECT
if (data.type.toLowerCase() === "admin") {
    window.location.href = "main.html";
} 
else if (
    data.type.toLowerCase() === "users" ||
    data.type.toLowerCase() === "friends" ||
    data.type.toLowerCase() === "customer"
) {
    window.location.href = "main.html";
}
else {
    alert("Unknown user type");
}
});
}
