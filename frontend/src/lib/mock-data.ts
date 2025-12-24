
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  status: 'active' | 'blocked';
  joinedDate: string;
}

export interface Card {
  id: string;
  userId: string;
  themeId: string;
  slug: string;
  data: {
    name: string;
    title: string;
    company: string;
    bio: string;
    email: string;
    phone: string;
    website: string;
    linkedin?: string;
    twitter?: string;
    avatarUrl: string;
  };
  stats: {
    views: number;
    clicks: number;
  };
}

export interface Template {
  id: string;
  name: string;
  thumbnail: string;
  type: 'modern' | 'classic';
}

export const MOCK_USERS: User[] = [
  {
    id: 'u1',
    name: 'Admin User',
    email: 'admin@mycard.com',
    role: 'admin',
    status: 'active',
    joinedDate: '2023-01-01',
  },
  {
    id: 'u2',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
    status: 'active',
    joinedDate: '2023-05-12',
  },
  {
    id: 'u3',
    name: 'Sarah Smith',
    email: 'sarah@design.co',
    role: 'user',
    status: 'active',
    joinedDate: '2023-06-20',
  },
];

export const MOCK_CARDS: Card[] = [
  {
    id: 'c1',
    userId: 'u2',
    themeId: 'dark',
    slug: 'john-doe',
    data: {
      name: 'John Doe',
      title: 'Senior Developer',
      company: 'Tech Solutions Inc.',
      bio: 'Building things for the web. Passionate about React and UI design.',
      email: 'john@example.com',
      phone: '+1 234 567 8900',
      website: 'https://johndoe.dev',
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    stats: {
      views: 1240,
      clicks: 85,
    },
  },
  {
    id: 'c2',
    userId: 'u3',
    themeId: 'creative',
    slug: 'sarah-design',
    data: {
      name: 'Sarah Smith',
      title: 'Creative Director',
      company: 'Studio A',
      bio: 'Helping brands tell their stories through visual design.',
      email: 'sarah@studio.a',
      phone: '+1 987 654 3210',
      website: 'https://studio.a',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    stats: {
      views: 890,
      clicks: 120,
    },
  },
];

export const MOCK_TEMPLATES: Template[] = [
  {
    id: 'modern-1',
    name: 'Modern Gradient',
    thumbnail: 'https://placehold.co/400x300/1e293b/ffffff?text=Modern+Gradient',
    type: 'modern',
  },
  {
    id: 'classic-1',
    name: 'Professional Clean',
    thumbnail: 'https://placehold.co/400x300/e2e8f0/1e293b?text=Professional+Clean',
    type: 'classic',
  },
];
