
export interface EducationMaterial {
  id: number;
  title: string;
  type: string;
  category: string;
  duration: string;
  lastUpdated: string;
  popular?: boolean;
}

export interface EducationAssignment {
  id: number;
  client: string;
  material: string;
  assignedDate: string;
  status: string;
  progress: number;
  dueDate: string;
}

export interface ClientHealthTopic {
  client: string;
  topics: string[];
  recentAssignments: number;
  preferredFormat: string;
}

export interface TopicTrend {
  topic: string;
  count: number;
}

export interface ClientRecommendation {
  client: string;
  resources: {
    title: string;
    type: string;
  }[];
}
