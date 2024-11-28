export function renderWorkflow(steps, container) {
    steps.forEach(step => {
        const stepElement = document.createElement('div');
        stepElement.className = 'workflow-step';
        stepElement.innerHTML = `
            <div class="step-number">${step.step}</div>
            <div class="step-content">
                <h3>${step.title}</h3>
                <p>${step.description}</p>
            </div>
        `;
        container.appendChild(stepElement);
    });
}