import { FC } from 'react';

interface TimelineEvent {
  year: number;
  icon: string;
  title: string;
  description?: string;
  linkUrl?: string;
}

// Separate component for timeline events
const TimelineEvent: React.FC<TimelineEvent> = ({ 
  year, 
  icon, 
  title, 
  description, 
  linkUrl 
}) => {
  const TimelineContent = (
    <div className="group flex items-center gap-4 rounded-lg p-4 transition-colors hover:bg-gray-800/50">
      <time className="w-24 font-mono text-gray-400">{year}</time>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-2xl text-gray-400 group-hover:text-white">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-white group-hover:text-blue-400">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-gray-400">{description}</p>
        )}
      </div>
    </div>
  );

  if (linkUrl) {
    return (
      <li>
        <a 
          href={linkUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          {TimelineContent}
        </a>
      </li>
    );
  }

  return <li>{TimelineContent}</li>;
};

// Timeline data
const timelineEvents: TimelineEvent[] = [
  {
    year: 2024,
    icon: "🎯",
    title: "Training to Dunk",
    description: "Working on increasing my vertical jump to dunk a basketball"
  },
  {
    year: 2023,
    icon: "💻",
    title: "Senior Software Engineer at CoinList",
    description: "Leading development of Token Sales platform",
    linkUrl: "https://coinlist.co"
  },
  {
    year: 2021,
    icon: "🏢",
    title: "Software Engineer at CoinList",
    description: "Full-stack development with React and Ruby on Rails"
  },
  {
    year: 2019,
    icon: "💃",
    title: "Professional West Coast Swing Dancer",
    description: "Competed and taught dance across the US"
  },
  {
    year: 2018,
    icon: "🔧",
    title: "Mechanical Engineer at Cisco",
    description: "Product development for networking hardware",
    linkUrl: "https://cisco.com"
  },
  {
    year: 2017,
    icon: "🎓",
    title: "Graduated from Arizona State University",
    description: "BS in Mechanical Engineering",
    linkUrl: "https://www.asu.edu"
  }
];

const TimelinePage: FC = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Timeline
      </h1>
      <ul className="space-y-4">
        {timelineEvents.map((event) => (
          <TimelineEvent key={`${event.year}-${event.title}`} {...event} />
        ))}
      </ul>
    </div>
  );
};

export default TimelinePage;
