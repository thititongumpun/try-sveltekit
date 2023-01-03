import type { PageLoad } from './$types';

export type Players = {
	playerId: number;
	playerName: string;
	avatar: string;
	wl?: Wl;
};

export type Wl = {
	win: number;
	lose: number;
};

export const load = (async ({ fetch }) => {
	const res = await fetch(`https://tame-erin-sea-lion-tie.cyclic.app/stats`);
	const players: Players[] = await res.json();

	return { players };
}) satisfies PageLoad;
