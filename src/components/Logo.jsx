import { Link } from 'react-router-dom'

export default function Logo({ claro = false }) {
  return (
    <Link to="/" className={`logo ${claro ? 'logo--claro' : ''}`} aria-label="EVOLV — página inicial">
      <svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="currentColor" />
        <path d="M9 21l5-5 4 4 6-8" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>EVOLV</span>
    </Link>
  )
}
