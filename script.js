// Smooth scroll
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // empêche le saut brutal
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".project-card .btn").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const projects = [
                {
                    title: "Application de gestion",
                    desc: "Application web en Flask permettant la gestion des membres, finances et activités d'une église.",
                    video: "videos/shammah_demo.mp4",
                    link: "https://github.com/JRMosey"
                },
                {
                    title: "BetZone",
                    desc: "Application mobile en Java simulant la logique des paris sportifs. Travail en cours d'amélioration.",
                    video: "videos/BetZone-demo.mp4",
                    link: "https://github.com/JRMosey"
                },
                {
                    title: "Crypto Trade",
                    desc: "Site web PHP/JS pour l'achat/vente des cryptomonnaies avec historique des prix et portefeuille virtuel.",
                    video: "videos/crypto_trade-demo.mp4",
                    link: "https://github.com/JRMosey"
                }
            ];

            const p = projects[index];
            document.getElementById("modal-title").textContent = p.title;
            document.getElementById("modal-desc").textContent = p.desc;
            document.getElementById("modal-video").src = p.video;
            document.getElementById("modal-link").href = p.link;

            modal.style.display = "flex";
        });
    });

    // Fermer modal
    closeBtn.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });
});
