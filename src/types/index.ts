export type Installer = {
  id: string;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'Lead' | 'Installer' | 'Training';
  joinedDate: string;
};

export type InstallerStats = {
  totalInstallations: number;
  averageInstallTime: number; // in minutes
  filmUsage: number; // in square feet
  revenueGenerated: number;
  certifications: number;
  qualityScore?: number;
  trainingProgress?: number;
};

export type Installation = {
  id: string;
  date: string;
  customerName: string;
  vehicleInfo: string;
  installer: {
    id: string;
    name: string;
  };
  status: 'completed' | 'in-progress' | 'needs-recut';
  totalArea: number;
  cuts: Cut[];
  notes?: string;
  createdAt: string;
  updatedAt: string;
  qualityChecks?: QualityCheck[];
  defectReports?: DefectReport[];
};

export type Cut = {
  id: string;
  installationId: string;
  panelName: string;
  squareFeet: number;
  rollId: string;
  filmType: string;
  status: 'completed' | 'recut' | 'failed';
  recutReason?: string;
  createdAt: string;
};

// Re-export quality types for convenience
export type {
  QualityCheck,
  ChecklistItem,
  DefectReport,
  WarrantyClaim,
  QualityMetrics,
  InstallationStandard,
} from './quality';