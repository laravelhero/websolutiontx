/**
 * Contact page section text — hero and the "how we work" process steps.
 * Seeded from your current /contact page.
 */

export interface ProcessStep {
  title: string;
  description: string;
}

export const contact = {
  hero: {
    headline: "Let's Build Something Extraordinary.",
  },
  process: [
    {
      title: 'Discovery Call',
      description:
        'We start with a free 30-minute call to understand your goals, challenges, and vision. No pressure, just conversation.',
    },
    {
      title: 'Tailored Proposal',
      description:
        'We send a detailed proposal outlining scope, timeline, and investment — tailored to your specific needs.',
    },
    {
      title: 'Kickoff & Build',
      description:
        'Once aligned, we kick off with a structured sprint-based process, keeping you updated at every milestone.',
    },
    {
      title: 'Launch & Grow',
      description:
        'We launch your project and provide ongoing support, analytics review, and optimization as your partner.',
    },
  ] satisfies ProcessStep[],
} as const;
