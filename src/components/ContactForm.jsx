import { useMemo, useState } from 'react'
import { encodeMailto } from '../utils'

export function ContactForm({ email }) {
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const [form, setForm] = useState({ name: '', from: '', message: '' })

  const canSubmit = useMemo(() => {
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from.trim())
    return form.name.trim().length >= 2 && okEmail && form.message.trim().length >= 10
  }, [form])

  const onSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return

    setStatus('sending')
    const subject = `Portfolio inquiry — ${form.name.trim()}`
    const body = [
      `Ism: ${form.name.trim()}`,
      `Email: ${form.from.trim()}`,
      '',
      form.message.trim(),
    ].join('\n')

    const href = encodeMailto({ to: email, subject, body })
    window.location.href = href
    window.setTimeout(() => setStatus('sent'), 250)
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field-row">
        <label className="field">
          <span className="field-label">Ism</span>
          <input
            className="input"
            name="name"
            autoComplete="name"
            required
            value={form.name}
            onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
            placeholder="Sizning ismingiz"
          />
        </label>

        <label className="field">
          <span className="field-label">Email</span>
          <input
            className="input"
            type="email"
            name="from"
            autoComplete="email"
            required
            value={form.from}
            onChange={(e) => setForm((v) => ({ ...v, from: e.target.value }))}
            placeholder="siz@email.com"
          />
        </label>
      </div>

      <label className="field">
        <span className="field-label">Xabar</span>
        <textarea
          className="input textarea"
          name="message"
          required
          value={form.message}
          onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
          placeholder="Loyihangiz yoki lavozimingiz haqida ayting va qanday yordam kerakligini yozing."
          rows={6}
        />
      </label>

      <div className="form-actions">
        <button className="btn btn-primary" type="submit" disabled={!canSubmit}>
          {status === 'sending' ? 'Email ochilmoqda…' : 'Xabar yuborish'}
        </button>
        <p className="form-hint muted">
          {status === 'sent' ? (
            <>
              Agar email ilovangiz ochilmagan bo‘lsa, bevosita manzilga yozing:{' '}
              <a className="inline-link" href={`mailto:${email}`}>
                {email}
              </a>
              .
            </>
          ) : (
            <>
              Bu forma email mijozingizni ochadi (backend yo‘q). Yoki shu manzilga yozing:{' '}
              <a className="inline-link" href={`mailto:${email}`}>
                {email}
              </a>
              .
            </>
          )}
        </p>
      </div>
    </form>
  )
}