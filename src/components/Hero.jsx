export default function Hero({ name, subtitle }) {
  return (
    <header className="space-y-3">
      <h1 className="font-display text-[2.45rem] leading-[0.98] font-medium tracking-[-0.045em] text-stone-50 sm:text-[2.9rem]">
        {name}
      </h1>
      <p className="max-w-[34rem] text-[0.98rem] leading-7 tracking-[-0.01em] text-stone-400 sm:text-[1.02rem]">
        {subtitle}
      </p>
    </header>
  );
}
