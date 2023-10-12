import { FontAwesome } from '@expo/vector-icons';

export default [
  {
    name: 'Start Driving',
    iconName: 'car',
    href: '/controls',
  },
  {
    name: 'Climate',
    iconName: 'fan',
    href: '/climate',
  },
  {
    name: 'History',
    iconName: 'history',
    href: '/location',
  },
  {
    name: 'Insurance',
    iconName: 'ship-wheel',
    href: 'https://www.etapinsure.com',
  },
  {
    name: 'Security',
    iconName: 'shield-check',
    href: '/security',
  },
  {
    name: 'Updates',
    iconName: 'update',
    href: '/updates',
  },
  {
    name: 'Pet mode',
    iconName: 'dog',
    href: '/pet-mode',
  },
  {
    name: 'Doctor',
    icon: () => <FontAwesome name="user-md" size={26} color="gray" />,
    href: '/doctor',
  },
];
