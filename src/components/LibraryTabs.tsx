import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Library, libraryLabels, libraryColors } from '@/lib/chartData';

interface LibraryTabsProps {
  selectedLibrary: Library | 'all';
  onSelect: (library: Library | 'all') => void;
}

const libraryGroups = {
  core: ['matplotlib', 'seaborn', 'pandas'] as Library[],
  interactive: ['plotly', 'bokeh', 'altair'] as Library[],
  specialized: ['folium', 'networkx'] as Library[],
};

export function LibraryTabs({ selectedLibrary, onSelect }: LibraryTabsProps) {
  return (
    <div className="space-y-4">
      <Tabs value={selectedLibrary} onValueChange={(v) => onSelect(v as Library | 'all')}>
        <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2 text-sm font-medium transition-all border border-border/50 hover:border-border"
          >
            All Libraries
          </TabsTrigger>
          
          <div className="w-px h-8 bg-border/50 mx-2 hidden sm:block" />
          
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-muted-foreground self-center px-2">Core:</span>
            {libraryGroups.core.map((lib) => (
              <TabsTrigger
                key={lib}
                value={lib}
                className="rounded-full px-3 py-1.5 text-sm font-medium transition-all border hover:opacity-80"
                style={{
                  borderColor: selectedLibrary === lib ? libraryColors[lib] : 'transparent',
                  backgroundColor: selectedLibrary === lib ? `${libraryColors[lib]}20` : 'transparent',
                  color: selectedLibrary === lib ? libraryColors[lib] : undefined,
                }}
              >
                {libraryLabels[lib]}
              </TabsTrigger>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-muted-foreground self-center px-2">Interactive:</span>
            {libraryGroups.interactive.map((lib) => (
              <TabsTrigger
                key={lib}
                value={lib}
                className="rounded-full px-3 py-1.5 text-sm font-medium transition-all border hover:opacity-80"
                style={{
                  borderColor: selectedLibrary === lib ? libraryColors[lib] : 'transparent',
                  backgroundColor: selectedLibrary === lib ? `${libraryColors[lib]}20` : 'transparent',
                  color: selectedLibrary === lib ? libraryColors[lib] : undefined,
                }}
              >
                {libraryLabels[lib]}
              </TabsTrigger>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-muted-foreground self-center px-2">Specialized:</span>
            {libraryGroups.specialized.map((lib) => (
              <TabsTrigger
                key={lib}
                value={lib}
                className="rounded-full px-3 py-1.5 text-sm font-medium transition-all border hover:opacity-80"
                style={{
                  borderColor: selectedLibrary === lib ? libraryColors[lib] : 'transparent',
                  backgroundColor: selectedLibrary === lib ? `${libraryColors[lib]}20` : 'transparent',
                  color: selectedLibrary === lib ? libraryColors[lib] : undefined,
                }}
              >
                {libraryLabels[lib]}
              </TabsTrigger>
            ))}
          </div>
        </TabsList>
      </Tabs>
    </div>
  );
}
