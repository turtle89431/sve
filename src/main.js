
import App from './components/App.svelte';

const app = new App({
  target: document.body,
  props: {
    appName: 'Turtle Chat',
  },
});

window.app = app;

export default app;
