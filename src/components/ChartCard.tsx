import { useState } from 'react';
import { Check, Copy, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChartData, libraryColors, libraryLabels, categoryLabels } from '@/lib/chartData';
import { ChartPreview } from './ChartPreview';
import { useToast } from '@/hooks/use-toast';

interface ChartCardProps {
  chart: ChartData;
}

export function ChartCard({ chart }: ChartCardProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(chart.code);
    setCopied(true);
    toast({
      title: 'Copied!',
      description: 'Code copied to clipboard',
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg leading-tight text-foreground">
              {chart.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {chart.description}
            </p>
          </div>
          <Badge
            variant="secondary"
            className="shrink-0 text-xs font-medium"
            style={{
              backgroundColor: `${libraryColors[chart.library]}20`,
              color: libraryColors[chart.library],
              borderColor: libraryColors[chart.library],
            }}
          >
            {libraryLabels[chart.library]}
          </Badge>
        </div>
        <div className="flex gap-2 mt-2">
          <Badge variant="outline" className="text-xs">
            {categoryLabels[chart.category]}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Chart Preview */}
        <ChartPreview chartId={chart.id} />

        {/* When to Use */}
        <div className="rounded-lg bg-muted/50 p-3 border border-border/50">
          <p className="text-xs font-medium text-muted-foreground mb-1">
            📌 When to use
          </p>
          <p className="text-sm text-foreground">{chart.whenToUse}</p>
        </div>

        {/* Code Block */}
        <div className="relative">
          <div className="absolute right-2 top-2 z-10">
            <Button
              size="sm"
              variant="ghost"
              onClick={handleCopy}
              className="h-8 w-8 p-0 bg-background/80 backdrop-blur-sm hover:bg-background"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
          <pre className="rounded-lg bg-zinc-950 p-4 overflow-x-auto text-xs leading-relaxed">
            <code className="text-zinc-100 font-mono">{chart.code}</code>
          </pre>
        </div>

        {/* Pro Tip */}
        {chart.proTip && (
          <div className="flex items-start gap-2 rounded-lg bg-amber-500/10 border border-amber-500/20 p-3">
            <Lightbulb className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-200/90">
              <span className="font-semibold">Pro Tip:</span> {chart.proTip}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
