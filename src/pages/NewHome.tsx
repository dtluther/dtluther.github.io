const NewHomePage: React.FC = () => {
  window.addEventListener('scroll', () => {
    console.log('scrolling', window.scrollY);
    const viewportHeight = window.innerHeight;
    console.log(viewportHeight);
    const navHeader = document.getElementById('nav-header');
    const main = document.getElementById('main');
    if (!navHeader || !main) return;

    const navHeaderHeight = navHeader.offsetHeight;
    if (window.scrollY > navHeaderHeight) {
      navHeader.classList.remove('static');
      navHeader.classList.add('fixed');
      main.classList.add(`mt-20`);
    } else {
      navHeader.classList.remove('fixed');
      navHeader.classList.add('static');
      main.classList.remove(`mt-20`);
    }
  });

  return (
    <>
      <header id="nav-header" className="flex items-center justify-between w-full h-20 px-8 bg-slate-200 top-0">
        <h1 className="text-xl font-bold tracking-wide">Dillon Luther</h1>
        <nav className="flex items-center">
          <a className="mx-4 text-base" href="/blog">Blog</a>
          <a className="mx-4 text-base" href="/projects">Projects</a>
          <a className="mx-4 text-base" href="/resume">Resume</a>
        </nav>
      </header>
      <main id="main">
        <div className="mx-auto my-8 w-full px-8 bg-slate-100 sm:w-160 sm:px-0">
          <h1 className="my-8 text-xl font-bold tracking-wide">Dillon Luther</h1>
          <p className="my-4 text-base">
            Hi, I'm Dillon! I'm a mechanical engineer turned software engineer who lives in New York City.
          </p>
          <p className="my-4 text-base">
            <strong>Currently</strong>
            , I'm a software engineer at CoinList who primarily builds the Token Sales product.
          </p>
          <p className="my-4 text-base">
            <strong>Previously</strong>
            , I was at professional West Coast Swing dancer, worked at Cisco as a mechanical product engineer, and graduated from Arizona State University.
          </p>
          <p className="my-4 text-base">
            <strong>For fun</strong>
            , I enjoy dancing, playing most sports (especially pickleball and volleyball), being around people, and honing new skills. I'm currently training to dunk a basketball.
          </p>
          <p className="my-4 text-base">
            <strong>I want to</strong>
            &nbsp;learn another language, build my own software application, live in another country, and optimize my fitness.
          </p>
          <p className="my-4 text-base">
            <strong>Connect</strong>
             &nbsp;with me on&nbsp;
            <a className="text-blue-800 hover:underline" href="https://twitter.com/dtluther">Twitter</a>
            . I love meeting new people.
          </p>
        </div>
        <div className="mx-auto my-8 w-full h-2000 px-8 bg-slate-100 sm:w-160 sm:px-0">
          <h1 className="my-8 text-xl font-bold tracking-wide">Dillon Luther</h1>
          <p className="my-4 text-base">
            Hi, I'm Dillon! I'm a mechanical engineer turned software engineer who lives in New York City.
          </p>
          <p className="my-4 text-base">
            <strong>Currently</strong>
            , I'm a software engineer at CoinList who primarily builds the Token Sales product.
          </p>
          <p className="my-4 text-base">
            <strong>Previously</strong>
            , I was at professional West Coast Swing dancer, worked at Cisco as a mechanical product engineer, and graduated from Arizona State University.
          </p>
          <p className="my-4 text-base">
            <strong>For fun</strong>
            , I enjoy dancing, playing most sports (especially pickleball and volleyball), being around people, and honing new skills. I'm currently training to dunk a basketball.
          </p>
          <p className="my-4 text-base">
            <strong>I want to</strong>
            &nbsp;learn another language, build my own software application, live in another country, and optimize my fitness.
          </p>
          <p className="my-4 text-base">
            <strong>Connect</strong>
             &nbsp;with me on&nbsp;
            <a className="text-blue-800 hover:underline" href="https://twitter.com/dtluther">Twitter</a>
            . I love meeting new people.
          </p>
        </div>
        <div className="mx-auto my-8 w-full h-2000 px-8 bg-slate-100 sm:w-160 sm:px-0">
          <h1 className="my-8 text-xl font-bold tracking-wide">Dillon Luther</h1>
          <p className="my-4 text-base">
            Hi, I'm Dillon! I'm a mechanical engineer turned software engineer who lives in New York City.
          </p>
          <p className="my-4 text-base">
            <strong>Currently</strong>
            , I'm a software engineer at CoinList who primarily builds the Token Sales product.
          </p>
          <p className="my-4 text-base">
            <strong>Previously</strong>
            , I was at professional West Coast Swing dancer, worked at Cisco as a mechanical product engineer, and graduated from Arizona State University.
          </p>
          <p className="my-4 text-base">
            <strong>For fun</strong>
            , I enjoy dancing, playing most sports (especially pickleball and volleyball), being around people, and honing new skills. I'm currently training to dunk a basketball.
          </p>
          <p className="my-4 text-base">
            <strong>I want to</strong>
            &nbsp;learn another language, build my own software application, live in another country, and optimize my fitness.
          </p>
          <p className="my-4 text-base">
            <strong>Connect</strong>
             &nbsp;with me on&nbsp;
            <a className="text-blue-800 hover:underline" href="https://twitter.com/dtluther">Twitter</a>
            . I love meeting new people.
          </p>
        </div>
        <div className="mx-auto my-8 w-full px-8 bg-slate-100 sm:w-160 sm:px-0">
          <h1 className="my-8 text-xl font-bold tracking-wide">Dillon Luther</h1>
          <p className="my-4 text-base">
            Hi, I'm Dillon! I'm a mechanical engineer turned software engineer who lives in New York City.
          </p>
          <p className="my-4 text-base">
            <strong>Currently</strong>
            , I'm a software engineer at CoinList who primarily builds the Token Sales product.
          </p>
          <p className="my-4 text-base">
            <strong>Previously</strong>
            , I was at professional West Coast Swing dancer, worked at Cisco as a mechanical product engineer, and graduated from Arizona State University.
          </p>
          <p className="my-4 text-base">
            <strong>For fun</strong>
            , I enjoy dancing, playing most sports (especially pickleball and volleyball), being around people, and honing new skills. I'm currently training to dunk a basketball.
          </p>
          <p className="my-4 text-base">
            <strong>I want to</strong>
            &nbsp;learn another language, build my own software application, live in another country, and optimize my fitness.
          </p>
          <p className="my-4 text-base">
            <strong>Connect</strong>
             &nbsp;with me on&nbsp;
            <a className="text-blue-800 hover:underline" href="https://twitter.com/dtluther">Twitter</a>
            . I love meeting new people.
          </p>
        </div>
        <div className="mx-auto my-8 w-full h-2000 px-8 bg-slate-100 sm:w-160 sm:px-0">
          <h1 className="my-8 text-xl font-bold tracking-wide">Dillon Luther</h1>
          <p className="my-4 text-base">
            Hi, I'm Dillon! I'm a mechanical engineer turned software engineer who lives in New York City.
          </p>
          <p className="my-4 text-base">
            <strong>Currently</strong>
            , I'm a software engineer at CoinList who primarily builds the Token Sales product.
          </p>
          <p className="my-4 text-base">
            <strong>Previously</strong>
            , I was at professional West Coast Swing dancer, worked at Cisco as a mechanical product engineer, and graduated from Arizona State University.
          </p>
          <p className="my-4 text-base">
            <strong>For fun</strong>
            , I enjoy dancing, playing most sports (especially pickleball and volleyball), being around people, and honing new skills. I'm currently training to dunk a basketball.
          </p>
          <p className="my-4 text-base">
            <strong>I want to</strong>
            &nbsp;learn another language, build my own software application, live in another country, and optimize my fitness.
          </p>
          <p className="my-4 text-base">
            <strong>Connect</strong>
             &nbsp;with me on&nbsp;
            <a className="text-blue-800 hover:underline" href="https://twitter.com/dtluther">Twitter</a>
            . I love meeting new people.
          </p>
        </div>
        <div className="mx-auto my-8 w-full h-2000 px-8 bg-slate-100 sm:w-160 sm:px-0">
          <h1 className="my-8 text-xl font-bold tracking-wide">Dillon Luther</h1>
          <p className="my-4 text-base">
            Hi, I'm Dillon! I'm a mechanical engineer turned software engineer who lives in New York City.
          </p>
          <p className="my-4 text-base">
            <strong>Currently</strong>
            , I'm a software engineer at CoinList who primarily builds the Token Sales product.
          </p>
          <p className="my-4 text-base">
            <strong>Previously</strong>
            , I was at professional West Coast Swing dancer, worked at Cisco as a mechanical product engineer, and graduated from Arizona State University.
          </p>
          <p className="my-4 text-base">
            <strong>For fun</strong>
            , I enjoy dancing, playing most sports (especially pickleball and volleyball), being around people, and honing new skills. I'm currently training to dunk a basketball.
          </p>
          <p className="my-4 text-base">
            <strong>I want to</strong>
            &nbsp;learn another language, build my own software application, live in another country, and optimize my fitness.
          </p>
          <p className="my-4 text-base">
            <strong>Connect</strong>
             &nbsp;with me on&nbsp;
            <a className="text-blue-800 hover:underline" href="https://twitter.com/dtluther">Twitter</a>
            . I love meeting new people.
          </p>
        </div>
      </main>
    </>
  );
};

export default NewHomePage;
