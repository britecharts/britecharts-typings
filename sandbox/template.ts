export const buildTemplate = (containerId: string): string => `
<div id="app">
<h1>Hello Message</h1>
<div id="${containerId}"></div>
</div>
`;
