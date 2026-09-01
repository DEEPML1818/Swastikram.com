export type CredentialCategory = 'certification' | 'accomplishment';
export type CredentialType = 'industry_cert' | 'career_track' | 'course';
export type ValidityStatus = 'Active' | 'Lifetime' | 'Expiring';

export interface CredentialItem {
  id: string;
  title: string;
  issuer: 'DataCamp' | 'Google' | string;
  category: CredentialCategory; // 'certification' (time-bound/renewable) vs 'accomplishment' (permanent)
  type: CredentialType;
  issueDate: string;
  expiryDate?: string;
  validityStatus: ValidityStatus;
  credentialId?: string; // e.g. "AIEDA0013900524031"
  credentialNumber?: string; // e.g. "#926,678"
  hours?: number;
  badgeImg?: string;
  thumbnailImg?: string;
  bannerImg?: string;
  linkedinBanner?: string;
  certImg?: string;
  pdfUrl?: string;
  verifyUrl?: string;
  skills: string[];
  featured?: boolean;
  description: string;
}

export const featuredCertification: CredentialItem = {
  id: 'datacamp-ai-engineer-associate',
  title: 'AI Engineer for Developers Associate',
  issuer: 'DataCamp',
  category: 'certification',
  type: 'industry_cert',
  credentialId: 'AIEDA0013900524031',
  issueDate: 'August 31, 2026',
  expiryDate: 'August 31, 2028 (2-Year Renewable)',
  validityStatus: 'Active',
  badgeImg: '/credentials/badges/aidev-badge.png',
  thumbnailImg: '/credentials/badges/aidev-thumbnail.png',
  bannerImg: '/credentials/banners/aidev-showcase-post.png',
  linkedinBanner: '/credentials/banners/aidev-linkedin-banner.png',
  certImg: '/credentials/certifications/datacamp-ai-engineer-associate.png',
  pdfUrl: '/credentials/certifications/datacamp-ai-engineer-associate.pdf',
  skills: [
    'LLM Integration',
    'Prompt Engineering',
    'RAG Architectures',
    'Vector Databases',
    'Python AI Stack',
    'System Optimization'
  ],
  featured: true,
  description: 'Official industry certification validating hands-on competence in architecting, integrating, and deploying production-grade Generative AI and LLM systems.'
};

export const industryCertifications: CredentialItem[] = [
  featuredCertification,
  {
    id: 'google-gemini-student',
    title: 'Gemini Certified Student',
    issuer: 'Google',
    category: 'certification',
    type: 'industry_cert',
    issueDate: 'Verified Credential',
    validityStatus: 'Active',
    badgeImg: '/badges/3f83c358-7987-43fe-b8bc-f93a40f0f918.png',
    verifyUrl: 'https://edu.google.accredible.com/719c4a85-c088-4306-a8ad-818c16c2c10d#acc.hQlCaLr6',
    skills: ['Gemini AI', 'Generative Workflows', 'Educational Tech'],
    description: 'Accredited by Google for demonstrated proficiency in Gemini AI capabilities, generative tools, and intelligent learning workflows.'
  },
  {
    id: 'google-educator-l2',
    title: 'Educator Level 2',
    issuer: 'Google',
    category: 'certification',
    type: 'industry_cert',
    issueDate: 'Verified Credential',
    validityStatus: 'Active',
    badgeImg: '/badges/8384a46b-5e98-41fc-8977-2ed934d35c5c.png',
    verifyUrl: 'https://edu.google.accredible.com/5dd79ca8-9fd1-4175-9d08-ae7ce402083c#acc.YMo4iuwK',
    skills: ['Advanced EdTech', 'Google Ecosystem', 'Pedagogical Systems'],
    description: 'Advanced credential demonstrating mastery of modern educational technology, system integration, and collaborative infrastructure.'
  },
  {
    id: 'google-educator-l1',
    title: 'Educator Level 1',
    issuer: 'Google',
    category: 'certification',
    type: 'industry_cert',
    issueDate: 'Verified Credential',
    validityStatus: 'Active',
    badgeImg: '/badges/aa1c214c-7e41-443e-bfb2-79e66b809140.png',
    verifyUrl: 'https://edu.google.accredible.com/20589127-0968-431d-9757-2923485f1ffd#acc.2G04fQr9',
    skills: ['EdTech Integration', 'Productivity Stacks', 'Digital Collaboration'],
    description: 'Standard certification validating expertise in deploying Google technology tools for effective digital collaboration.'
  },
  {
    id: 'google-gemini-faculty',
    title: 'Gemini Certified Faculty',
    issuer: 'Google',
    category: 'certification',
    type: 'industry_cert',
    issueDate: 'Verified Credential',
    validityStatus: 'Active',
    badgeImg: '/badges/ea2723b7-7487-4118-a140-0c219aa1150a.png',
    verifyUrl: 'https://edu.google.accredible.com/39002278-5ca5-4a33-8726-f6efe17746b7?key=48f9ad6e30f4f7b72e8303fc044e8f4ce705c93e6ff8ed0f525cfbe1c4532798#acc.JiVU0w5Q',
    skills: ['Faculty AI Strategy', 'Curriculum Innovation', 'Institutional AI'],
    description: 'Faculty-level accreditation for designing, instructing, and leading institutional adoption of Gemini AI solutions.'
  }
];

