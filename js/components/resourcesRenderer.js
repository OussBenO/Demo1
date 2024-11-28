export function renderResources(resources, container) {
    resources.forEach(resource => {
        const resourceElement = document.createElement('div');
        resourceElement.className = 'resource-item';
        resourceElement.innerHTML = `
            <h3><a href="${resource.url}" target="_blank">${resource.title}</a></h3>
            <p>${resource.description}</p>
        `;
        container.appendChild(resourceElement);
    });
}