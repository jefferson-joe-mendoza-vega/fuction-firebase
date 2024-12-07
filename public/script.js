document.getElementById("getData").addEventListener("click", async () => {
    try {
        const response = await fetch('/.netlify/functions/api/hello');
        const data = await response.json();
        document.getElementById("response").textContent = data.message;
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
});
