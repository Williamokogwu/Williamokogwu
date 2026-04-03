export default function DotGridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="dot-grid absolute inset-0 opacity-[0.16]" />
    </div>
  );
}