export const statementsOfAccomplishment: CredentialItem[] = [
  {
    id: 'datacamp-associate-python-developer',
    title: 'Associate Python Developer Career Track',
    issuer: 'DataCamp',
    category: 'accomplishment',
    type: 'career_track',
    credentialNumber: '#926,678',
    hours: 30,
    issueDate: 'August 30, 2026',
    validityStatus: 'Lifetime',
    pdfUrl: '/credentials/accomplishments/tracks/datacamp-associate-python-developer.pdf',
    skills: ['Python 3 Architecture', 'OOP', 'Data Structures', 'Testing & Pytest', 'Regex', 'Package Engineering'],
    featured: true,
    description: 'Rigorous 30-hour career track covering production software engineering principles, modular object-oriented design, test automation, and robust data structures in Python.'
  },
  {
    id: 'datacamp-intro-oop-python',
    title: 'Introduction to Object-Oriented Programming in Python',
    issuer: 'DataCamp',
    category: 'accomplishment',
    type: 'course',
    credentialNumber: '#49,600,767',
    hours: 3,
    issueDate: 'August 30, 2026',
    validityStatus: 'Lifetime',
    pdfUrl: '/credentials/accomplishments/courses/datacamp-intro-to-oop-in-python.pdf',
    skills: ['Classes & Instances', 'Inheritance & Polymorphism', 'Encapsulation'],
    description: 'Class design, object lifecycles, class/instance attributes, method overriding, and polymorphic interfaces.'
  },
  {
    id: 'datacamp-regex-python',
    title: 'Regular Expressions in Python',
    issuer: 'DataCamp',
    category: 'accomplishment',
    type: 'course',
    credentialNumber: '#49,579,388',
    hours: 4,
    issueDate: 'August 29, 2026',
    validityStatus: 'Lifetime',
    pdfUrl: '/credentials/accomplishments/courses/datacamp-regular-expressions-in-python.pdf',
    skills: ['RegEx Engines', 'Lookaheads & Lookbehinds', 'Greedy vs Lazy Matching', 'Pattern Tokenization'],
    description: 'Mastery of regex engines, quantifiers, capture groups, lookaround assertions, and complex string parsing.'
  },
  {
    id: 'datacamp-data-types-python',
    title: 'Data Types in Python',
    issuer: 'DataCamp',
    category: 'accomplishment',
    type: 'course',
    credentialNumber: '#49,499,728',
    hours: 4,
    issueDate: 'August 29, 2026',
    validityStatus: 'Lifetime',
    pdfUrl: '/credentials/accomplishments/courses/datacamp-data-types-in-python.pdf',
    skills: ['Collections & Itertools', 'Namedtuples & Counters', 'Hash Maps', 'Time Complexity'],
    description: 'High-performance container types, memory-efficient data structures, and advanced dictionary & set algorithms.'
  },
  {
    id: 'datacamp-intermediate-python',
    title: 'Intermediate Python',
    issuer: 'DataCamp',
    category: 'accomplishment',
    type: 'course',
    credentialNumber: '#24,691,842',
    hours: 4,
    issueDate: 'December 18, 2022',
    validityStatus: 'Lifetime',
    pdfUrl: '/credentials/accomplishments/courses/datacamp-intermediate-python.pdf',
    skills: ['Pandas DataFrames', 'Logic & Control Flow', 'Matplotlib Visualization'],
    description: 'Data exploration, tabular data filtering with Pandas, conditional execution, and multi-dimensional plotting.'
  },
  {
    id: 'datacamp-understanding-ml',
    title: 'Understanding Machine Learning',
    issuer: 'DataCamp',
    category: 'accomplishment',
    type: 'course',
    credentialNumber: '#24,643,066',
    hours: 2,
    issueDate: 'June 18, 2022',
    validityStatus: 'Lifetime',
    pdfUrl: '/credentials/accomplishments/courses/datacamp-understanding-machine-learning.pdf',
    skills: ['Supervised & Unsupervised ML', 'Model Evaluation & AUC', 'Bias-Variance Tradeoff'],
    description: 'Core machine learning intuition, classification vs regression models, feature selection, and metrics analysis.'
  },
  {
    id: 'datacamp-financial-trading-python',
    title: 'Financial Trading in Python',
    issuer: 'DataCamp',
    category: 'accomplishment',
    type: 'course',
    credentialNumber: '#24,063,529',
    hours: 4,
    issueDate: 'May 11, 2022',
    validityStatus: 'Lifetime',
    pdfUrl: '/credentials/accomplishments/courses/datacamp-financial-trading-in-python.pdf',
    skills: ['Quantitative Trading', 'Technical Indicators', 'Signal Backtesting', 'Time Series'],
    description: 'Algorithmic strategy construction, simple/exponential moving averages, momentum signals, and risk analytics.'
  },
  {
    id: 'datacamp-intro-python',
    title: 'Introduction to Python',
    issuer: 'DataCamp',
    category: 'accomplishment',
    type: 'course',
    credentialNumber: '#24,036,805',
    hours: 4,
    issueDate: 'April 28, 2022',
    validityStatus: 'Lifetime',
    pdfUrl: '/credentials/accomplishments/courses/datacamp-introduction-to-python.pdf',
    skills: ['Python Basics', 'NumPy Vectorization', 'Function Design'],
    description: 'Foundations of Python syntax, multidimensional NumPy arrays, vectorized operations, and script development.'
  }
];

export const allCredentials: CredentialItem[] = [
  ...industryCertifications,
  ...statementsOfAccomplishment
];
