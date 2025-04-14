
export interface ComponentStatus {
  name: string;
  progress: number;
  status: 'planned' | 'in-progress' | 'completed' | 'blocked';
}

export interface ImplementationPhase {
  phase: string;
  description: string;
  status: 'planned' | 'in-progress' | 'completed' | 'blocked';
  timeline: string;
}

export interface GapAnalysisItem {
  gap: string;
  component: string;
  priority: 'High' | 'Medium' | 'Low';
  status: string;
}

export interface ServiceCategory {
  title: string;
  description: string;
  suppliers: string[];
}
