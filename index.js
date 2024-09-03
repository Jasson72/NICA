function togglePopup1() {
    var popup = document.getElementById("popup1");
    var judul = document.getElementById("judul-utama");
    var tombol = document.getElementById("tombol-utama");
    popup.classList.add("active"); 
    judul.style.display = 'none';
    tombol.style.display = 'none';
}

