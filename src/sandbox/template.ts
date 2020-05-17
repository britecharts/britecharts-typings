export const buildTemplate = (containerId: string): string => `
<div id="app">
    <h1>Britecharts TypeScript Sandbox</h1>
    <div class="app-container">
        <section id="${containerId}"></section>
    </div>
</div>
`;
