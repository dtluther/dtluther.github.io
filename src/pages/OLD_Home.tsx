const OldHomePage: React.FC = () => {
  return (
    <div className="mx-auto my-8 w-full max-w-3xl px-4 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Dillon Luther
      </h1>
      <div className="space-y-6 text-lg text-gray-600">
        <p>
          Hi, I'm Dillon! I'm a mechanical engineer turned software engineer who lives in New York City.
        </p>
        <p>
          <strong className="text-gray-900">Currently</strong>
          , I'm a software engineer at CoinList who primarily builds the Token Sales product.
        </p>
        <p>
          <strong className="text-gray-900">Previously</strong>
          , I was a professional West Coast Swing dancer, worked at Cisco as a mechanical product engineer, and graduated from Arizona State University.
        </p>
        <p>
          <strong className="text-gray-900">For fun</strong>
          , I enjoy dancing, playing most sports (especially pickleball and volleyball), being around people, and honing new skills. I'm currently training to dunk a basketball.
        </p>
        <p>
          <strong className="text-gray-900">I want to</strong> learn another language, build my own software application, live in another country, and optimize my fitness.
        </p>
        <p>
          <strong className="text-gray-900">Connect</strong> with me on{" "}
          <a 
            href="https://twitter.com/dtluther" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            Twitter
          </a>
          . I love meeting new people.
        </p>
      </div>
    </div>
  );
};

export default OldHomePage; 