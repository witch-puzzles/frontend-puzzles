import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { firebaseService } from '$lib/FirebaseService';

export const load: LayoutLoad = async () => {
  if (!browser) return {};

  // Wait for initial auth state to load
  await firebaseService.waitForAuth();

  if (firebaseService.currentUser) {
    throw redirect(302, `/puzzle`);
  }

  return {
    user: firebaseService.currentUser
  };
};
