'use server';

import { createAdminClient } from '@/config/appwrite';
import { revalidatePath } from 'next/cache';

async function getAllRooms() {
  try {
    const client = await createAdminClient();

    const { documents } = await client.databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS
    );

    return documents;
  } catch (error) {
    console.error('Failed to get rooms:', error.message);
    return [];
  }
}

// Separate revalidation action
export async function revalidateRooms() {
  'use server';
  revalidatePath('/', 'layout');
}

export default getAllRooms;
