import Link from 'next/link'
import ThemeSwitcher from './themeSwitcher'

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center justify-between p-8">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
              Home
            </a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="no-underline bg-gray-700 dark:bg-gray-400 pt-3 px-3 pb-2 rounded-md">
                {label}
              </a>
            </li>
          ))}
          <ThemeSwitcher />
        </ul>
      </ul>
    </nav>
  )
}
