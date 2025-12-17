import { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Copy, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { setupCode } from '@/lib/chartData';
import { useToast } from '@/hooks/use-toast';

export function SetupSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(setupCode);
    setCopied(true);
    toast({
      title: 'Copied!',
      description: 'Setup code copied to clipboard',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Terminal className="h-5 w-5 text-primary" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-foreground">Colab Setup</h3>
            <p className="text-sm text-muted-foreground">
              Copy this code to import all libraries in Google Colab
            </p>
          </div>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </button>

      {isOpen && (
        <div className="border-t border-border/50 p-4">
          <div className="relative">
            <div className="absolute right-2 top-2 z-10">
              <Button
                size="sm"
                variant="ghost"
                onClick={handleCopy}
                className="h-8 bg-background/80 backdrop-blur-sm hover:bg-background"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-500 mr-1" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-1" />
                    Copy All
                  </>
                )}
              </Button>
            </div>
            <pre className="rounded-lg bg-zinc-950 p-4 overflow-x-auto text-xs leading-relaxed">
              <code className="text-zinc-100 font-mono whitespace-pre">{setupCode}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
