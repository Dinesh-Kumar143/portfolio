interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-[10px] font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-[#c8622a] mb-4 reveal ${className}`}
    >
      <span className="inline-block w-[22px] h-[1.5px] bg-[#c8622a] flex-shrink-0" />
      {children}
    </div>
  );
}