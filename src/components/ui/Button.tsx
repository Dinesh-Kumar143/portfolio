// import Link from "next/link";
// import { ReactNode } from "react";

// type Variant = "dark" | "line" | "accent";

// interface ButtonProps {
//   href?: string;
//   onClick?: () => void;
//   variant?: Variant;
//   children: ReactNode;
//   className?: string;
//   type?: "button" | "submit" | "reset";
//   disabled?: boolean;
// }

// const variantStyles: Record<Variant, string> = {
//   dark:
//     "bg-[#0e0e0e] text-white border border-[#0e0e0e] hover:bg-[#c8622a] hover:border-[#c8622a] hover:shadow-[0_8px_24px_rgba(200,98,42,0.28)] hover:-translate-y-0.5",
//   line:
//     "bg-transparent text-[#0e0e0e] border border-[#0e0e0e] hover:bg-[#0e0e0e] hover:text-white hover:-translate-y-0.5",
//   accent:
//     "bg-[#c8622a] text-white border border-[#c8622a] hover:bg-[#9e4a1e] hover:border-[#9e4a1e] hover:shadow-[0_8px_24px_rgba(200,98,42,0.3)] hover:-translate-y-0.5",
// };

// const base =
//   "inline-flex items-center gap-2 px-7 py-3 text-sm font-medium tracking-[0.01em] rounded-[4px] transition-all duration-[250ms] cursor-pointer";

// export default function Button({
//   href,
//   onClick,
//   variant = "dark",
//   children,
//   className = "",
//   type = "button",
//   disabled = false,
// }: ButtonProps) {
//   const classes = `${base} ${variantStyles[variant]} ${className}`;

//   if (href) {
//     // Check if it's an external link, file, or hash link
//     const isExternal = href.startsWith('http') || href.startsWith('//');
//     const isFile = href.endsWith('.pdf') || href.endsWith('.doc') || href.endsWith('.docx');
//     const isHash = href.startsWith('#');
    
//     // For files and external links, use regular <a> tag 
//     if (isExternal || isFile) {
//       return (
//         <a 
//           href={href} 
//           className={classes}
//           target={isExternal ? "_blank" : undefined}
//           rel={isExternal ? "noopener noreferrer" : undefined}
//           download={isFile ? true : undefined}
//         >
//           {children}
//         </a>
//       );
//     }
    
//     // For internal routes and hash links, use Next.js Link
//     return (
//       <Link href={href} className={classes}>
//         {children}
//       </Link>
//     );
//   }

//   return (
//     <button type={type} onClick={onClick} className={classes} disabled={disabled}>
//       {children}
//     </button>
//   );
// }

import Link from "next/link";
import { ReactNode } from "react";

type Variant = "dark" | "line" | "accent";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles: Record<Variant, string> = {
  dark:
    "bg-[#0e0e0e] text-white border border-[#0e0e0e] hover:bg-[#c8622a] hover:border-[#c8622a] hover:shadow-[0_8px_24px_rgba(200,98,42,0.28)] hover:-translate-y-0.5",
  line:
    "bg-transparent text-[#0e0e0e] border border-[#0e0e0e] hover:bg-[#0e0e0e] hover:text-white hover:-translate-y-0.5",
  accent:
    "bg-[#c8622a] text-white border border-[#c8622a] hover:bg-[#9e4a1e] hover:border-[#9e4a1e] hover:shadow-[0_8px_24px_rgba(200,98,42,0.3)] hover:-translate-y-0.5",
};

const base =
  "inline-flex items-center gap-2 px-7 py-3 text-sm font-medium tracking-[0.01em] rounded-[4px] transition-all duration-[250ms] cursor-pointer";

export default function Button({
  href,
  onClick,
  variant = "dark",
  children,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `${base} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}