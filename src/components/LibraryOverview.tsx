import { libraryColors } from '@/lib/chartData';

const libraryInfo = [
  {
    id: 'matplotlib',
    name: 'Matplotlib',
    bestFor: 'Foundation for all Python plotting. Maximum control over every element.',
    useCase: 'Publication-quality static charts, custom layouts, fine-tuning',
  },
  {
    id: 'seaborn',
    name: 'Seaborn',
    bestFor: 'Beautiful statistical visualizations with minimal code.',
    useCase: 'Distributions, correlations, grouped comparisons',
  },
  {
    id: 'pandas',
    name: 'Pandas',
    bestFor: 'Quick plots directly from DataFrames—no extra imports needed.',
    useCase: 'Fast EDA, simple charts during data analysis',
  },
  {
    id: 'plotly',
    name: 'Plotly',
    bestFor: 'Interactive charts with zoom, hover, and animations.',
    useCase: 'Dashboards, presentations, exploring complex data',
  },
  {
    id: 'bokeh',
    name: 'Bokeh',
    bestFor: 'Web-ready interactive plots with streaming support.',
    useCase: 'Real-time data, web applications, large datasets',
  },
  {
    id: 'altair',
    name: 'Altair',
    bestFor: 'Declarative grammar of graphics—concise and elegant.',
    useCase: 'Complex encodings, linked views, quick prototyping',
  },
  {
    id: 'folium',
    name: 'Folium',
    bestFor: 'Interactive maps powered by Leaflet.js.',
    useCase: 'Geographic data, markers, choropleth maps',
  },
  {
    id: 'networkx',
    name: 'NetworkX',
    bestFor: 'Graph and network analysis with visualization.',
    useCase: 'Social networks, flowcharts, relationship diagrams',
  },
];

export function LibraryOverview() {
  return (
    <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        📚 Library Quick Guide
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {libraryInfo.map((lib) => (
          <div
            key={lib.id}
            className="rounded-lg p-3 border border-border/50 bg-background/50 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: libraryColors[lib.id as keyof typeof libraryColors] }}
              />
              <h3 className="font-semibold text-sm text-foreground">{lib.name}</h3>
            </div>
            <p className="text-xs text-foreground/90 mb-1">{lib.bestFor}</p>
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">Use for:</span> {lib.useCase}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
