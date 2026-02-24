
window.onload = async function () {
// ===============================
// STEP 1: SIGNUP
// ===============================
console.log("JS Loaded Successfully");

let randomNum = Math.floor(Math.random() * 999999) + 1;
    let formattedNum = String(randomNum).padStart(6, '0');
    let randomID = "US" + formattedNum;

    document.getElementById("userID").value = randomID;

const supabaseUrl = "https://gnproortjmxsuqljsuza.supabase.co";
const supabaseKey = "sb_publishable_croNz3tQRNm9Z79sEMFgSQ_czVsCaD7";

const supabaseClient = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);


// ===============================
// STEP 1: SIGNUP (CREATE USER)
// ===============================

document.getElementById("Signupform").addEventListener("submit", async function (e) {
    e.preventDefault();

    console.log("Signup Started");

    // 1️⃣ Get form values
    const userID = document.getElementById("userID").value.trim();
    const userType = document.getElementById("UserType").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    
    const password = document.getElementById("password").value;
    const imageFile = document.getElementById("profileImage").files[0];

    // 2️⃣ Basic validation
    if (!userID || !username || !email || !password || !userType) {
        //alert("All fields are required");
        Toastify({
    text: "All fields are required ❌",
    duration: 1000,
    gravity: "top", // top or bottom
    position: "center", // left, center or right
    style: {
        background: "linear-gradient(to right, #FF0066, #D41872)",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "5px",
        padding: "10px 20px",
        boxShadow: "0 3px 6px rgba(0,0,0,0.2)"
    }
}).showToast();


        return;
    }
    // ✅ PHONE NUMBER VALIDATION (ONLY DIGITS)
    const numberPattern = /^[0-9]+$/;

    if (!numberPattern.test(number)) {
        Toastify({
    text: "Please fill correct mobile number ❌",
    duration: 1000,
    gravity: "top", // top or bottom
    position: "center", // left, center or right
    style: {
        background: "linear-gradient(to right, #FF0066, #D41872)",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "5px",
        padding: "10px 20px",
        boxShadow: "0 3px 6px rgba(0,0,0,0.2)"
    }
}).showToast();
    // alert("Please fill correct mobile number");
    return;
    }



      // ✅ 4️⃣ DUPLICATE CHECK (EMAIL OR PHONE)
    const { data: existingUser, error: checkError } = await supabaseClient
        .from("users")
        .select("email, number")
        .or(`email.eq.${email},number.eq.${number}`);

    if (checkError) {
        console.error("Check Error ❌", checkError);
        alert("Error checking existing data");
        return;
    }

    if (existingUser.length > 0) {
         Toastify({
    text: "Email or Phone Number already exists ❌",
    duration: 1000,
    gravity: "top", // top or bottom
    position: "center", // left, center or right
    style: {
        background: "linear-gradient(to right, #FF0066, #D41872)",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "5px",
        padding: "10px 20px",
        boxShadow: "0 3px 6px rgba(0,0,0,0.2)"
    }
}).showToast();
        //alert("Email or Phone Number already exists ❌");
        return;
    }

    let imageUrl = "";

    // 3️⃣ Upload image to Supabase Storage (if selected)
    if (imageFile) {
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `${username}_${Date.now()}.${fileExt}`;

        const { error: uploadError } = await supabaseClient
            .storage
            .from("profiles")
            .upload(fileName, imageFile);

        if (uploadError) {
            console.error("Image Upload Error ❌", uploadError);
            alert("Image upload failed");
            return;
        }

        // Public URL
        imageUrl = `${supabaseUrl}/storage/v1/object/public/profiles/${fileName}`;
    }

    // 4️⃣ Insert user data into table
    const { error: insertError } = await supabaseClient
        .from("users")
        .insert([
            {
                user_id: userID,
                type: userType,
                username: username,
                email: email,
                number: number,
                password: password,
                profile_url: imageUrl,
                created_at: new Date().toLocaleDateString('en-GB').replace(/\//g, '-')
                // created_at: new Date().toISOString()
            }
        ]);

    if (insertError) {
        console.error("Insert Error ❌", insertError);
        alert("Signup failed (check console)");
        return;
    }

    // 5️⃣ Success
     Toastify({
    text: "Account Created Successfully ✅",
    duration: 1000,
    gravity: "top", // top or bottom
    position: "center", // left, center or right
    style: {
        background: "linear-gradient(to right, #43e97b, #38f9d7)",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "5px",
        padding: "10px 20px",
        boxShadow: "0 3px 6px rgba(0,0,0,0.2)"
    }
}).showToast();
    // alert("Account Created Successfully ✅");
    console.log("User Created Successfully");
   setTimeout(function () {
    window.location.href = "login.html";
}, 3000);


});
}