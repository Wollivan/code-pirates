import HornedBeast from "./HornedBeast";

function Main() {
  return (
    <main>
      <h2>These are my horned beasts</h2>
      <HornedBeast
        title="Unicorn"
        imageUrl="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=675%2Cq=85%2Cwidth=1200/wp-content/uploads/unicorn-day-e1523293823642.jpg"
        description="Whats more likely, a horse with a horn, or a leopard-horse-moose with a 12 foot neck?"
      />
      <HornedBeast
        title="Narwhal"
        imageUrl="https://media.newyorker.com/photos/612d081110715e8d967bfcf6/4:3/w_1920,h_1440,c_limit/Holloway-Narwhals.jpg"
        description="The seas unicorn"
      />
      <HornedBeast
        title="Smaug"
        imageUrl="https://www.gannett-cdn.com/-mm-/283b14115498cc81eab29c4385f4851e1f48c4c9/c=675-11-2630-1112/local/-/media/USATODAY/test/2013/12/16//1387183002000-HTDOS-SMAUG-0071.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp"
        description="Benedict Cumberbatch"
      />
    </main>
  );
}

export default Main;
