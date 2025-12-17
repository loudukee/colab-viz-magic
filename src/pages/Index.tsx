import { useState, useMemo } from 'react';
import { BarChart3, Sparkles } from 'lucide-react';
import { ChartCard } from '@/components/ChartCard';
import { LibraryTabs } from '@/components/LibraryTabs';
import { SearchFilter } from '@/components/SearchFilter';
import { SetupSection } from '@/components/SetupSection';
import { LibraryOverview } from '@/components/LibraryOverview';
import { charts, Library, Category } from '@/lib/chartData';

const Index = () => {
  const [selectedLibrary, setSelectedLibrary] = useState<Library | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCharts = useMemo(() => {
    return charts.filter((chart) => {
      const matchesLibrary = selectedLibrary === 'all' || chart.library === selectedLibrary;
      const matchesCategory = selectedCategory === 'all' || chart.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        chart.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chart.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chart.whenToUse.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesLibrary && matchesCategory && matchesSearch;
    });
  }, [selectedLibrary, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="relative container mx-auto px-4 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span className="text-sm font-medium text-amber-500">Beginner Friendly</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Python Data Visualization
            <span className="text-primary"> Cheat Sheet</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Your go-to reference for creating beautiful charts in Google Colab. 
            Copy-ready code snippets for Matplotlib, Seaborn, Plotly, and more.
          </p>

          {/* Setup Section */}
          <SetupSection />

          {/* Library Overview */}
          <div className="mt-6">
            <LibraryOverview />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="space-y-6 mb-8">
          <LibraryTabs
            selectedLibrary={selectedLibrary}
            onSelect={setSelectedLibrary}
          />
          <SearchFilter
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredCharts.length}</span> chart
            {filteredCharts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Chart Cards Grid */}
        {filteredCharts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCharts.map((chart) => (
              <ChartCard key={chart.id} chart={chart} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">
              No charts found matching your filters.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-sm text-muted-foreground">
            Made for Google Colab beginners • Copy any code snippet and paste directly into your notebook
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
