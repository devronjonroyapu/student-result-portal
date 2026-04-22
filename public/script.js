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
    let box = document.getElementById("resultBox");

    box.innerHTML = "⏳ Loading...";

    let res = await fetch(`/result/${roll}`);
    let data = await res.json();

    if (data.error) {
        box.innerHTML = `<p style="color:red;">❌ Result Not Found!</p>`;
    } else {
        let total = data.math + data.science + data.english;
        let avg = (total / 3).toFixed(2);

        box.innerHTML = `
            <h3>${data.name}</h3>
            <table>
                <tr><th>Subject</th><th>Marks</th></tr>
                <tr><td>Math</td><td>${data.math}</td></tr>
                <tr><td>Science</td><td>${data.science}</td></tr>
                <tr><td>English</td><td>${data.english}</td></tr>
                <tr><th>Total</th><th>${total}</th></tr>
                <tr><th>Average</th><th>${avg}</th></tr>
            </table>
        `;
    }
}