'use server';

import { createAdminClient } from '@/config/appwrite';
import { revalidatePath } from 'next/cache';

async function getSingleRoom(id) {
  try {
    const client = await createAdminClient();

    const room = await client.databases.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      id
    );

    return room;
  } catch (error) {
    console.error('Failed to get room:', error.message);
    return [];
  }
}

// Separate revalidation action
export async function revalidateRooms() {
  'use server';
  revalidatePath('/', 'layout');
}

export default getSingleRoom;
