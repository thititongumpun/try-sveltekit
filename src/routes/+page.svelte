<script lang="ts">
	import { SimpleGrid, Card, Image, Group, Text, Badge, Anchor } from '@svelteuidev/core';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<SimpleGrid cols={3}>
	{#each data.players as player}
		<Card shadow="sm" p="lg">
			<Card.Section first padding="sm">
				<Image src={player.avatar} height={160} alt={player.avatar} fit="cover" />
			</Card.Section>

			<Group position="apart">
				<Anchor href={player.playerId}>{player.playerName}</Anchor>
				<Badge color="pink" variant="light">Pro</Badge>
			</Group>

			<Text size="sm">
				win: {player.wl?.win}
			</Text>
			<Text size="sm">
				lose: {player.wl?.lose}
			</Text>
		</Card>
	{/each}
</SimpleGrid>
