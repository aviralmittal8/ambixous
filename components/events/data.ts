export type UpcomingEventRecord = {
  id: string | number
  title: string
  date: string
  time: string
  type: "Community" | "Corporate" | string
  location: string
  attendees: number
  description: string
  speakers: string[]
  status: string
  registrationUrl: string
}

export type PastEventRecord = {
  id?: string | number
  title: string
  date: string
  type: "Community" | "Corporate" | string
  attendees: number
  impact: string
  description: string
  learnUrl: string
}

export const upcomingEventsFallback: UpcomingEventRecord[] = [
  {
    id: 1,
    title: "Disrupting the Funnel",
    date: "September 13, 2025",
    time: "1:00 PM – 5:00 PM",
    type: "Corporate",
    location: "Noida",
    attendees: 100,
    description:
      "Disrupting the Funnel is an afternoon of candid insights, proven playbooks, and pitfalls to avoid from AdTech innovators and growth leaders on taking a brand from 0 → 1.",
    speakers: ["Ms.Shaweta Berry", "Rohit Kaul", "Rachita Gupta", "Sayantan Dasgupta"],
    status: "Closed",
    registrationUrl:
      "https://www.commudle.com/communities/ambixous/events/disrupting-the-funnel-the-future-of-adtech-brand-marketing",
  },
  {
    id: 2,
    title: "SkillUp Bootcamp",
    date: "August 2, 2025",
    time: "10:30 AM – 04:00 PM",
    type: "Community",
    location: "Noida",
    attendees: 200,
    description:
      "A high-impact learning experience for developers, designers, and tech professionals to upskill through live sessions with experts from Google, Deloitte, Policy Bazaar, and Nagarro.",
    speakers: ["Varedh Nigam", "Nitasha Dhingra", "Sneha Swaroop", "Satendra Kumar"],
    status: "Closed",
    registrationUrl: "https://www.commudle.com/communities/ambixous/events/skillup-bootcamp",
  },
]

export const pastEventsFallback: PastEventRecord[] = [
  {
    title: "Fusion Forum",
    date: "July 19, 2025",
    type: "Corporate",
    attendees: 80,
    impact: "12 partnerships formed",
    description:
      "Corporate networking event bringing together startups and established companies for collaboration.",
    learnUrl: "https://reskilll.com/event/devconnect",
  },
  {
    title: "AI for Social Good",
    date: "April 05, 2025",
    type: "Community",
    attendees: 200,
    impact: "5 social projects launched",
    description:
      "Collaborative workshop with Google WTM exploring AI applications for social impact and community development.",
    learnUrl:
      "https://www.commudle.com/communities/ambixous/events/ai-for-social-good-wtm-google-x-ambixous",
  },
  {
    title: "The Ambitious Women: LIVE",
    date: "March 08, 2025",
    type: "Community",
    attendees: 300,
    impact: "50+ mentorship connections",
    description:
      "International Women's Day celebration featuring inspiring stories from women leaders across industries.",
    learnUrl:
      "https://www.commudle.com/communities/ambixous/events/the-ambitious-women-real-stories-real-empowerment",
  },
  {
    title: "BRB : Boring Replaced by Bots",
    date: "March 01, 2024",
    type: "Corporate",
    attendees: 40,
    impact: "10+ mentorship connections",
    description:
      "A live event where top creatives explore AI’s impact on design, answer questions, and spark collaboration.",
    learnUrl: "https://www.commudle.com/communities/ambixous/events/brb-boring-replaced-by-bots",
  },
  {
    title: "Innovator's Meetup",
    date: "February 09, 2025",
    type: "Community",
    attendees: 150,
    impact: "15+ mentorship connections",
    description:
      "An opportunity to gain expert insights, boost job readiness, expand your network, and showcase thought leadership in tech and design.",
    learnUrl: "https://www.commudle.com/communities/ambixous/events/innovator-s-meetup",
  },
  {
    title: "Founder’s Day Meetup",
    date: "January 18, 2025",
    type: "Corporate",
    attendees: 500,
    impact: "70+ mentorship connections",
    description:
      "A celebration of Ambixous’s milestones, fostering networking, inspiring tech leaders, and driving innovation with a focus on empowering women in tech.",
    learnUrl: "https://www.commudle.com/communities/ambixous/events/founder-s-day-meetup",
  },
]
