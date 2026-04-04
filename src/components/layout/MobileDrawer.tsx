import Link from "next/link";

interface MobileDrawerProps {
  links: { label: string; href: string }[];
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ links, open, onClose }: MobileDrawerProps) {
  return (
    <div
      className={`md:hidden fixed inset-0 top-[68px] z-40 bg-[#f6f4f1] flex flex-col px-6 py-10 gap-1 border-t border-[#e4e0da] transition-all duration-300 ${
        open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="font-serif text-[34px] font-semibold text-[#0e0e0e] py-3.5 border-b border-[#e4e0da] hover:text-[#c8622a] transition-colors duration-200"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}