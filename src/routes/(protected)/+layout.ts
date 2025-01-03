import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { firebaseService } from '$lib/FirebaseService.svelte';

export const load: LayoutLoad = async ({ url }) => {
  if (!browser) return {};

  // Wait for initial auth state to load
  await firebaseService.waitForAuth();

  if (!firebaseService.currentUser) {
    throw redirect(302, `/login?redirectTo=${url.pathname}`);
  }

  return {
    user: firebaseService.currentUser
  };
};
