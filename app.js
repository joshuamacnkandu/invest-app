fetch('projects.json')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('project-container');
        data.forEach(p => {
            container.innerHTML += `
                <div class="col-12 mb-3">
                    <div class="card project-card p-3">
                        <span class="badge bg-primary w-25 mb-2">${p.category}</span>
                        <h5>${p.title}</h5>
                        <p class="small text-muted">${p.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="text-success fw-bold">${p.roi_percent}% ROI</span>
                            <button onclick="invest('${p.title}', ${p.min_investment})" class="btn btn-sm btn-primary">Invest $${p.min_investment}</button>
                        </div>
                    </div>
                </div>`;
        });
    });

function invest(name, amount) {
    const list = document.getElementById('portfolio-list');
    const stats = document.getElementById('total-stats');
    if (list.innerHTML.includes("No investments")) list.innerHTML = '';
    stats.classList.remove('d-none');
    list.innerHTML += `<div class="d-flex justify-content-between"><span>${name}</span><b>$${amount}</b></div>`;
    const totalEl = document.getElementById('total-amount');
    let total = parseInt(totalEl.innerText.replace('$', ''));
    totalEl.innerText = `$${total + amount}`;
}