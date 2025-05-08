export interface NavChild {
  label: string;
  path: string;
  icon?: string;
  labelColor?: string;
}

export interface NavItem {
  type: 'link' | 'heading';
  label: string;
  path?: string;
  icon?: string;
  labelColor?: string;
  children?: NavChild[];
}

export const NavigationConfig: NavItem[] = [
  // { type: 'heading', label: 'Main Section' },
  { type: 'link', label: 'Home', path: '/', labelColor: '#000', icon: 'home' },
  {
    type: 'link',
    label: 'About',
    path: '/about',
    labelColor: '#000',
    icon: 'person',
  },
  // { type: 'heading', label: 'Services' },
  {
    type: 'link',
    label: 'Components',
    path: '/components',
    labelColor: '#000',
    icon: 'handyman',
    children: [
      {
        label: 'Carousels',
        path: '/carousels',
        labelColor: '#000',
      },
      {
        label: 'Info Cards',
        path: '/info-cards',
        labelColor: '#000',
      },
      {
        label: 'Buttons',
        path: '/buttons',
        labelColor: '#000',
      },

      {
        label: 'Drop Downs',
        path: '/dropdowns',
        labelColor: '#000',
      },
      {
        label: 'Videos',
        path: '/videos',
        labelColor: '#000',
      },
      {
        label: 'Calendar',
        path: '/calendar',
        labelColor: '#000',
      },
    ],
  },
  {
    type: 'link',
    label: 'Contact',
    path: '/contact',
    labelColor: '#000',
    icon: 'mail',
  },
];
