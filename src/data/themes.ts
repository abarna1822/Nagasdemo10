export interface StoreTheme {
  id: string;
  name: string;
  tagline: string;
  shortLabel: string;
  colors: {
    canvas: string;
    paper: string;
    primary: string;
    deep: string;
    mid: string;
    obsidian: string;
    script: string;
    highlight: string;
    ink: string;
    stone: string;
    tint: string;
    mist: string;
    heroWash: string;
    paperGrain: string;
  };
}

export const DEFAULT_THEME_ID = 'pomegranate-charcoal';

export const STORE_THEMES: StoreTheme[] = [
  {
    id: 'pomegranate-charcoal',
    name: 'Pomegranate & Smoked Charcoal',
    tagline: 'Bold Spice Bazaar · Sumac Crimson & Apricot Amber',
    shortLabel: 'Pomegranate',
    colors: {
      canvas: '#FAF7F2',
      paper: '#FFFDF9',
      primary: '#8C2318',
      deep: '#1D2024',
      mid: '#2D3238',
      obsidian: '#121417',
      script: '#A65214',
      highlight: '#EEAD50',
      ink: '#191A1C',
      stone: '#EAE7E1',
      tint: '#F3F0EA',
      mist: '#D5D1CA',
      heroWash: 'rgba(29, 32, 36, 0.28)',
      paperGrain: 'rgba(25, 26, 28, 0.03)',
    },
  },
  {
    id: 'tanjore-bronze',
    name: 'Tanjore Bronze & Obsidian Umber',
    tagline: 'Quiet Gallery Luxury · Aged Bronze & Pale Marigold',
    shortLabel: 'Tanjore Bronze',
    colors: {
      canvas: '#F9F7F3',
      paper: '#FFFDF9',
      primary: '#6E4726',
      deep: '#211A14',
      mid: '#33281F',
      obsidian: '#15100C',
      script: '#945D18',
      highlight: '#EDC158',
      ink: '#181512',
      stone: '#ECE7DF',
      tint: '#F4F0E9',
      mist: '#D9D0C3',
      heroWash: 'rgba(33, 26, 20, 0.28)',
      paperGrain: 'rgba(24, 21, 18, 0.03)',
    },
  },
  {
    id: 'midnight-mulberry',
    name: 'Midnight Mulberry & Rose Peach',
    tagline: 'Festive Couture · Deep Mulberry & Burnished Coral',
    shortLabel: 'Mulberry Peach',
    colors: {
      canvas: '#FCF8F6',
      paper: '#FFFDF9',
      primary: '#6B233D',
      deep: '#240D16',
      mid: '#381623',
      obsidian: '#16070D',
      script: '#9E3E52',
      highlight: '#EA9B80',
      ink: '#1E1217',
      stone: '#F0E6E4',
      tint: '#F7EFEA',
      mist: '#DFCCD0',
      heroWash: 'rgba(36, 13, 22, 0.28)',
      paperGrain: 'rgba(30, 18, 23, 0.03)',
    },
  },
  {
    id: 'coastal-slate',
    name: 'Coromandel Slate & Ginger Ochre',
    tagline: 'Coastal Heritage · Harbor Blue & Warm Ginger',
    shortLabel: 'Coastal Slate',
    colors: {
      canvas: '#F6F8F9',
      paper: '#FFFDF9',
      primary: '#284B63',
      deep: '#132634',
      mid: '#1D384C',
      obsidian: '#0B1721',
      script: '#9D6114',
      highlight: '#E9B349',
      ink: '#121C24',
      stone: '#E7ECEF',
      tint: '#EFF3F5',
      mist: '#CCD6DC',
      heroWash: 'rgba(19, 38, 52, 0.28)',
      paperGrain: 'rgba(18, 28, 36, 0.03)',
    },
  },
  {
    id: 'sandalwood-graphite',
    name: 'Sandalwood Clay & Forest Graphite',
    tagline: 'Monastic Earth · Baked Clay & Basalt Stone',
    shortLabel: 'Sandalwood',
    colors: {
      canvas: '#F8F5F0',
      paper: '#FFFDF9',
      primary: '#7A422B',
      deep: '#242926',
      mid: '#343C37',
      obsidian: '#161A18',
      script: '#9A5130',
      highlight: '#EAB56F',
      ink: '#1B1D1B',
      stone: '#EAE6DF',
      tint: '#F2EEE8',
      mist: '#D4CFC6',
      heroWash: 'rgba(36, 41, 38, 0.28)',
      paperGrain: 'rgba(27, 29, 27, 0.03)',
    },
  },
  {
    id: 'amethyst-citrine',
    name: 'Amethyst Fig & Champagne Citrine',
    tagline: 'Modern Spice Studio · Dusk Amethyst & Citrine',
    shortLabel: 'Amethyst Fig',
    colors: {
      canvas: '#F8F6FA',
      paper: '#FFFDF9',
      primary: '#49386B',
      deep: '#1D152E',
      mid: '#2D2247',
      obsidian: '#120C1F',
      script: '#946E16',
      highlight: '#EAD06B',
      ink: '#181520',
      stone: '#EBE7F0',
      tint: '#F2EFF6',
      mist: '#D5CEE0',
      heroWash: 'rgba(29, 21, 46, 0.28)',
      paperGrain: 'rgba(24, 21, 32, 0.03)',
    },
  },
];
