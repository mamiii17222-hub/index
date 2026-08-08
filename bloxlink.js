// Basit ve çalışan Bloxlink JS (Modal, Buton, Mobil Menü)
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Modal (Açılır Pencere) Kontrolleri ---
    const modal = document.getElementById('verificationModal');
    const modalContent = document.getElementById('modalContent');
    const closeModalBtn = document.getElementById('closeModal');
    const verifyButtons = document.querySelectorAll('#verify'); // Hem hero hem footer butonları

    // Modal'ı Açan Fonksiyon
    function openModal() {
        if (!modal) return;
        modal.classList.remove('hidden');
        // İçeriğe animasyon ekle
        if (modalContent) {
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
        }
        // Iframe'e örnek bir URL ekleyelim (isteğe bağlı, gerçek linki ekleyebilirsin)
        const frame = document.getElementById('verificationFrame');
        if (frame && !frame.src) {
            frame.src = 'https://example.com'; // Buraya gerçek doğrulama linkini koy
        }
    }

    // Modal'ı Kapatan Fonksiyon
    function closeModal() {
        if (!modal) return;
        if (modalContent) {
            modalContent.classList.add('scale-95', 'opacity-0');
            modalContent.classList.remove('scale-100', 'opacity-100');
        }
        // Animasyon bitince gizle
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 200); // 200ms, CSS'deki transition ile uyumlu
    }

    // Kapatma butonuna tıkla
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Modal dışına tıkla (arka plana)
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // ESC tuşuna basınca kapat
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // Tüm "Get Verified" butonlarına tıkla
    verifyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Input'daki kullanıcı adını al (isteğe bağlı)
            const usernameInput = document.getElementById('username');
            if (usernameInput && usernameInput.value.trim() === '') {
                // Boşsa uyarabilirsin ama şimdilik modalı aç
                // alert('Lütfen Roblox kullanıcı adını girin.');
                // return;
            }
            openModal();
        });
    });

    // --- 2. Mobil Menü (Hamburger) ---
    const mobileMenuButton = document.querySelector('.md\\:hidden .cursor-pointer');
    const mobileMenuDropdown = document.querySelector('.z-10.absolute.right-0.mt-2');

    if (mobileMenuButton && mobileMenuDropdown) {
        mobileMenuButton.addEventListener('click', function() {
            // Görünürlüğü toggle et
            if (mobileMenuDropdown.classList.contains('invisible')) {
                mobileMenuDropdown.classList.remove('invisible');
                mobileMenuDropdown.classList.add('visible');
            } else {
                mobileMenuDropdown.classList.add('invisible');
                mobileMenuDropdown.classList.remove('visible');
            }
        });
    }

    // Menü dışına tıklayınca menüyü kapat
    document.addEventListener('click', function(e) {
        if (mobileMenuButton && mobileMenuDropdown) {
            if (!mobileMenuButton.contains(e.target) && !mobileMenuDropdown.contains(e.target)) {
                mobileMenuDropdown.classList.add('invisible');
                mobileMenuDropdown.classList.remove('visible');
            }
        }
    });

    console.log('Bloxlink JS başarıyla yüklendi! 🚀');
});
