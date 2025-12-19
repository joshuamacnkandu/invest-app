// 1. Load Projects into the "Product" Page
fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        const projectList = document.getElementById('project-list');
        projectList.innerHTML = ''; // Clear loading text
        
        data.forEach(project => {
            const card = document.createElement('div');
            // Using your sleek card styles
            card.style.background = 'rgba(255, 255, 255, 0.05)';
            card.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            card.style.borderRadius = '15px';
            card.style.padding = '20px';
            card.style.marginBottom = '20px';
            
            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span style="color: #4cc9f0; font-size: 12px;">${project.category}</span>
                    <span style="color: #4cc9f0; font-weight: bold;">${project.roi || project.roi_percent}% ROI</span>
                </div>
                <h3 style="margin: 0;">${project.title}</h3>
                <p style="color: #778da9; font-size: 14px;">${project.description}</p>
                <button onclick="invest('${project.title}', '${project.min_investment}')" 
                        style="background: #4cc9f0; border: none; color: #000; padding: 10px 20px; border-radius: 8px; font-weight: bold; width: 100%; cursor: pointer;">
                    Invest ${project.min_investment}
                </button>
            `;
            projectList.appendChild(card);
        });
    });

// 2. Investment Logic (Updates the Wallet/Portfolio)
function invest(title, amount) {
    // Show a success message
    alert("Invested " + amount + " in " + title + "!");
    
    // Update the Wallet Balance (Visual only for now)
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = amount; 
    balanceElement.style.color = "#4cc9f0";
}