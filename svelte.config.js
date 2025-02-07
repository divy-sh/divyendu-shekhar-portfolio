import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';

export default {
  output: {
    dir: 'public',
  },
  preprocess: [vitePreprocess()],
  kit: {
	adapter: adapter()
	}
};