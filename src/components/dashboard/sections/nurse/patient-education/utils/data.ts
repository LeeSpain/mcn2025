
import { EducationMaterial, EducationAssignment, ClientHealthTopic, TopicTrend, ClientRecommendation } from './types';

// Sample education materials
export const educationMaterials: EducationMaterial[] = [
  { 
    id: 1, 
    title: 'Understanding Diabetes Management', 
    type: 'Video', 
    category: 'Chronic Disease', 
    duration: '8 min', 
    lastUpdated: '2 weeks ago',
    popular: true
  },
  { 
    id: 2, 
    title: 'Medication Adherence Tips', 
    type: 'Article', 
    category: 'Medication', 
    duration: '5 min read', 
    lastUpdated: '1 month ago',
    popular: true
  },
  { 
    id: 3, 
    title: 'Heart Health Basics', 
    type: 'Interactive', 
    category: 'Cardiovascular', 
    duration: '10 min', 
    lastUpdated: '2 months ago',
    popular: false
  },
  { 
    id: 4, 
    title: 'Fall Prevention at Home', 
    type: 'PDF Guide', 
    category: 'Safety', 
    duration: '7 min read', 
    lastUpdated: '3 weeks ago',
    popular: true
  },
  { 
    id: 5, 
    title: 'Nutrition for Seniors', 
    type: 'Video', 
    category: 'Nutrition', 
    duration: '12 min', 
    lastUpdated: '1 week ago',
    popular: false
  },
  { 
    id: 6, 
    title: 'Managing Blood Pressure', 
    type: 'Article', 
    category: 'Cardiovascular', 
    duration: '6 min read', 
    lastUpdated: '2 weeks ago',
    popular: false
  },
];

// Sample education assignments
export const educationAssignments: EducationAssignment[] = [
  { 
    id: 1, 
    client: 'Elizabeth Wilson', 
    material: 'Understanding Diabetes Management', 
    assignedDate: 'Jun 2, 2023', 
    status: 'Completed', 
    progress: 100,
    dueDate: 'Jun 8, 2023'
  },
  { 
    id: 2, 
    client: 'Robert Johnson', 
    material: 'Medication Adherence Tips', 
    assignedDate: 'Jun 3, 2023', 
    status: 'In Progress', 
    progress: 60,
    dueDate: 'Jun 10, 2023'
  },
  { 
    id: 3, 
    client: 'Patricia Davis', 
    material: 'Heart Health Basics', 
    assignedDate: 'Jun 5, 2023', 
    status: 'Not Started', 
    progress: 0,
    dueDate: 'Jun 12, 2023'
  },
  { 
    id: 4, 
    client: 'James Miller', 
    material: 'Fall Prevention at Home', 
    assignedDate: 'Jun 1, 2023', 
    status: 'Completed', 
    progress: 100,
    dueDate: 'Jun 8, 2023'
  },
];

// Sample client health topics
export const clientHealthTopics: ClientHealthTopic[] = [
  {
    client: 'Elizabeth Wilson',
    topics: ['Diabetes', 'Hypertension', 'Medication Management'],
    recentAssignments: 3,
    preferredFormat: 'Video'
  },
  {
    client: 'Robert Johnson',
    topics: ['Heart Health', 'Fall Prevention', 'Pain Management'],
    recentAssignments: 2,
    preferredFormat: 'Article'
  },
  {
    client: 'Patricia Davis',
    topics: ['Arthritis', 'Nutrition', 'Sleep Management'],
    recentAssignments: 1,
    preferredFormat: 'Interactive'
  },
  {
    client: 'James Miller',
    topics: ['COPD', 'Oxygen Therapy', 'Exercise'],
    recentAssignments: 2,
    preferredFormat: 'PDF Guide'
  },
];

// Sample data for charts
export const topicTrendsData: TopicTrend[] = [
  { topic: 'Diabetes', count: 4 },
  { topic: 'Heart Health', count: 3 },
  { topic: 'Medication', count: 5 },
  { topic: 'Fall Prevention', count: 2 },
  { topic: 'Nutrition', count: 3 },
  { topic: 'Exercise', count: 2 }
];

export const clientRecommendations: ClientRecommendation[] = [
  {
    client: 'Elizabeth Wilson',
    resources: [
      { title: 'Diabetes Management Daily Routine', type: 'Video' },
      { title: 'Medication Adherence Tips', type: 'Article' }
    ]
  },
  {
    client: 'Robert Johnson',
    resources: [
      { title: 'Heart Health Basics', type: 'Interactive' },
      { title: 'Fall Prevention at Home', type: 'PDF Guide' }
    ]
  }
];

export const topPerformers = [
  { client: 'Elizabeth Wilson', completion: '100%', assignments: 3 },
  { client: 'James Miller', completion: '100%', assignments: 2 },
  { client: 'Robert Johnson', completion: '75%', assignments: 4 }
];
