<script lang="ts">
	import { SvelteUIProvider } from '@svelteuidev/core';

	let isDark = false;
	let opened = false;
	function toggleTheme() {
		isDark = !isDark;
	}
	import { fns, AppShell, Navbar, Header, ShellSection } from '@svelteuidev/core';
	import HeadContent from './HeadContent.svelte';
	import NavContent from './NavContent.svelte';
	function toggleOpened() {
		opened = !opened;
	}
</script>

<SvelteUIProvider withGlobalStyles themeObserver={isDark ? 'dark' : 'light'}>
	<AppShell
		override={{
			main: {
				bc: isDark ? fns.themeColor('dark', 8) : fns.themeColor('gray', 0),
				color: isDark ? fns.themeColor('dark', 0) : 'black',
				ml: '0px !important'
			}
		}}
	>
		<Navbar
			slot="navbar"
			hidden={!opened}
			hiddenBreakpoint="sm"
			width={{ base: '100%', sm: 300 }}
			height={500}
			override={{ p: '$xsPX', bc: isDark ? fns.themeColor('dark', 7) : 'white' }}
		>
			<ShellSection grow>
				<NavContent {isDark} />
			</ShellSection>
		</Navbar>
		<Header
			slot="header"
			height={60}
			override={{ p: '$mdPX', bc: isDark ? fns.themeColor('dark', 7) : 'white' }}
		>
			<HeadContent {isDark} {opened} toggle={toggleTheme} toggleOpen={toggleOpened} />
		</Header>
		<slot>This is the main content</slot>
	</AppShell>
</SvelteUIProvider>
