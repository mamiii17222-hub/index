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
        if (modalContent) {
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
        }
        const frame = document.getElementById('verificationFrame');
        if (frame) {
            // ★★★ BURAYA KENDİ URL'Yİ YAZ ★★★ (Örnek: https://bloxlink.com/verify)
            frame.src = 'https://www.example.com/verify'; 
        }
    }

    // Modal'ı Kapatan Fonksiyon
    function closeModal() {
        if (!modal) return;
        if (modalContent) {
            modalContent.classList.add('scale-95', 'opacity-0');
            modalContent.classList.remove('scale-100', 'opacity-100');
        }
        setTimeout(() => {
            modal.classList.add('hidden');
            // İstersen iframe'i temizle (sayfa durmasın diye)
            // const frame = document.getElementById('verificationFrame');
            // if (frame) frame.src = '';
        }, 200);
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

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    verifyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // İstersen burada username input'unu kontrol edebilirsin
            // const usernameInput = document.getElementById('username');
            // if (usernameInput && usernameInput.value.trim() === '') {
            //     alert('Lütfen Roblox kullanıcı adını girin.');
            //     return;
            // }
            openModal();
        });
    });

    // --- 2. Mobil Menü (Hamburger) ---
    const mobileMenuButton = document.querySelector('.md\\:hidden .cursor-pointer');
    const mobileMenuDropdown = document.querySelector('.z-10.absolute.right-0.mt-2');

    if (mobileMenuButton && mobileMenuDropdown) {
        mobileMenuButton.addEventListener('click', function() {
            if (mobileMenuDropdown.classList.contains('invisible')) {
                mobileMenuDropdown.classList.remove('invisible');
                mobileMenuDropdown.classList.add('visible');
            } else {
                mobileMenuDropdown.classList.add('invisible');
                mobileMenuDropdown.classList.remove('visible');
            }
        });
    }

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
