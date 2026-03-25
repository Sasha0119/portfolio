export function SkillsGrid({ skills }) {
  return (
    <div className="skills-grid">
      {skills.map((group) => (
        <section key={group.group} className="card skill-group" aria-label={group.group}>
          <h3 className="card-title">{group.group}</h3>
          <div className="tags">
            {group.items.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

