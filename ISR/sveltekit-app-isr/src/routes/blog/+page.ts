// Remove client-side load since we're using server-side load with ISR
// The data fetching is now handled in +page.server.ts

// Re-export types for use in components
export type { Post, User } from './+page.server.js';
