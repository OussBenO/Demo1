import { gitCommands } from './data/gitCommands.js';
import { workflowSteps } from './data/workflowSteps.js';
import { resources } from './data/resources.js';
import { renderCommands } from './components/commandsRenderer.js';
import { renderWorkflow } from './components/workflowRenderer.js';
import { renderResources } from './components/resourcesRenderer.js';

document.addEventListener('DOMContentLoaded', () => {
    // Render Git commands
    const commandsContainer = document.querySelector('.commands-container');
    renderCommands(gitCommands, commandsContainer);

    // Render workflow steps
    const workflowContainer = document.querySelector('.workflow-steps');
    renderWorkflow(workflowSteps, workflowContainer);

    // Render resources
    const resourcesContainer = document.querySelector('.resources-list');
    renderResources(resources, resourcesContainer);
});