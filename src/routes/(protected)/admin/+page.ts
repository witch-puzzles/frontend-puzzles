import { userService } from "$lib/UserService";
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  try {
    const isAdmin = await userService.amIAdmin();
    if (!isAdmin) {
      redirect(308, "/");
    }
  } catch (err: any) {
    redirect(308, "/");
  }
};
