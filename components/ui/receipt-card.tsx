const items = [
  { label: "Maize Flour 2kg", price: "KES 210.00" },
  { label: "Cooking Oil 1L", price: "KES 350.00" },
  { label: "Sugar 1kg x 2", price: "KES 320.00" },
];

export function ReceiptCard() {
  return (
    <div className="receipt-scallop bg-white px-5 py-6 font-mono text-navy shadow-2xl">
      <div className="text-center">
        <p className="text-[10px] tracking-[0.2em] text-navy/50">
          TARA POS TERMINAL
        </p>
        <p className="mt-1 text-sm font-bold">MAMA&apos;S KIOSK</p>
        <p className="mt-1 text-[10px] text-navy/50">NAIROBI · 0712 345 678</p>
      </div>

      <div className="mt-4 space-y-1.5 border-t border-dashed border-navy/20 pt-4 text-[11px]">
        {items.map((item) => (
          <div key={item.label} className="flex justify-between gap-4">
            <span>{item.label}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex justify-between border-t border-dashed border-navy/20 pt-3 text-xs font-bold">
        <span>TOTAL</span>
        <span>KES 880.00</span>
      </div>

      <div className="mt-4 flex justify-center">
        <span className="-rotate-6 rounded border-2 border-red-600 px-3 py-1 text-xs font-bold tracking-wide text-red-600">
          PAID IN FULL
        </span>
      </div>

      <div className="mt-5 flex h-6 items-center gap-1 rounded bg-navy/5 px-2">
        <span className="h-3 w-3 bg-navy" />
        <span className="h-3 w-3 bg-navy" />
      </div>
      <p className="mt-3 text-center text-[9px] tracking-widest text-navy/40">
        TRANSACTION ID: 8XJ39KL01
      </p>
    </div>
  );
}
