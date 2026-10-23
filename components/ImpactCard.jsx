// "Shipping label" summary of headline results.
export default function ImpactCard({ items }) {
  return (
    <figure
      aria-labelledby="impact-caption"
      className="relative mx-auto w-full max-w-md rounded-xl border-[1.5px] border-ink bg-card shadow-[8px_8px_0_0_var(--color-ink)] lg:ml-auto"
    >
      <div className="flex items-center justify-between border-b-[1.5px] border-ink px-5 py-3">
        <p id="impact-caption" className="eyebrow text-ink">
          Impact manifest
        </p>
        <p className="eyebrow text-muted">2018 → Present</p>
      </div>

      <div className="grid grid-cols-2 border-b-[1.5px] border-ink text-sm">
        <div className="border-r-[1.5px] border-ink px-5 py-3">
          <p className="eyebrow text-muted">From</p>
          <p className="mt-1 font-medium text-ink">Karachi, PK</p>
        </div>
        <div className="px-5 py-3">
          <p className="eyebrow text-muted">To</p>
          <p className="mt-1 font-medium text-ink">Missouri, US</p>
        </div>
      </div>

      <dl className="grid grid-cols-2">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-col px-5 py-4 ${i % 2 === 0 ? 'border-r border-line' : ''} ${
              i < items.length - 2 ? 'border-b border-line' : ''
            }`}
          >
            <dt className="order-2 mt-1 text-[13px] leading-snug text-ink-soft">{item.label}</dt>
            <dd className="order-1 font-serif text-[2.4rem] leading-none tracking-tight text-ink">{item.value}</dd>
            <dd className="order-3 mt-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-accent-ink">
              {item.source}
            </dd>
          </div>
        ))}
      </dl>

      <div className="flex items-end gap-4 border-t-[1.5px] border-ink px-5 py-4">
        <div aria-hidden="true" className="barcode h-10 flex-1" />
        <p className="eyebrow pb-0.5 text-right leading-4 text-ink">
          Supply
          <br />
          Chain
        </p>
      </div>
    </figure>
  );
}
