export default function Bio({ paragraphs, education }) {
  return (
    <section className="space-y-7 sm:space-y-8">
      <div className="space-y-5 sm:space-y-6">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="max-w-[39rem] text-[1rem] leading-[1.9] tracking-[-0.012em] text-stone-300 sm:text-[1.05rem]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <p className="max-w-[39rem] text-[0.96rem] leading-8 tracking-[-0.01em] text-stone-400 sm:text-[1rem]">
        {education}
      </p>
    </section>
  );
}
