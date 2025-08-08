async function askAI() {
    const provider = document.getElementById("provider").value;
    const prompt = document.getElementById("prompt").value;
    const responseDiv = document.getElementById("response");
    responseDiv.textContent = "Thinking...";

    try {
        const res = await fetch("https://friday-ear-permissions.onrender.com/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ provider, prompt })
        });
        const data = await res.json();
        if (data.response) {
            responseDiv.textContent = data.response;
        } else if (data.error) {
            responseDiv.textContent = "Error: " + data.error;
        } else {
            responseDiv.textContent = "Unexpected response";
        }
    } catch (err) {
        responseDiv.textContent = "Request failed: " + err.message;
    }
}