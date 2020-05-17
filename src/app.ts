const buildTemplate = (): string => `
<div id="app">
<h1>Hello Message</h1>
</div>
`;

export default (window: Window) => {
  window.document.body.innerHTML = buildTemplate();
};
