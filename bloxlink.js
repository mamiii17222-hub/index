// TEMIZ BLOXLINK JS (Sadece mobil menu ve gerekli fonksiyonlar)
document.addEventListener('DOMContentLoaded', function() {

    // --- MOBIL MENU ---
    const menuBtn = document.querySelector('.md\\:hidden .cursor-pointer');
    const dropdown = document.querySelector('.z-10.absolute.right-0.mt-2');

    if (menuBtn && dropdown) {
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('invisible');
            dropdown.classList.toggle('visible');
        });

        // Menü dışına tıklanınca kapat
        document.addEventListener('click', function() {
            dropdown.classList.add('invisible');
            dropdown.classList.remove('visible');
        });
    }

    // --- MODAL (Eğer kullanılacaksa, temel fonksiyonlar) ---
    const modal = document.getElementById('verificationModal');
    const closeModalBtn = document.getElementById('closeModal');

    function closeModal() {
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // ESC tuşu ile kapatma
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    console.log('Bloxlink JS başarıyla yüklendi! 🚀');
});
