import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ando-oss.github.io',
  base: '/mpp-i',
  integrations: [
    starlight({
      title: 'MPP-I',
      description: 'Machine Payments Protocol for Inference',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Ando-OSS/mpp-i'
        }
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Overview', slug: '' },
            { label: 'Paper', slug: 'paper' },
            { label: 'Executive Summary', slug: 'executive-summary' },
            { label: 'Protocol Positioning', slug: 'protocol-positioning' },
            { label: 'Q&A', slug: 'q-and-a' },
            { label: 'Contributing', slug: 'contributing' }
          ]
        }
      ]
    })
  ]
});
