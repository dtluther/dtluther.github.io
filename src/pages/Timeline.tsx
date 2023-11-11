const TimelinePage: React.FC = () => {
  const events: { year: number; icon: string; title: string }[] = [
    {
      year: 2014,
      // bridge icon
      icon: "🌉",
      title: "Graduated and moved to San Francisco",
    },
    {
      year: 2017,
      // computer icon
      icon: "💻",
      title: "App Academy",
    },
    {
      year: 2018,
      // house icon,
      icon: "🏠",
      title: "ReferralExchange",
    },
    {
      year: 2012,
      // bicycle icon
      icon: "🚲",
      title: "Journey Of Hope",
    },
    {
      year: 2010,
      // devil icon
      icon: "😈",
      title: "Arizona State University",
    },
    {
      year: 2019,
      // male dancing icon
      icon: "🕺",
      title: "Became a professional West Coast Swing dancer",
    },
    {
      year: 2022,
      // bitcoin icon
      icon: "🪙",
      title: "CoinList",
    },
    {
      year: 2024,
      // city icon
      icon: "🏙",
      title: "Moved to New York City",
    },
  ];
  const revChronEvents = events.sort((a, b) => b.year - a.year);

  return (
    <main className="min-h-screen bg-black py-16 pl-16 pr-52 font-sans text-white">
      <section className="mb-16 text-5xl leading-normal tracking-wide">
        <p className="leading-normal">
          Dillon Luther is a software engineer who
          specializes in building web applications. Away from the keyboard, you
          can find him dancing and engaging in various athletic endeavors around
          the world.
        </p>
      </section>

      <section id="timeline">
        <ul className="flex flex-col gap-8 text-2xl">
          {revChronEvents.map((event) => (
            <li key={event.year}>
              <div className="flex">
                <time className="w-24">{event.year}</time>
                <div className="w-16">{event.icon}</div>
                <p>{event.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default TimelinePage;
