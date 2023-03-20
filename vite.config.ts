import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { effectPlugin } from '@effect-app/compiler/vitePlugin2';

export default defineConfig({
	plugins: [effectPlugin(), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
