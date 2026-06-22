/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import uzmaAvatar from './assets/images/uzma_avatar_1782146161234.jpg';
import sanacoderAvatar from './assets/images/sanacoder_avatar_1782146137900.jpg';
import aishaAvatar from './assets/images/aisha_avatar_1782146183476.jpg';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  linkedinUrl: string;
  avatarUrl: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Websites' | 'Branding' | 'Social Media' | 'AI Videos' | 'Marketing Campaigns' | 'Content Writing';
  imageUrl: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  rating: number; // 4 or 5
  text: string;
  photoUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
}

// Data Sets
export const SERVICE_CATEGORIES: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Web Design & Development',
    description: 'We craft high-performance, responsive websites with premium user-experience layouts tailored to convert visitors into loyal clients.',
    items: [
      'Business Websites',
      'Portfolio Websites',
      'E-commerce Stores',
      'Landing Pages',
      'Website Redesign',
      'Website Maintenance'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven marketing campaigns engineered to increase visibility, attract lead prospects, and maximize advertising return-of-investment.',
    items: [
      'Social Media Marketing',
      'Facebook & Instagram Marketing',
      'Google Ads',
      'SEO Optimization',
      'Content Marketing',
      'Email Marketing'
    ]
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Distinctive visual identities and precise brand rules that communicate your core values and leave a memorable first impression.',
    items: [
      'Logo Design',
      'Brand Identity',
      'Brand Guidelines',
      'Business Cards',
      'Marketing Materials'
    ]
  },
  {
    id: 'social-design',
    title: 'Social Media Design',
    description: 'Stunning scroll-stopping post cards, carousels, and stories designed to engage your social audience on a daily basis.',
    items: [
      'Instagram Posts',
      'Facebook Posts',
      'LinkedIn Posts',
      'YouTube Thumbnails',
      'Story Designs',
      'Carousel Posts'
    ]
  },
  {
    id: 'ai-content',
    title: 'AI Content Creation',
    description: 'Leveraging cutting-edge generative AI models to build promotional video and audio campaigns with ultra-fast production speeds.',
    items: [
      'AI Generated Promotional Videos',
      'AI Product Videos',
      'AI Social Media Videos',
      'AI Voiceovers',
      'AI Image Generation',
      'AI Video Editing'
    ]
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Polished vector flyers, presentation slides, and booklets designed in alignment with your corporate guidelines.',
    items: [
      'Posters',
      'Flyers',
      'Banners',
      'Brochures',
      'Presentation Design'
    ]
  }
];

export const TRUST_PILLARS = [
  { title: "Professional Team", desc: "Expert marketers, programmers, and filmmakers who are industry specialists." },
  { title: "Creative Solutions", desc: "Tailored out-of-the-box digital concepts that set you apart from competitors." },
  { title: "Fast Delivery", desc: "Agile workflows and smart assets production ensuring prompt, on-time project launching." },
  { title: "Affordable Pricing", desc: "Premium quality digital products starting at transparent rates with flexible scopes." },
  { title: "SEO Optimized Work", desc: "Semantic structural code designed to rank high on popular search result engines." },
  { title: "Mobile Responsive Design", desc: "Pixel-perfect rendering on any screen, from small smartphones to massive desktops." },
  { title: "Dedicated Support", desc: "Direct, personal coordination lines open for troubleshooting, updates, and maintenance." },
  { title: "100% Client Satisfaction", desc: "A rigorous quality control loop featuring multiple iterations of client feedback." }
];

