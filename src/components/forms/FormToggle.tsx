import { Button } from '@/components/ui/Button'
import type { FormMode } from '@/hooks/useFormMode'

export function FormToggle({ mode, onToggle }: { mode: FormMode, onToggle: () => void }) {
  return (
    <div className="text-center mt-6">
      <Button variant="ghost" onClick={onToggle} className="text-xs text-text-tertiary hover:text-signal">
        {mode === 'terminal' 
          ? '[ Prefer a standard form? Switch to classic mode ]'
          : '[ Try our terminal interface? Switch to terminal mode ]'
        }
      </Button>
    </div>
  )
}
