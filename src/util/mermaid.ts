import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  flowchart: {
    padding: 10,
    nodeSpacing: 30,
    rankSpacing: 40,
  },
  securityLevel: 'strict',
});

export default mermaid;
