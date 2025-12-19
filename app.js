// Load the projects from your JSON file
fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        const projectList = document.getElementById('project-list');
        
        data.forEach(project => {
            // Create a sleek dark card for each project
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <span style="color: #4cc9f0; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;">${project.category}</span>
                    <span class="roi-badge">${project.roi} ROI</span>
                </div>
                <h2 style="margin: 0 0 10px 0; color: white;">${project.title}</h2>
                <p style="color: #a0a0a0; margin-bottom: 20px;">${project.description}</p>
                <button class="invest-btn" onclick="invest('${project.title}', '${project.min_investment}')">
                    Invest ${project.min_investment}
                </button>
            `;
            projectList.appendChild(card);
        });
    });

// The Investment Logic
function invest(title, amount) {
    const portfolioList = document.getElementById('portfolio-list');
    
    // Remove the "No active investments" message if it's there
    if (portfolioList.innerHTML.includes("No active investments")) {
        portfolioList.innerHTML = '';
    }

    const item = document.createElement('div');
    item.style.padding = '10px';
    item.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
    item.innerHTML = `
        <div style="font-weight: bold; color: #4cc9f0;">${title}</div>
        <div style="font-size: 0.9rem; opacity: 0.7;">Active Asset: ${amount}</div>
    `;
    portfolioList.appendChild(item);
    
    alert("Investment Successful! Check your digital assets.");
}