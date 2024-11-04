export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specifications: Record<string, string>;
  availability: boolean;
}

export interface RFQFormData {
  productId: string;
  quantity: number;
  projectType: string;
  timeline: string;
  requirements: string;
  contactInfo: {
    name: string;
    email: string;
    company: string;
    phone: string;
  };
}