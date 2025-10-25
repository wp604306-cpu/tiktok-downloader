async function downloadVideo() {
    const tiktokUrl = document.getElementById("url").value;
    const status = document.getElementById("status");
    const preview = document.getElementById("preview");
    const downloadLink = document.getElementById("downloadLink");

    if (!tiktokUrl) {
        alert("Masukkan link TikTok!");
        return;
    }

    status.innerText = "Mengambil video...";
    preview.style.display = "none";
    downloadLink.style.display = "none";

    try {
        const res = await fetch(`https://api.tikwm.com/?url=${encodeURIComponent(tiktokUrl)}`);
        const data = await res.json();

        if (data.status === 200) {
            const videoUrl = data.data.play;

            preview.src = videoUrl;
            preview.style.display = "block";

            downloadLink.href = videoUrl;
            downloadLink.download = "tiktok_video.mp4";
            downloadLink.style.display = "inline";
            downloadLink.innerText = "Klik untuk download";

            status.innerText = "Video siap diunduh!";
        } else {
            status.innerText = "Gagal: " + data.msg;
        }
    } catch (err) {
        status.innerText = "Error: " + err.message;
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark");
    }
