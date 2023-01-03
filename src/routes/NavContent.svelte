<script lang="ts">
	import { Box, Anchor, Text, Stack } from '@svelteuidev/core';
	export let isDark: boolean;
</script>

<Stack>
	<Box css={{ bc: isDark ? '$blue400' : '$blue50', p: '$mdPX', br: '$lg', userSelect: 'none' }}>
		<Anchor href='/'>Dota2 Rising Star</Anchor>
	</Box>
	<!-- <Anchor href="/">Home Page</Anchor>
	<Anchor href="/test">Test Page</Anchor> -->
	<Anchor href="/app">Svelte router link</Anchor>
</Stack>
