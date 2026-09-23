export interface JourneyStage {
  id: string;
  stageNumber: string;
  stageTitle: string;
  headline: string;
  description: string;
  details: string[];
  specs: { label: string; value: string }[];
  visualType: 'cotton' | 'yarn' | 'fabric' | 'cutting' | 'finishing' | 'delivery';
}

export interface ProductItem {
  id: string;
  number: string;
  name: string;
  category: 'Knitwear' | 'Fleece & Hoodies' | 'Bottoms' | 'Active & Specialty';
  gsm: string;
  composition: string;
  fit: string;
  moq: string;
  description: string;
  details: string[];
}

export interface CapabilityItem {
  number: string;
  title: string;
  description: string;
  specs: string;
  iconName: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
}

export interface ClientItem {
  id: string;
  code: string;
  market: string;
  segment: string;
}

export interface ValueItem {
  number: string;
  title: string;
  description: string;
}

export interface EnquiryFormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
}
