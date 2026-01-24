interface ComparisonRow {
  traditional: string
  avocado: string
}

const comparisons: ComparisonRow[] = [
  { traditional: '6-month discovery phase', avocado: 'Day 1: git init' },
  { traditional: 'Hourly billing', avocado: 'Fixed-price outcomes' },
  { traditional: '20-person teams', avocado: '2-3 senior engineers' },
  { traditional: 'PowerPoint deliverables', avocado: 'Production code' },
  { traditional: '"Let\'s schedule a call"', avocado: '"Here\'s the PR"' },
]

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse font-mono text-sm md:text-base">
        <thead>
          <tr>
            <th className="text-left p-4 border-b border-void-elevated text-text-secondary font-normal">
              Traditional Agency
            </th>
            <th className="text-left p-4 border-b border-void-elevated text-signal font-bold">
              Avocado
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisons.map((row, i) => (
            <tr key={i} className="hover:bg-void-surface transition-colors">
              <td className="p-4 border-b border-void-elevated text-text-secondary line-through decoration-error/50">
                {row.traditional}
              </td>
              <td className="p-4 border-b border-void-elevated text-white">
                <span className="text-signal mr-2">→</span>
                {row.avocado}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
