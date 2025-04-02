document.addEventListener("DOMContentLoaded", () => {
    let visitas = localStorage.getItem("visitas");

    if (!visitas) {
        visitas = 0;
    }

    visitas++;
    
    localStorage.setItem("visitas", visitas);

    document.getElementById("contador").textContent = visitas;

    document.getElementById("resetBtn").addEventListener("click", () => {
        document.getElementById("contador").textContent = 1; 
        localStorage.setItem("visitas", 0); 
    });
});