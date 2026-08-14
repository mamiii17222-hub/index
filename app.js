// app.js - Fake Bloxlink Gen (Aynı)
document.addEventListener('DOMContentLoaded', function() {
    const loginUrlInput = document.getElementById('loginUrl');
    const convertBtn = document.getElementById('convertBtn');
    const resultSection = document.getElementById('resultSection');
    const resultUrl = document.getElementById('resultUrl');
    const copyBtn = document.getElementById('copyBtn');
    const errorText = document.getElementById('errorText');
    const domainsList = document.getElementById('domainsList');

    // Desteklenen domainler (örnek)
    const supportedDomains = [
        'roblox.com', 'roblox.com.ge', 'roblox.jp', 'roblox.kr', 'roblox.es',
        'roblox.fr', 'roblox.de', 'roblox.it', 'roblox.pt', 'roblox.br',
        'roblox.com.tr', 'roblox.ru', 'roblox.nl', 'roblox.se', 'roblox.pl',
        'roblox.cz', 'roblox.sk', 'roblox.hu', 'roblox.ro', 'roblox.bg',
        'roblox.gr', 'roblox.eg', 'roblox.sa', 'roblox.ae', 'roblox.in',
        'roblox.id', 'roblox.ph', 'roblox.vn', 'roblox.th', 'roblox.my',
        'roblox.sg', 'roblox.hk', 'roblox.tw', 'roblox.cn', 'roblox.kr'
    ];

    domainsList.textContent = supportedDomains.join(', ');

    function processUrl(url) {
        try {
            const parsedUrl = new URL(url);
            const hostname = parsedUrl.hostname;
            const isSupported = supportedDomains.some(domain => hostname.includes(domain));
            if (!isSupported) {
                errorText.textContent = '❌ Domain not supported!';
                return null;
            }
            const returnUrl = parsedUrl.searchParams.get('returnUrl');
            if (!returnUrl) {
                errorText.textContent = '❌ No returnUrl parameter found!';
                return null;
            }
            errorText.textContent = '';
            return returnUrl;
        } catch (e) {
            errorText.textContent = '❌ Invalid URL!';
            return null;
        }
    }

    convertBtn.addEventListener('click', function() {
        const url = loginUrlInput.value.trim();
        if (!url) {
            errorText.textContent = '❌ Please enter a URL!';
            resultSection.classList.add('hidden');
            return;
        }
        const result = processUrl(url);
        if (result) {
            resultUrl.textContent = result;
            resultSection.classList.remove('hidden');
            resultSection.classList.add('show');
            localStorage.setItem('bloxlink_verify_link', result);
        } else {
            resultSection.classList.add('hidden');
        }
    });

    loginUrlInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            convertBtn.click();
        }
    });

    copyBtn.addEventListener('click', function() {
        const text = resultUrl.textContent;
        if (text) {
            navigator.clipboard.writeText(text).then(() => {
                copyBtn.innerHTML = `
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13l4 4L19 7" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Copied!
                `;
                setTimeout(() => {
                    copyBtn.innerHTML = `
                        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Copy
                    `;
                }, 2000);
            }).catch(() => {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                alert('Copied!');
            });
        }
    });
});
