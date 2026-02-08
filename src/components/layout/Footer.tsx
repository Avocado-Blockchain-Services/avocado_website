import { SocialLinks } from './SocialLinks'

const footerLinks = {
  industries: [
    { label: 'Banking & Finance', href: '/industries/banking' },
    { label: 'Sports & Entertainment', href: '/industries/sports' },
    { label: 'FinTech', href: '/industries/fintech' },
  ],
  solutions: [
    { label: 'AI Chatbots', href: '/solutions/ai-chatbot' },
    { label: 'NFT Marketplaces', href: '/solutions/nft-marketplace' },
    { label: 'Smart Contracts', href: '/solutions/smart-contracts' },
    { label: 'SaaS MVP', href: '/solutions/saas-mvp' },
    { label: 'Loyalty Platforms', href: '/solutions/loyalty-platform' },
  ],
  caseStudies: [
    { label: 'BBVA', href: '/case-studies/bbva' },
    { label: 'Chivas', href: '/case-studies/chivas' },
    { label: 'Bitso', href: '/case-studies/bitso' },
    { label: 'Banorte', href: '/case-studies/banorte' },
    { label: 'Grupo Salinas', href: '/case-studies/grupo-salinas' },
  ],
  tech: [
    { label: 'Vertex AI', href: '/tech/vertex-ai' },
    { label: 'Solidity', href: '/tech/solidity' },
    { label: 'Ethereum', href: '/tech/ethereum' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-void-elevated bg-void-surface text-white/60 py-12 font-mono text-sm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-4">AVOCADO © {new Date().getFullYear()}</h3>
            <p className="max-w-xs mb-6 text-white/40">
              Engineering velocity for founders who refuse to wait.
            </p>
            <SocialLinks />
          </div>
          
          {/* Industries */}
          <div>
            <h4 className="text-white mb-4">INDUSTRIES</h4>
            <ul className="space-y-2">
              {footerLinks.industries.map(item => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-signal transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white mb-4">SOLUTIONS</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map(item => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-signal transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h4 className="text-white mb-4">CASE STUDIES</h4>
            <ul className="space-y-2">
              {footerLinks.caseStudies.map(item => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-signal transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech & Company */}
          <div>
            <h4 className="text-white mb-4">TECHNOLOGY</h4>
            <ul className="space-y-2">
              {footerLinks.tech.map(item => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-signal transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-white mb-4 mt-6">COMPANY</h4>
            <ul className="space-y-2">
              <li><a href="/company" className="hover:text-signal transition-colors">About</a></li>
              <li><a href="/services" className="hover:text-signal transition-colors">Services</a></li>
              <li><a href="/signal" className="hover:text-signal transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-void-elevated pt-8 flex justify-between items-center">
           <div className="text-white/40">
             ISO 27001 Certified · Google for Startups Partner
           </div>
           <div className="text-signal animate-pulse">
             {`> exit 0`}
           </div>
        </div>
      </div>
    </footer>
  )
}