export const AGENCY_PROCESS = [
  { step: '01', title: 'Discovery & Strategy', desc: 'We coordinate via audio or text chat to gather your core objective parameters, analyze competitor landscapes, and map out target audience behaviors.' },
  { step: '02', title: 'Premium Design', desc: 'Crafting stunning UI mockups, high-fidelity landing pages, and interactive asset frames for absolute client visual approval.' },
  { step: '03', title: 'Development & Build', desc: 'Coding clean, highly semantic React interfaces and rendering ultra-fast digital components with responsive desktop-to-mobile scale ratios.' },
  { step: '04', title: 'Testing & Launch', desc: 'Running comprehensive browser compatibility audits, domain routing diagnostics, starting search ranking optimization, and publishing assets live.' }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Uzma Akhter',
    position: 'CEO / Founder',
    bio: 'Pioneering digital strategist with 10+ years of agency management. Driving the creative, high-growth vision of ADMA.',
    linkedinUrl: 'https://wa.me/923458903225',
    avatarUrl: uzmaAvatar
  },
  {
    id: 'team-2',
    name: 'SanaCoder',
    position: 'Lead Web Developer',
    bio: 'Fullstack developer specializing in React, dynamic interactive states, and high performance enterprise applications.',
    linkedinUrl: 'https://www.linkedin.com/in/sana-akhter-77341b378/',
    avatarUrl: sanacoderAvatar
  },
  {
    id: 'team-3',
    name: 'Aisha Rao',
    position: 'UI/UX Designer',
    bio: 'Passionate visual designer bringing elegant typography, responsive spacing, and premium color palettes to life.',
    linkedinUrl: 'https://wa.me/923458903225',
    avatarUrl: aishaAvatar
  },
  {
    id: 'team-4',
    name: 'Farhan Ali',
    position: 'Digital Marketing Specialist',
    bio: 'PPC professional managing Google Ads to create high-yielding ROAS scales and robust brand search ranks.',
    linkedinUrl: 'https://wa.me/923458903225',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'p-1',
    title: 'E-commerce Redefinition',
    category: 'Websites',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'A headless e-commerce store with animated custom filter layouts and supercharged page loads.',
    tags: ['React', 'Tailwind', 'E-commerce']
  },
  {
    id: 'p-2',
    title: 'Apex Financial Corporate Identity',
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Logo suite, metallic corporate cards, presentation decks, and full brand guideline manuals.',
    tags: ['Identity', 'Vector Guidelines', 'Logo Design']
  },
  {
    id: 'p-3',
    title: 'AI Commercial for Zen Cars',
    category: 'AI Videos',
    imageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Fully AI-generated product launch video featuring photorealistic car renders and synthetic voiceover.',
    tags: ['Sora Video API', 'AI Voiceover', 'Video Editing']
  },
  {
    id: 'p-4',
    title: 'Instagram Expansion Drive',
    category: 'Social Media',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600&h=400',
    description: '60 scroll-stopping typographic carousels and reels yielding +240% user engagement metrics.',
    tags: ['Carousels', 'Figma Wireframes', 'Social Media']
  },
  {
    id: 'p-5',
    title: 'SaaS Inbound Marketing Engine',
    category: 'Marketing Campaigns',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Integrated Google Search PPC, Retargeting Funnels, and personalized email outreach sequences.',
    tags: ['Google Ads', 'Funnel Design', 'PPC']
  },
  {
    id: 'p-6',
    title: 'FinTech Growth Narrative writing',
    category: 'Content Writing',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'SEO blog entries and long-tail landing page copy focused on digital conversion ratios.',
    tags: ['Copywriting', 'SEO Research', 'Blogs']
  },
  {
    id: 'p-7',
    title: 'Modern Architecture Portal',
    category: 'Websites',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'A smooth, ultra-minimal showcase page with transition animations for an upscale architectural firm.',
    tags: ['UX Design', 'Smooth Scroll', 'React']
  },
  {
    id: 'p-8',
    title: 'Cyber Security Promo Spot',
    category: 'AI Videos',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600&h=400',
    description: 'Cinematic promotional launch reel created strictly through generative text-to-video tools.',
    tags: ['AI Imagery', '3D Graphics', 'Premiere Pro']
  }
];

export const CLIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sarah Jenkins',
    company: 'Director at LuxeRetail',
    rating: 5,
    text: 'ADMA completely transformed our digital presence. Their web team redesigned our entire storefront, and the integrated SEO and AI promotional videos accelerated our conversion by 45%! The level of communication and quality was unmatched.',
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 't-2',
    name: 'Muhammad Ali',
    company: 'Founder of FitFlow Studio',
    rating: 5,
    text: 'Working with Asian Digital Marketing Agency has been a game-changer. Their social media post designs are pure art, and the Facebook ad campaign setup was outstanding. We received inquiries directly via WhatsApp within 48 hours of launch.',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 't-3',
    name: 'Emily Rose',
    company: 'Marketing VP at Vanguard Tech',
    rating: 4,
    text: 'Excellent collaboration on our branding guidelines and corporate video. They brought synthetic voiceovers and gorgeous animations together, saving us immense studio costs. Highly professional team and speedy deliveries!',
    photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What services does Asian Digital Marketing Agency provide?',
    answer: 'We provide dynamic, multi-tier web design & development, digital marketing campaigns (Google, Facebook, Instagram), full corporate branding, scroll-stopping social media assets, AI video content creation, and professional visual graphic design.'
  },
  {
    id: 'faq-2',
    question: 'How do we coordinate with your team during the project?',
    answer: 'We offer a dedicated support structure, enabling real-time communications. Our primary and fastest coordination takes place immediately over WhatsApp, alongside email threads and detailed strategy calls depending on project scope.'
  },
  {
    id: 'faq-3',
    question: 'What is your turnaround time for custom websites and branding?',
    answer: 'Standard landing pages and branding kits are delivered in 7 to 10 days. Comprehensive full-stack e-commerce systems, database integrations, or complicated campaigns generally take 3 to 4 weeks depending on customer feedback speeds.'
  },
  {
    id: 'faq-4',
    question: 'How does your AI Video content creation work?',
    answer: 'We deploy cutting-edge generative systems combined with our video editing experience to produce premium social ads, custom voiceovers, and product showcases in record speed. This bypasses high live-studio costs while delivering stunning, convert-focused, high-fidelity resolutions.'
  },
  {
    id: 'faq-5',
    question: 'Can you optimize our existing website for higher Search Engine ranks?',
    answer: 'Yes! We conduct thorough SEO Audits, optimize layout tags, compress image assets, boost structural speeds, and craft rich inbound content writing structured to rank you higher on Google search results.'
  }
];
