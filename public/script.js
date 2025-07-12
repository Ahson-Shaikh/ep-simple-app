// Health check function
async function checkHealth() {
    const statusElement = document.getElementById('health-status');
    
    // Show loading state
    statusElement.className = 'health-status loading';
    statusElement.textContent = 'Checking server health...';
    
    try {
        const response = await fetch('/api/health');
        const data = await response.json();
        
        if (response.ok) {
            statusElement.className = 'health-status success';
            statusElement.innerHTML = `
                <strong>✅ Server is healthy!</strong><br>
                Status: ${data.status}<br>
                Message: ${data.message}<br>
                Time: ${new Date(data.timestamp).toLocaleString()}
            `;
        } else {
            throw new Error(`Server responded with ${response.status}`);
        }
    } catch (error) {
        statusElement.className = 'health-status error';
        statusElement.innerHTML = `
            <strong>❌ Health check failed</strong><br>
            Error: ${error.message}
        `;
    }
}

// Add some interactive animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate features on page load
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            feature.style.transition = 'all 0.5s ease';
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Add click effect to button
    const button = document.querySelector('.btn');
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
    });
}); 