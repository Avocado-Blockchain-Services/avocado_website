import { cn } from '@/lib/utils'

export function SocialLinks({ className }: { className?: string }) {
  const links = [
    { name: 'X', href: 'https://twitter.com/avocadoblock' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/avocado' },
    { name: 'Instagram', href: 'https://instagram.com/avocadoblockchain' },
    { name: 'Facebook', href: 'https://www.facebook.com/avocadoblock' },
  ]

  return (
    <div className={cn('flex gap-4 font-mono text-sm', className)}>
      {links.map((link) => (
        <a 
          key={link.name} 
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-signal transition-colors hover:glow"
        >
          [{link.name}]
        </a>
      ))}
    </div>
  )
}
