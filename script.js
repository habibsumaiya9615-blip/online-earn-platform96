const firebaseConfig = {
    apiKey: "AIzaSyAsv63mK-7Y_7e_M9p-6k7L0uY7P0-P0",
    authDomain: "earnhub-96.firebaseapp.com",
    databaseURL: "https://earnhub-96-default-rtdb.firebaseio.com",
    projectId: "earnhub-96",
    storageBucket: "earnhub-96.appspot.com",
    messagingSenderId: "105566778899",
    appId: "1:105566778899:web:a1b2c3d4e5f6g7h8i9j0"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function toggleMenu() {
    document.getElementById('sideMenu').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
}

function checkPassword(pass) {
    const easyPattern = /^(.)\1+$/;
    if (pass.length < 6 || easyPattern.test(pass)) {
        alert("ভুল পাসওয়ার্ড! কমপক্ষে ৬ অক্ষরের পাসওয়ার্ড দিন।");
        return false;
    }
    return true;
}

function makeReferCode(name) {
    return name.substring(0, 3).toUpperCase() + Math.floor(1000 + Math.random() * 9000);
}

function loadAllWork() {
    let container = document.getElementById('mainContent');
    container.innerHTML = "<h2>সকল কাজ</h2>";
    
    db.ref('tasks').on('value', (snap) => {
        if (!snap.exists()) {
            container.innerHTML += "<p>কোনো টাস্ক পাওয়া যায়নি। এডমিন থেকে অ্যাড করুন।</p>";
            return;
        }
        snap.forEach((child) => {
            let task = child.val();
            container.innerHTML += `
                <div class="task-card" style="background: white; margin: 15px; padding: 15px; border-radius: 10px; border-left: 6px solid #2196F3; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <h3 style="color:#1a237e;">টাস্ক নাম্বার ${child.key}</h3>
                    <div style="font-size: 14px; color: #555; background:#f9f9f9; padding:10px; border-radius:8px;">
                        <p>🎥 রেজিস্ট্রেশন ভিডিও: <a href="${task.v1}" target="_blank">দেখুন</a></p>
                        <p>🛠️ কাজ করার ভিডিও: <a href="${task.v2}" target="_blank">দেখুন</a></p>
                        <p>💰 উইথড্র ভিডিও: <a href="${task.v3 || '#'}" target="_blank">দেখুন</a></p>
                        <p>📱 ওয়ালেট নম্বর: <b>${task.wallet}</b></p>
                    </div>
                    <button style="background:#28a745; color:white; border:none; padding:10px; width:100%; border-radius:5px; margin-top:10px; cursor:pointer;">কাজ শুরু করুন</button>
                </div>
            `;
        });
    });
}
