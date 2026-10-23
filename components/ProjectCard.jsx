import SectionHeading from './SectionHeading';

export default function ProjectCard({ project, id }) {
  return (
    <article aria-labelledby={id}>
      <SectionHeading id={id}>{project.title}</SectionHeading>
      <p className="prose-justify mt-4">{project.summary}</p>
      <ul className="square-list mt-4">
        {project.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </article>
  );
}
