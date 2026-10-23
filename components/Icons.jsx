// Small inline icon set (stroke icons, 24px grid). Decorative by default.
function Base({ children, className = 'h-4 w-4', strokeWidth = 1.75, ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);

export const ArrowUpRight = (p) => (
  <Base {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Base>
);

export const ArrowUp = (p) => (
  <Base {...p}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </Base>
);

export const ChevronDown = (p) => (
  <Base {...p}>
    <path d="m6 9 6 6 6-6" />
  </Base>
);

export const FileText = (p) => (
  <Base {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5M9 13h6M9 17h6" />
  </Base>
);

export const Download = (p) => (
  <Base {...p}>
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </Base>
);

export const Mail = (p) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </Base>
);

export const Phone = (p) => (
  <Base {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </Base>
);

export const MapPin = (p) => (
  <Base {...p}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Base>
);

export const Menu = (p) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const Close = (p) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Base>
);

export const Plus = (p) => (
  <Base {...p}>
    <path d="M12 5v14M5 12h14" />
  </Base>
);

export const Check = (p) => (
  <Base {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Base>
);

export const Leaf = (p) => (
  <Base {...p}>
    <path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15" />
    <path d="M5 19c3-4 6-6.5 9.5-8.5" />
  </Base>
);

export const Cap = (p) => (
  <Base {...p}>
    <path d="m2 9 10-5 10 5-10 5L2 9z" />
    <path d="M6 11v5c3 2 9 2 12 0v-5" />
  </Base>
);

export const Badge = (p) => (
  <Base {...p}>
    <circle cx="12" cy="9" r="5" />
    <path d="m9 13.5-1.5 7L12 18l4.5 2.5-1.5-7" />
  </Base>
);

// LinkedIn uses a filled brand glyph.
export const LinkedIn = ({ className = 'h-4 w-4', ...rest }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className} {...rest}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3v-11zm7 0h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.6 4.77 6v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91H10v-11z" />
  </svg>
);
