<script lang="ts">
	import { Container, Badge, Button, Card, Group, Image, Text, Center } from '@svelteuidev/core';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Container size="xs">
<Card shadow='sm' p='lg'>
	<Card.Section first padding='lg'>
    <Center>
		<Image
      src={data.profile.profile.avatarfull}
			height={160}
      width={'auto'}
      fit='cover'
			alt={data.profile.profile.personaname}
		/>
  </Center>
	</Card.Section>

	<Group position='apart'>
		<Text weight={500}>{data.profile.profile.personaname}</Text>
		<Badge color='pink' variant='light'>
			On Sale
		</Badge>
	</Group>

	<Text size='sm'>
		{data.profile.mmr_estimate.estimate}
	</Text>

	<Button variant='light' color='blue' fullSize>
		Book classic tour now
	</Button>
</Card>
</Container>
