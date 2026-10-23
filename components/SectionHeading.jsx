// Blue display-font section title, e.g. "About", "Biography".
export default function SectionHeading({ id, children, as: Tag = 'h2', center = false, className = '' }) {
  return (
    <Tag id={id} className={`title ${center ? 'text-center' : ''} ${className}`}>
      {children}
    </Tag>
  );
}
