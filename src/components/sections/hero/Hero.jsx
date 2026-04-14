export default function Hero() {
  return (
    <header className="flex flex-col justify-center pt-20 px-60 gap-4 text-center">
      <h1 className="text-5xl font-bold text-heading">Friends to keep close in your life</h1>
      <p>
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>
      <button className="btn mt-4 w-fit mx-auto bg-brand text-white">+ Add a Friend</button>
    </header>
  );
}
