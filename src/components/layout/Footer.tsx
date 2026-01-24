import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="border-t border-void-elevated bg-void-surface text-text-secondary py-12 font-mono text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <h3 className="text-white font-bold mb-4">AVOCADO © {new Date().getFullYear()}</h3>
            <p className="max-w-xs mb-6 text-text-tertiary">
              Engineering velocity for founders who refuse to wait.
            </p>
            <SocialLinks />
          </div>
          
          <div>
            <h4 className="text-white mb-4">SITEMAP</h4>
            <ul className="space-y-2">
              {['Protocol', 'Ventures', 'Services', 'Signal'].map(item => (
                <li key={item}>
                  <a href={`/${item.toLowerCase()}`} className="hover:text-signal transition-colors">
                    [{item}]
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="text-white mb-4">CONTACT</h4>
             <a href="/signal" className="hover:text-signal transition-colors block mb-2">
               [Start a Project]
             </a>
          </div>
        </div>

        <div className="border-t border-void-elevated pt-8 flex justify-between items-center">
           <div className="text-text-tertiary">
             Terminating session...
           </div>
           <div className="text-signal animate-pulse">
             {`> exit 0`}
           </div>
        </div>
      </div>
    </footer>
  )
}
