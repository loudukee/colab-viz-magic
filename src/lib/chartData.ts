export type Library = 'matplotlib' | 'seaborn' | 'pandas' | 'plotly' | 'bokeh' | 'altair' | 'folium' | 'networkx';

export type Category = 'basic' | 'statistical' | 'advanced';

export interface ChartData {
  id: string;
  name: string;
  description: string;
  library: Library;
  category: Category;
  whenToUse: string;
  code: string;
  proTip?: string;
}

export const libraryColors: Record<Library, string> = {
  matplotlib: 'hsl(220, 70%, 50%)',
  seaborn: 'hsl(280, 60%, 55%)',
  pandas: 'hsl(340, 70%, 50%)',
  plotly: 'hsl(160, 60%, 45%)',
  bokeh: 'hsl(30, 80%, 50%)',
  altair: 'hsl(200, 70%, 50%)',
  folium: 'hsl(120, 50%, 45%)',
  networkx: 'hsl(45, 70%, 50%)',
};

export const libraryLabels: Record<Library, string> = {
  matplotlib: 'Matplotlib',
  seaborn: 'Seaborn',
  pandas: 'Pandas',
  plotly: 'Plotly',
  bokeh: 'Bokeh',
  altair: 'Altair',
  folium: 'Folium',
  networkx: 'NetworkX',
};

export const categoryLabels: Record<Category, string> = {
  basic: 'Basic',
  statistical: 'Statistical',
  advanced: 'Advanced',
};

