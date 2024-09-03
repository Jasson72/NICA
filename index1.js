function togglePopup(elementId) {
    var timeline = document.getElementById('timeline');

    // Menyembunyikan semua box deskripsi
    var deskripsiBoxes = document.getElementsByClassName('box-penjelasan');
    for (var i = 0; i < deskripsiBoxes.length; i++) {
        deskripsiBoxes[i].style.display = 'none';
    }

    if (elementId === 'timeline') {
        // Menampilkan kembali timeline
        timeline.style.display = 'block';

        // Cek apakah animasi sudah pernah dilakukan
        if (!localStorage.getItem('animationDone')) {
            // Menampilkan kotak satu per satu setelah tombol "Back" ditekan
            var allBoxes = document.getElementsByClassName('text-box');
            for (var i = 0; i < allBoxes.length; i++) {
                allBoxes[i].style.visibility = 'hidden';  // Menyembunyikan semua kotak

                // Mengatur jeda waktu untuk menampilkan kotak satu per satu
                (function(index) {
                    setTimeout(function() {
                        allBoxes[index].style.visibility = 'visible';
                    }, index * 500);  // Mengatur jeda waktu 500ms di antara kotak
                })(i);
            }
            
            // Tandai animasi sudah dilakukan
            localStorage.setItem('animationDone', 'true');
        } else {
            // Jika animasi sudah dilakukan, langsung tampilkan semua kotak
            var allBoxes = document.getElementsByClassName('text-box');
            for (var i = 0; i < allBoxes.length; i++) {
                allBoxes[i].style.visibility = 'visible';
            }
        }
    } else {
        // Menyembunyikan timeline dan menampilkan deskripsi yang dipilih
        timeline.style.display = 'none';
        document.getElementById(elementId).style.display = 'block';
    }
}
