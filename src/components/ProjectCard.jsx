export function ProjectCard({ project }) {
  const { title, description, technologies, liveUrl, repoUrl, highlights } = project

  return (
    <article className="card project">
      <div className="card-head">
        <h3 className="card-title">{title}</h3>
        <div className="card-actions" aria-label={`${title} havolalar`}>
          {liveUrl ? (
            <a className="chip chip-link" href={liveUrl} target="_blank" rel="noreferrer">
              Ishlayapti
            </a>
          ) : null}
          {repoUrl ? (
            <a className="chip chip-link" href={repoUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : null}
        </div>
      </div>

      <p className="muted">{description}</p>

      {highlights?.length ? (
        <ul className="bullets">
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      ) : null}

      <div className="tags" aria-label="Foydalanilgan texnologiyalar">
        {technologies.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}