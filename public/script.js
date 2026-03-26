async function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    let data = await res.json();

    if (data.success) {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Invalid Login!";
    }
}

async function getResult() {
    let roll = document.getElementById("roll").value;

    let res = await fetch(`/result/${roll}`);
    let data = await res.json();

    let box = document.getElementById("resultBox");

    if (data.error) {
        box.innerHTML = "❌ Result Not Found!";
    } else {
        box.innerHTML = `
            <h3>${data.name}</h3>
            <table border="1" width="100%">
                <tr><th>Subject</th><th>Marks</th></tr>
                <tr><td>Math</td><td>${data.math}</td></tr>
                <tr><td>Science</td><td>${data.science}</td></tr>
                <tr><td>English</td><td>${data.english}</td></tr>
            </table>
        `;
    }
}