<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EarnHub - Welcome</title>
    <style>
        body { font-family: sans-serif; display: flex; flex-direction: column; align-items: center; background: #f4f7f6; margin: 0; }
        .top-card { background: white; width: 90%; max-width: 400px; margin: 20px; border-radius: 15px; padding: 15px; display: none; box-shadow: 0 4px 10px rgba(0,0,0,0.1); border-left: 5px solid #ffc107; align-items: center; }
        .top-card img { width: 60px; height: 60px; border-radius: 50%; margin-right: 15px; border: 2px solid #ffc107; object-fit: cover; }
        .login-box { background: white; padding: 30px; border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); width: 80%; max-width: 350px; text-align: center; margin-top: 50px; }
        input { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ddd; border-radius: 5px; box-sizing: border-box; }
        .btn { background: #1a237e; color: white; border: none; padding: 12px; width: 100%; border-radius: 5px; cursor: pointer; font-weight: bold; }
    </style>
</head>
<body>

<div id="topReferrerCard" class="top-card">
    <img id="topImg" src="" alt="Winner">
    <div>
        <h4 id="topName" style="margin:0;">সেরা রেফারার</h4>
        <p id="topAbout" style="font-size:12px; margin:5px 0; color:#666;"></p>
        <b style="color:#28a745; font-size:12px;">🏆 মাসিক সেলারি বিজয়ী</b>
    </div>
</div>

<div class="login-box">
    <h2 style="color:#1a237e;">EarnHub লগইন</h2>
    <input type="text" id="username" placeholder="ইউজারনেম">
    <input type="password" id="password" placeholder="পাসওয়ার্ড">
    <button class="btn" onclick="location.href='dashboard.html'">লগইন করুন</button>
</div>

<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>
<script src="script.js"></script>
<script>
    // ডাটাবেস থেকে সেরা রেফারার এর ডাটা আনা
    db.ref('settings/topReferrer').on('value', (snap) => {
        const data = snap.val();
        if(data) {
            document.getElementById('topImg').src = data.img;
            document.getElementById('topName').innerText = data.name;
            document.getElementById('topAbout').innerText = data.about;
            document.getElementById('topReferrerCard').style.display = 'flex';
        }
    });
</script>
</body>
</html>
