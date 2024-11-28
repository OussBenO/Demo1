export function renderCommands(commands, container) {
    commands.forEach(cmd => {
        const commandElement = document.createElement('div');
        commandElement.className = 'command-card';
        commandElement.innerHTML = `
            <strong>${cmd.command}</strong>
            <p>${cmd.description}</p>
        `;
        container.appendChild(commandElement);
    });
}