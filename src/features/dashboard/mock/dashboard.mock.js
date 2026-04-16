// ─────────────────────────────────────────────────────────────
//  dashboard.mock.js — fake data that mirrors Spring Boot response
//  Shape must match ENDPOINTS.DASHBOARD.* real responses exactly.
//  When you switch to real API, only dashboard.repository.js changes.
// ─────────────────────────────────────────────────────────────

export const MOCK_STATS = {
  totalStudents:     42,
  totalClasses:      6,
  attendancePercent: 94,
  academicYear:      '2025–26',
};

export const MOCK_ANNOUNCEMENTS = [
  {
    id:   'a1',
    text: 'Annual Sports Day on 20 April — Submit student participation by 15 April.',
    date: '2026-04-10',
  },
  {
    id:   'a2',
    text: 'Parent-Teacher Meeting scheduled for 25 April. Please confirm attendance.',
    date: '2026-04-08',
  },
];

export const MOCK_OVERVIEW_CHART = [
  { month: 'Nov', present: 88, absent: 12 },
  { month: 'Dec', present: 75, absent: 25 },
  { month: 'Jan', present: 91, absent: 9  },
  { month: 'Feb', present: 85, absent: 15 },
  { month: 'Mar', present: 90, absent: 10 },
  { month: 'Apr', present: 94, absent: 6  },
];

export const MOCK_SUBJECT_PROGRESS = [
  { subject: 'Mathematics', percent: 88, color: '#4A7EE8' },
  { subject: 'Science',     percent: 74, color: '#22C78A' },
  { subject: 'English',     percent: 92, color: '#A855F7' },
  { subject: 'History',     percent: 61, color: '#F59E0B' },
];

export const MOCK_RECENT_STUDENTS = [
  { id: 's1', name: 'Aanya Sharma',   class: '8A', subject: 'Algebra',  score: 92, maxScore: 100, date: '2026-04-08' },
  { id: 's2', name: 'Rohan Mehta',    class: '8B', subject: 'Science',  score: 71, maxScore: 100, date: '2026-04-01' },
  { id: 's3', name: 'Priya Kulkarni', class: '8A', subject: 'English',  score: 85, maxScore: 100, date: '2026-03-25' },
  { id: 's4', name: 'Arjun Patil',    class: '8C', subject: 'History',  score: 48, maxScore: 100, date: '2026-03-18' },
  { id: 's5', name: 'Sneha Joshi',    class: '8A', subject: 'Maths',    score: 96, maxScore: 100, date: '2026-04-12' },
];

// Simulates network delay for realistic mock UX
export const mockDelay = (ms = 600) =>
  new Promise((resolve) => setTimeout(resolve, ms));