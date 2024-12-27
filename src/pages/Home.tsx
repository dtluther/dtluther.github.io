import { FC } from 'react';

interface TimelineEvent {
  year: number;
  icon: string;
  title: string;
  linkUrl?: string;
}

// Separate timeline event component
const TimelineEvent: FC<TimelineEvent> = ({ year, icon, title, linkUrl }) => {
  const content = (
    <div className={`group -ml-3 flex items-center gap-4 rounded-lg p-3 ${linkUrl ? 'transition-colors hover:bg-[#222]' : ''}`}>
      <time className="font-mono text-sm md:text-xl text-gray-400">{year}</time>
      <div className={`flex h-9 w-9 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#222] ${linkUrl ? 'group-hover:bg-[#282828]' : ''}`}>
        <span className="inline-block translate-y-[1px] text-base md:text-2xl leading-none">{icon}</span>
      </div>
      <div className="flex-1">
        <h3 className={`text-sm md:text-xl font-medium text-white ${linkUrl ? 'group-hover:text-[#c5b4e8]' : ''}`}>{title}</h3>
      </div>
    </div>
  );

  return linkUrl ? (
    <li>
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    </li>
  ) : (
    <li>{content}</li>
  );
};

// Separate header component
interface CurrentProjectProps {
  startDate: Date;
  title: string;
  icon: string;
}

const CurrentProject: FC<CurrentProjectProps> = ({ startDate, title, icon }) => {
  const daysSince = Math.floor((Date.now() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="flex items-center gap-2">
      <div className="text-right">
        <p className="text-xs md:text-sm text-gray-400">Current project • Day {daysSince}</p>
        <p className="text-sm md:text-xl text-white">{title}</p>
      </div>
      <div className="flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#222]">
        <span className="inline-flex items-center justify-center text-base md:text-2xl leading-none">{icon}</span>
      </div>
    </div>
  );
};

// Timeline data
const timelineEvents: TimelineEvent[] = [
  {
    year: 2024,
    icon: "🏙",
    title: "Moved to New York City",
  },
  {
    year: 2022,
    icon: "🪙",
    title: "CoinList",
    linkUrl: "https://coinlist.co",
  },
  {
    year: 2019,
    icon: "🕺",
    title: "Professional West Coast Swing",
  },
  {
    year: 2018,
    icon: "🏠",
    title: "ReferralExchange",
    linkUrl: "https://www.referralexchange.com",
  },
  {
    year: 2017,
    icon: "💻",
    title: "App Academy",
    linkUrl: "https://www.appacademy.io",
  },
  {
    year: 2014,
    icon: "🌉",
    title: "San Francisco",
  },
  {
    year: 2012,
    icon: "🚲",
    title: "Journey Of Hope",
  },
  {
    year: 2010,
    icon: "😈",
    title: "Arizona State University",
  }
].sort((a, b) => b.year - a.year);

// Main component
const HomePage: FC = () => {
  const isHeaderVisible = false;
  const HEADER_WIDTH = 232; // px (includes content gap)

  const containerClasses = `mx-auto ${isHeaderVisible ? 'max-w-7xl' : 'max-w-4xl'} px-4`;
  const mainClasses = isHeaderVisible ? 'pt-2 md:pt-36' : 'pt-6 md:pt-24';
  const mainWidthClass = isHeaderVisible ? `md:max-w-[calc(100%-${HEADER_WIDTH}px)]` : '';

  return (
    <div className={containerClasses}>
      {isHeaderVisible && (
        <Header />
      )}

      <main className={`${mainClasses} ${mainWidthClass} pb-8`}>
        <Introduction />
        <Timeline events={timelineEvents} />
      </main>

      <Footer />
    </div>
  );
};

const Header: FC = () => (
  <header className="relative md:fixed top-0 right-0 left-0 z-10">
    <div className="mx-auto max-w-7xl px-2">
      <div className="flex justify-end py-6 md:py-12">
        <CurrentProject 
          startDate={new Date('2024-01-01')}
          title="Training to dunk"
          icon="🏀"
        />
      </div>
    </div>
  </header>
);

const Introduction: FC = () => (
  <div className="mb-8">
    <p className="text-sm md:text-3xl text-gray-300 leading-relaxed">
      <span className="text-white">Dillon Luther</span> is a mechanical engineer turned software engineer based in New York. 
      Outside of tech, he dances West Coast Swing, plays all sorts of sports, and pursues different challenges to make the most of his human experience.
    </p>
  </div>
);

const Timeline: FC<{ events: TimelineEvent[] }> = ({ events }) => (
  <ul className="space-y-0.5">
    {events.map((event) => (
      <TimelineEvent key={`${event.year}-${event.title}`} {...event} />
    ))}
  </ul>
);

const Footer: FC = () => (
  <div className="mt-16 pb-8 text-center">
    <p className="text-sm text-gray-500">
      Inspired by <a href="https://davidbaker.tv" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">davidbaker.tv</a>
    </p>
  </div>
);

export default HomePage;