export const charts: ChartData[] = [
  // MATPLOTLIB - Basic
  {
    id: 'mpl-line',
    name: 'Line Chart',
    description: 'Connect data points with lines to show trends over time',
    library: 'matplotlib',
    category: 'basic',
    whenToUse: 'Showing trends, time series data, or continuous relationships',
    code: `import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

plt.plot(x, y, marker='o', color='blue')
plt.xlabel('X Axis')
plt.ylabel('Y Axis')
plt.title('Simple Line Chart')
plt.grid(True)
plt.show()`,
    proTip: 'Add marker="o" to show data points on the line',
  },
  {
    id: 'mpl-bar',
    name: 'Bar Chart',
    description: 'Compare quantities across different categories',
    library: 'matplotlib',
    category: 'basic',
    whenToUse: 'Comparing discrete categories or groups',
    code: `import matplotlib.pyplot as plt

categories = ['A', 'B', 'C', 'D']
values = [23, 45, 56, 78]

plt.bar(categories, values, color='steelblue')
plt.xlabel('Categories')
plt.ylabel('Values')
plt.title('Bar Chart')
plt.show()`,
    proTip: 'Use plt.barh() for horizontal bars',
  },
  {
    id: 'mpl-scatter',
    name: 'Scatter Plot',
    description: 'Show relationship between two variables as points',
    library: 'matplotlib',
    category: 'basic',
    whenToUse: 'Finding correlations or patterns between two variables',
    code: `import matplotlib.pyplot as plt
import numpy as np

x = np.random.rand(50)
y = np.random.rand(50)
colors = np.random.rand(50)
sizes = 500 * np.random.rand(50)

plt.scatter(x, y, c=colors, s=sizes, alpha=0.5)
plt.colorbar()
plt.title('Scatter Plot')
plt.show()`,
    proTip: 'Use alpha for transparency when points overlap',
  },
  {
    id: 'mpl-pie',
    name: 'Pie Chart',
    description: 'Show proportions of a whole as slices',
    library: 'matplotlib',
    category: 'basic',
    whenToUse: 'Showing parts of a whole (max 5-6 categories)',
    code: `import matplotlib.pyplot as plt

sizes = [35, 30, 20, 15]
labels = ['A', 'B', 'C', 'D']
explode = (0.1, 0, 0, 0)  # Explode first slice

plt.pie(sizes, labels=labels, explode=explode,
        autopct='%1.1f%%', shadow=True)
plt.title('Pie Chart')
plt.show()`,
    proTip: 'Use explode to emphasize important slices',
  },
  {
    id: 'mpl-histogram',
    name: 'Histogram',
    description: 'Show distribution of numerical data',
    library: 'matplotlib',
    category: 'basic',
    whenToUse: 'Understanding data distribution and frequency',
    code: `import matplotlib.pyplot as plt
import numpy as np

data = np.random.randn(1000)

plt.hist(data, bins=30, edgecolor='black', alpha=0.7)
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.title('Histogram')
plt.show()`,
    proTip: 'Adjust bins parameter to control granularity',
  },
  {
    id: 'mpl-box',
    name: 'Box Plot',
    description: 'Show data distribution with quartiles and outliers',
    library: 'matplotlib',
    category: 'statistical',
    whenToUse: 'Comparing distributions or identifying outliers',
    code: `import matplotlib.pyplot as plt
import numpy as np

data = [np.random.randn(100) for _ in range(4)]

plt.boxplot(data, labels=['A', 'B', 'C', 'D'])
plt.ylabel('Values')
plt.title('Box Plot')
plt.show()`,
    proTip: 'The box shows IQR, whiskers show 1.5×IQR',
  },
  {
    id: 'mpl-subplot',
    name: 'Subplots',
    description: 'Create multiple plots in a grid layout',
    library: 'matplotlib',
    category: 'advanced',
    whenToUse: 'Comparing multiple visualizations side by side',
    code: `import matplotlib.pyplot as plt
import numpy as np

fig, axes = plt.subplots(2, 2, figsize=(10, 8))

x = np.linspace(0, 10, 100)

axes[0, 0].plot(x, np.sin(x))
axes[0, 0].set_title('Sine')

axes[0, 1].plot(x, np.cos(x))
axes[0, 1].set_title('Cosine')

axes[1, 0].bar(['A', 'B', 'C'], [1, 2, 3])
axes[1, 0].set_title('Bar')

axes[1, 1].scatter(np.random.rand(20), np.random.rand(20))
axes[1, 1].set_title('Scatter')

plt.tight_layout()
plt.show()`,
    proTip: 'Use plt.tight_layout() to prevent overlapping',
  },
  
  // SEABORN - Basic & Statistical
  {
    id: 'sns-lineplot',
    name: 'Line Plot',
    description: 'Statistical line plot with confidence intervals',
    library: 'seaborn',
    category: 'basic',
    whenToUse: 'Time series with automatic confidence bands',
    code: `import seaborn as sns
import matplotlib.pyplot as plt

# Load sample data
tips = sns.load_dataset('tips')

sns.lineplot(data=tips, x='size', y='total_bill')
plt.title('Line Plot with Confidence Interval')
plt.show()`,
    proTip: 'Seaborn automatically adds 95% confidence intervals',
  },
  {
    id: 'sns-barplot',
    name: 'Bar Plot',
    description: 'Bar chart with error bars showing uncertainty',
    library: 'seaborn',
    category: 'basic',
    whenToUse: 'Comparing categories with statistical error bars',
    code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset('tips')

sns.barplot(data=tips, x='day', y='total_bill', hue='sex')
plt.title('Grouped Bar Plot')
plt.show()`,
    proTip: 'Use hue parameter to add a grouping variable',
  },
  {
    id: 'sns-heatmap',
    name: 'Heatmap',
    description: 'Color-coded matrix for correlation or values',
    library: 'seaborn',
    category: 'statistical',
    whenToUse: 'Showing correlations or matrix data patterns',
    code: `import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

# Create correlation matrix
data = np.random.rand(5, 5)
labels = ['A', 'B', 'C', 'D', 'E']

sns.heatmap(data, annot=True, cmap='coolwarm',
            xticklabels=labels, yticklabels=labels)
plt.title('Heatmap')
plt.show()`,
    proTip: 'Use annot=True to show values in cells',
  },
  {
    id: 'sns-pairplot',
    name: 'Pair Plot',
    description: 'Matrix of scatter plots for all variable pairs',
    library: 'seaborn',
    category: 'statistical',
    whenToUse: 'Exploring relationships in multivariate data',
    code: `import seaborn as sns
import matplotlib.pyplot as plt

iris = sns.load_dataset('iris')

sns.pairplot(iris, hue='species', diag_kind='kde')
plt.show()`,
    proTip: 'Use diag_kind="kde" for distribution on diagonal',
  },
  {
    id: 'sns-violin',
    name: 'Violin Plot',
    description: 'Combines box plot with kernel density estimate',
    library: 'seaborn',
    category: 'statistical',
    whenToUse: 'Showing distribution shape along with statistics',
    code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset('tips')

sns.violinplot(data=tips, x='day', y='total_bill', hue='sex', split=True)
plt.title('Violin Plot')
plt.show()`,
    proTip: 'Use split=True to compare two groups side by side',
  },
  {
    id: 'sns-jointplot',
    name: 'Joint Plot',
    description: 'Scatter plot with marginal distributions',
    library: 'seaborn',
    category: 'statistical',
    whenToUse: 'Showing bivariate relationship with distributions',
    code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset('tips')

sns.jointplot(data=tips, x='total_bill', y='tip', kind='hex')
plt.show()`,
    proTip: 'Try kind="kde", "hex", or "reg" for different views',
  },
  {
    id: 'sns-regplot',
    name: 'Regression Plot',
    description: 'Scatter plot with linear regression line',
    library: 'seaborn',
    category: 'statistical',
    whenToUse: 'Visualizing linear relationships with trend line',
    code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset('tips')

sns.regplot(data=tips, x='total_bill', y='tip', ci=95)
plt.title('Regression Plot')
plt.show()`,
    proTip: 'ci parameter sets confidence interval (default 95%)',
  },
  
  // PANDAS
  {
    id: 'pd-line',
    name: 'DataFrame Line Plot',
    description: 'Quick line plot directly from DataFrame',
    library: 'pandas',
    category: 'basic',
    whenToUse: 'Fast visualization from pandas DataFrames',
    code: `import pandas as pd
import matplotlib.pyplot as plt

df = pd.DataFrame({
    'x': range(10),
    'y1': [i**2 for i in range(10)],
    'y2': [i**1.5 for i in range(10)]
})

df.plot(x='x', y=['y1', 'y2'], title='Pandas Line Plot')
plt.show()`,
    proTip: 'Pandas plot() returns matplotlib axes for customization',
  },
  {
    id: 'pd-bar',
    name: 'DataFrame Bar Plot',
    description: 'Bar chart from DataFrame columns',
    library: 'pandas',
    category: 'basic',
    whenToUse: 'Quick category comparison from DataFrames',
    code: `import pandas as pd
import matplotlib.pyplot as plt

df = pd.DataFrame({
    'Category': ['A', 'B', 'C', 'D'],
    'Values': [23, 45, 56, 78]
})

df.plot.bar(x='Category', y='Values', color='coral')
plt.title('Pandas Bar Plot')
plt.tight_layout()
plt.show()`,
    proTip: 'Use .plot.barh() for horizontal bars',
  },
  {
    id: 'pd-hist',
    name: 'DataFrame Histogram',
    description: 'Histogram directly from DataFrame column',
    library: 'pandas',
    category: 'basic',
    whenToUse: 'Quick distribution analysis of a column',
    code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

df = pd.DataFrame({'values': np.random.randn(1000)})

df['values'].plot.hist(bins=30, edgecolor='black')
plt.title('Pandas Histogram')
plt.show()`,
  },
  
  // PLOTLY
  {
    id: 'plotly-line',
    name: 'Interactive Line Chart',
    description: 'Zoomable, hoverable line chart',
    library: 'plotly',
    category: 'basic',
    whenToUse: 'Interactive exploration of trends',
    code: `import plotly.express as px
import pandas as pd

df = pd.DataFrame({
    'x': range(20),
    'y': [i**2 for i in range(20)]
})

fig = px.line(df, x='x', y='y', title='Interactive Line Chart')
fig.show()`,
    proTip: 'Hover over points to see exact values',
  },
  {
    id: 'plotly-bar',
    name: 'Interactive Bar Chart',
    description: 'Animated bar chart with hover info',
    library: 'plotly',
    category: 'basic',
    whenToUse: 'Interactive category comparisons',
    code: `import plotly.express as px

df = px.data.tips()

fig = px.bar(df, x='day', y='total_bill', color='sex',
             barmode='group', title='Interactive Bar Chart')
fig.show()`,
    proTip: 'Use barmode="stack" for stacked bars',
  },
  {
    id: 'plotly-scatter',
    name: 'Interactive Scatter',
    description: 'Scatter plot with zoom and hover',
    library: 'plotly',
    category: 'basic',
    whenToUse: 'Exploring relationships interactively',
    code: `import plotly.express as px

df = px.data.iris()

fig = px.scatter(df, x='sepal_width', y='sepal_length',
                 color='species', size='petal_length',
                 hover_data=['petal_width'])
fig.show()`,
    proTip: 'Add size parameter for bubble charts',
  },
  {
    id: 'plotly-3d',
    name: '3D Scatter Plot',
    description: 'Rotatable 3D visualization',
    library: 'plotly',
    category: 'advanced',
    whenToUse: 'Visualizing three-dimensional relationships',
    code: `import plotly.express as px

df = px.data.iris()

fig = px.scatter_3d(df, x='sepal_length', y='sepal_width',
                    z='petal_length', color='species')
fig.show()`,
    proTip: 'Click and drag to rotate the 3D view',
  },
  {
    id: 'plotly-animated',
    name: 'Animated Chart',
    description: 'Time-based animation with play button',
    library: 'plotly',
    category: 'advanced',
    whenToUse: 'Showing changes over time dynamically',
    code: `import plotly.express as px

df = px.data.gapminder()

fig = px.scatter(df, x='gdpPercap', y='lifeExp',
                 animation_frame='year', animation_group='country',
                 size='pop', color='continent',
                 hover_name='country', log_x=True,
                 range_y=[25, 90])
fig.show()`,
    proTip: 'Use animation_frame for time-based animations',
  },
  {
    id: 'plotly-sunburst',
    name: 'Sunburst Chart',
    description: 'Hierarchical data as nested rings',
    library: 'plotly',
    category: 'advanced',
    whenToUse: 'Showing hierarchical proportions',
    code: `import plotly.express as px

df = px.data.tips()

fig = px.sunburst(df, path=['day', 'time', 'sex'],
                  values='total_bill')
fig.show()`,
    proTip: 'Click segments to zoom into hierarchy levels',
  },
  
  // BOKEH
  {
    id: 'bokeh-line',
    name: 'Interactive Line',
    description: 'Web-ready interactive line chart',
    library: 'bokeh',
    category: 'basic',
    whenToUse: 'Embedding interactive plots in web pages',
    code: `from bokeh.plotting import figure, show
from bokeh.io import output_notebook

output_notebook()

p = figure(title='Bokeh Line Chart', x_axis_label='x', y_axis_label='y')
p.line([1, 2, 3, 4, 5], [2, 4, 6, 8, 10], line_width=2, color='navy')
p.circle([1, 2, 3, 4, 5], [2, 4, 6, 8, 10], size=8, color='red')

show(p)`,
    proTip: 'output_notebook() enables inline display in Colab',
  },
  {
    id: 'bokeh-scatter',
    name: 'Interactive Scatter',
    description: 'Scatter with built-in pan and zoom',
    library: 'bokeh',
    category: 'basic',
    whenToUse: 'Web-embeddable scatter plots',
    code: `from bokeh.plotting import figure, show
from bokeh.io import output_notebook
import numpy as np

output_notebook()

x = np.random.rand(100)
y = np.random.rand(100)

p = figure(title='Bokeh Scatter', tools='pan,wheel_zoom,box_zoom,reset')
p.scatter(x, y, size=10, color='green', alpha=0.5)

show(p)`,
    proTip: 'Customize tools parameter for different interactions',
  },
  
  // ALTAIR
  {
    id: 'altair-bar',
    name: 'Declarative Bar Chart',
    description: 'Grammar of graphics style bar chart',
    library: 'altair',
    category: 'basic',
    whenToUse: 'Concise, declarative chart specification',
    code: `import altair as alt
import pandas as pd

df = pd.DataFrame({
    'category': ['A', 'B', 'C', 'D'],
    'value': [28, 55, 43, 91]
})

chart = alt.Chart(df).mark_bar().encode(
    x='category',
    y='value',
    color='category'
).properties(title='Altair Bar Chart')

chart`,
    proTip: 'Altair uses a grammar of graphics approach',
  },
  {
    id: 'altair-scatter',
    name: 'Declarative Scatter',
    description: 'Interactive scatter with selections',
    library: 'altair',
    category: 'basic',
    whenToUse: 'Complex encodings with simple syntax',
    code: `import altair as alt
from vega_datasets import data

cars = data.cars()

chart = alt.Chart(cars).mark_circle(size=60).encode(
    x='Horsepower',
    y='Miles_per_Gallon',
    color='Origin',
    tooltip=['Name', 'Origin', 'Horsepower']
).interactive()

chart`,
    proTip: 'Add .interactive() for pan and zoom',
  },
  {
    id: 'altair-layered',
    name: 'Layered Chart',
    description: 'Combine multiple chart types',
    library: 'altair',
    category: 'advanced',
    whenToUse: 'Overlaying different visualizations',
    code: `import altair as alt
import pandas as pd
import numpy as np

df = pd.DataFrame({
    'x': range(20),
    'y': np.random.randn(20).cumsum()
})

line = alt.Chart(df).mark_line(color='blue').encode(x='x', y='y')
points = alt.Chart(df).mark_circle(color='red', size=50).encode(x='x', y='y')

(line + points).properties(title='Layered Chart')`,
    proTip: 'Use + operator to layer charts',
  },
  
  // FOLIUM
  {
    id: 'folium-map',
    name: 'Interactive Map',
    description: 'Leaflet-based interactive map',
    library: 'folium',
    category: 'basic',
    whenToUse: 'Geographic data visualization',
    code: `import folium

# Create map centered on coordinates
m = folium.Map(location=[40.7128, -74.0060], zoom_start=12)

# Add marker
folium.Marker(
    [40.7128, -74.0060],
    popup='New York City',
    icon=folium.Icon(color='red')
).add_to(m)

m`,
    proTip: 'Folium displays directly in Colab notebooks',
  },
  {
    id: 'folium-choropleth',
    name: 'Choropleth Map',
    description: 'Color-coded geographic regions',
    library: 'folium',
    category: 'statistical',
    whenToUse: 'Showing data by geographic region',
    code: `import folium
import pandas as pd

# Sample data (replace with your GeoJSON and data)
m = folium.Map(location=[40, -95], zoom_start=4)

# Add circle markers for cities
cities = [
    {'name': 'NYC', 'lat': 40.71, 'lon': -74.00, 'pop': 8.4},
    {'name': 'LA', 'lat': 34.05, 'lon': -118.24, 'pop': 3.9},
    {'name': 'Chicago', 'lat': 41.88, 'lon': -87.63, 'pop': 2.7}
]

for city in cities:
    folium.CircleMarker(
        [city['lat'], city['lon']],
        radius=city['pop'] * 3,
        popup=city['name'],
        fill=True
    ).add_to(m)

m`,
    proTip: 'Use CircleMarker radius to encode data values',
  },
  
  // NETWORKX
  {
    id: 'nx-basic',
    name: 'Network Graph',
    description: 'Nodes and edges visualization',
    library: 'networkx',
    category: 'advanced',
    whenToUse: 'Showing relationships or connections',
    code: `import networkx as nx
import matplotlib.pyplot as plt

# Create graph
G = nx.Graph()
G.add_edges_from([('A', 'B'), ('A', 'C'), ('B', 'D'), 
                  ('C', 'D'), ('D', 'E'), ('E', 'A')])

# Draw
plt.figure(figsize=(8, 6))
nx.draw(G, with_labels=True, node_color='lightblue',
        node_size=1500, font_size=16, font_weight='bold')
plt.title('Network Graph')
plt.show()`,
    proTip: 'Try different layouts: nx.spring_layout(), nx.circular_layout()',
  },
  {
    id: 'nx-directed',
    name: 'Directed Graph',
    description: 'Graph with directional edges',
    library: 'networkx',
    category: 'advanced',
    whenToUse: 'Showing flow or directed relationships',
    code: `import networkx as nx
import matplotlib.pyplot as plt

# Create directed graph
G = nx.DiGraph()
G.add_edges_from([('Start', 'A'), ('A', 'B'), ('A', 'C'),
                  ('B', 'End'), ('C', 'End')])

pos = nx.spring_layout(G)
plt.figure(figsize=(8, 6))

nx.draw(G, pos, with_labels=True, node_color='lightgreen',
        node_size=2000, font_size=12, arrows=True,
        arrowsize=20, edge_color='gray')
plt.title('Directed Graph')
plt.show()`,
    proTip: 'Use DiGraph() for directed, Graph() for undirected',
  },
];

export const setupCode = `# 📦 Install and Import Libraries

# Core libraries (usually pre-installed in Colab)
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import numpy as np

# Interactive libraries (may need installation)
!pip install plotly bokeh altair vega_datasets -q

import plotly.express as px
from bokeh.plotting import figure, show
from bokeh.io import output_notebook
import altair as alt

# Map and network libraries
!pip install folium networkx -q

import folium
import networkx as nx

# Enable notebook display for Bokeh
output_notebook()

print("✅ All libraries loaded!")`;
