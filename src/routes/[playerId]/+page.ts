import type { PageLoad } from './$types';

export type PlayerProfile = {
  profile: Profile;
  solo_competitive_rank: number;
  competitive_rank: number;
  rank_tier: number;
  leaderboard_rank: number;
  mmr_estimate: MmrEstimate;
}

export type MmrEstimate = {
  estimate: number;
}

export type Profile = {
  account_id: number;
  personaname: string;
  name: string;
  plus: boolean;
  cheese: number;
  steamid: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  profileurl: string;
  last_login: string;
  loccountrycode: string;
  status: string;
  is_contributor: boolean;
  is_subscriber: boolean;
}

export const load = (async ({ fetch, params }) => {
  const res = await fetch(`https://tame-erin-sea-lion-tie.cyclic.app//profile//${params.playerId}`);
  const profile: PlayerProfile = await res.json();

  console.log(profile);

  return { profile };
}) satisfies PageLoad;