const HomePage: React.FC = () => {
  const pTexts: string[] = [
    "Hi, I'm Dillon!",
    "I'm a mechanical engineer turned software engineer who lives in New York City.",
    "Currently, I'm a software engineer at CoinList who primarily works on the Token Sales product.",
  ];
  return (
    <div className="mx-auto my-8 w-1/2">
      <h1 className="my-8 text-2xl font-bold tracking-wide">Dillon Luther</h1>
      <p>Hi, I'm Dillon!</p>
      <p>
        I'm a mechanical engineer turned software engineer who lives in New York
        City.
      </p>
      <p>
        <strong>Currently</strong>, I'm a software engineer at CoinList who
        primarily works on the Token Sales product.
      </p>
    </div>
  );
};

export default HomePage;
