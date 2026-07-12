// Universe rendering logic
document.addEventListener('DOMContentLoaded', () => {
    // Determine which universe we are on based on file name or data attr
    const path = window.location.pathname;
    const filename = path.split('/').pop().replace('.html', '');
    const data = typeof multiverseData !== 'undefined' ? multiverseData[filename] : null;

    if (data) {
        document.title = data.title + ' - Multiverse Hub';
        
        const heroBg = document.getElementById('universe-hero-bg');
        if (heroBg) heroBg.src = data.heroImage;
        
        const titleEl = document.getElementById('universe-title');
        if (titleEl) {
            titleEl.textContent = data.title;
            titleEl.style.textShadow = `0 0 20px ${data.bg}`;
            titleEl.style.color = data.bg;
        }

        const descEl = document.getElementById('universe-desc');
        if (descEl) descEl.textContent = data.desc;

        const charGrid = document.getElementById('universe-characters');
        if (charGrid && data.characters) {
            data.characters.forEach(char => {
                const card = document.createElement('div');
                card.className = 'glass-card fade-up';
                card.innerHTML = `
                    <h3 style="color: ${data.bg}; margin-bottom: 0.5rem">${char.name}</h3>
                    <p style="color: #aaa; margin-bottom: 1rem; font-size: 0.9rem;">${char.desc}</p>
                    <div style="margin-bottom: 10px;">
                        <div style="display:flex;justify-content:space-between;font-size:0.8rem"><span>Power</span><span>${char.powers}</span></div>
                        <div style="width:100%; height:6px; background:#222; border-radius:3px; overflow:hidden;">
                            <div style="width:${char.powers}%; height:100%; background:${data.bg}; box-shadow: 0 0 10px ${data.bg}"></div>
                        </div>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <div style="display:flex;justify-content:space-between;font-size:0.8rem"><span>Speed</span><span>${char.speed}</span></div>
                        <div style="width:100%; height:6px; background:#222; border-radius:3px; overflow:hidden;">
                            <div style="width:${char.speed}%; height:100%; background:var(--neon-blue);"></div>
                        </div>
                    </div>
                    <p style="font-size: 0.8rem; color:#ff4444; margin-top:1rem;"><strong>Weakness:</strong> ${char.weak}</p>
                `;
                charGrid.appendChild(card);
            });
        }
    }
});
