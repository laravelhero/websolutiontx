/**
 * About page section text — hero and the company values grid.
 * Seeded from your current /about page.
 */

export interface Value {
  title: string;
  description: string;
}

export const about = {
  hero: {
    headline: 'A Team Built for Digital Excellence.',
  },
  values: [
    {
      title: 'Excellence',
      description:
        "We never ship work we're not proud of. Every pixel, every line of code meets our internal bar for excellence.",
    },
    {
      title: 'Partnership',
      description:
        'Your goals are our goals. We invest deeply in understanding your business before we write a single line of code.',
    },
    {
      title: 'Speed & Craft',
      description:
        'We combine agile thinking with premium craft — moving fast without sacrificing the details that matter.',
    },
    {
      title: 'Innovation',
      description:
        'We stay ahead of the curve — constantly exploring new tools, technologies, and creative approaches.',
    },
    {
      title: 'Local Expertise',
      description:
        'We live and work right here. We fully understand the Texas market dynamics, regional audience demands, and local competition.',
    },
  ] satisfies Value[],
} as const;
