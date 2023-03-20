<script lang="ts">
import type { Effect, Either, Option, Matcher } from '$lib/effect-common.js';
import { constant, tuple } from '$lib/effect-common.js';
import { onMount } from 'svelte';
import { multiply, increment } from '@effect/data/Number';
import type { PageData } from './$types';
export let data: PageData;

onMount(() => {
  const a = Option.some(9).map(increment).map(multiply);
  console.log(a);
  console.log(data);
});
</script>

<h1>Welcome to SvelteKit</h1>
<p>{JSON.stringify({ data })}</p>
