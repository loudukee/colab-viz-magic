interface ChartPreviewProps {
  chartId: string;
  className?: string;
}

export function ChartPreview({ chartId, className = '' }: ChartPreviewProps) {
  const baseClass = `w-full h-32 rounded-lg bg-zinc-900 p-3 ${className}`;
  
  // Simple SVG visualizations for each chart type
  const previews: Record<string, JSX.Element> = {
    // Line charts
    'mpl-line': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <polyline
          points="5,50 20,40 35,45 50,25 65,30 80,15 95,10"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
        />
        <circle cx="5" cy="50" r="2" fill="#3b82f6" />
        <circle cx="20" cy="40" r="2" fill="#3b82f6" />
        <circle cx="35" cy="45" r="2" fill="#3b82f6" />
        <circle cx="50" cy="25" r="2" fill="#3b82f6" />
        <circle cx="65" cy="30" r="2" fill="#3b82f6" />
        <circle cx="80" cy="15" r="2" fill="#3b82f6" />
        <circle cx="95" cy="10" r="2" fill="#3b82f6" />
        <line x1="0" y1="55" x2="100" y2="55" stroke="#444" strokeWidth="1" />
        <line x1="5" y1="0" x2="5" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),
    'sns-lineplot': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <path
          d="M5,45 Q25,35 50,30 T95,15"
          fill="none"
          stroke="#a855f7"
          strokeWidth="2"
        />
        <path
          d="M5,50 Q25,42 50,38 T95,25 L95,20 Q70,15 50,22 T5,40 Z"
          fill="#a855f7"
          opacity="0.2"
        />
        <line x1="0" y1="55" x2="100" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),
    'pd-line': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <polyline points="5,45 25,35 45,40 65,20 85,25 95,15" fill="none" stroke="#ec4899" strokeWidth="2" />
        <polyline points="5,50 25,45 45,35 65,30 85,35 95,25" fill="none" stroke="#f97316" strokeWidth="2" />
        <line x1="0" y1="55" x2="100" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),
    'plotly-line': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <polyline points="5,50 20,35 40,40 60,20 80,25 95,10" fill="none" stroke="#10b981" strokeWidth="2" />
        <rect x="55" y="15" width="25" height="12" fill="#1f2937" rx="2" />
        <text x="58" y="24" fill="#10b981" fontSize="6">x: 60</text>
        <line x1="0" y1="55" x2="100" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),
    'bokeh-line': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <polyline points="5,50 25,30 45,35 65,20 85,25 95,10" fill="none" stroke="#1e3a5f" strokeWidth="2" />
        <circle cx="25" cy="30" r="3" fill="#ef4444" />
        <circle cx="45" cy="35" r="3" fill="#ef4444" />
        <circle cx="65" cy="20" r="3" fill="#ef4444" />
        <circle cx="85" cy="25" r="3" fill="#ef4444" />
        <line x1="0" y1="55" x2="100" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),

    // Bar charts
    'mpl-bar': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <rect x="10" y="35" width="15" height="20" fill="#4682b4" rx="1" />
        <rect x="30" y="20" width="15" height="35" fill="#4682b4" rx="1" />
        <rect x="50" y="15" width="15" height="40" fill="#4682b4" rx="1" />
        <rect x="70" y="5" width="15" height="50" fill="#4682b4" rx="1" />
        <line x1="5" y1="55" x2="95" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),
    'sns-barplot': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <rect x="8" y="25" width="10" height="30" fill="#a855f7" rx="1" />
        <rect x="20" y="20" width="10" height="35" fill="#ec4899" rx="1" />
        <rect x="38" y="30" width="10" height="25" fill="#a855f7" rx="1" />
        <rect x="50" y="15" width="10" height="40" fill="#ec4899" rx="1" />
        <rect x="68" y="20" width="10" height="35" fill="#a855f7" rx="1" />
        <rect x="80" y="10" width="10" height="45" fill="#ec4899" rx="1" />
        <line x1="5" y1="55" x2="95" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),
    'pd-bar': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <rect x="10" y="35" width="15" height="20" fill="#f97316" rx="1" />
        <rect x="30" y="20" width="15" height="35" fill="#f97316" rx="1" />
        <rect x="50" y="15" width="15" height="40" fill="#f97316" rx="1" />
        <rect x="70" y="5" width="15" height="50" fill="#f97316" rx="1" />
        <line x1="5" y1="55" x2="95" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),
    'plotly-bar': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <rect x="8" y="30" width="8" height="25" fill="#10b981" rx="1" />
        <rect x="18" y="25" width="8" height="30" fill="#3b82f6" rx="1" />
        <rect x="33" y="20" width="8" height="35" fill="#10b981" rx="1" />
        <rect x="43" y="10" width="8" height="45" fill="#3b82f6" rx="1" />
        <rect x="58" y="25" width="8" height="30" fill="#10b981" rx="1" />
        <rect x="68" y="15" width="8" height="40" fill="#3b82f6" rx="1" />
        <rect x="83" y="35" width="8" height="20" fill="#10b981" rx="1" />
        <line x1="5" y1="55" x2="95" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),
    'altair-bar': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <rect x="10" y="30" width="15" height="25" fill="#3b82f6" rx="1" />
        <rect x="30" y="10" width="15" height="45" fill="#10b981" rx="1" />
        <rect x="50" y="20" width="15" height="35" fill="#f59e0b" rx="1" />
        <rect x="70" y="5" width="15" height="50" fill="#ef4444" rx="1" />
        <line x1="5" y1="55" x2="95" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),

    // Scatter plots
    'mpl-scatter': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <circle cx="15" cy="40" r="4" fill="#3b82f6" opacity="0.6" />
        <circle cx="25" cy="25" r="6" fill="#10b981" opacity="0.6" />
        <circle cx="40" cy="35" r="3" fill="#f59e0b" opacity="0.6" />
        <circle cx="55" cy="15" r="5" fill="#ef4444" opacity="0.6" />
        <circle cx="65" cy="30" r="4" fill="#8b5cf6" opacity="0.6" />
        <circle cx="80" cy="20" r="7" fill="#ec4899" opacity="0.6" />
        <circle cx="90" cy="45" r="3" fill="#06b6d4" opacity="0.6" />
        <line x1="5" y1="55" x2="95" y2="55" stroke="#444" strokeWidth="1" />
        <line x1="5" y1="5" x2="5" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),
    'plotly-scatter': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <circle cx="20" cy="35" r="5" fill="#ef4444" opacity="0.7" />
        <circle cx="35" cy="20" r="6" fill="#ef4444" opacity="0.7" />
        <circle cx="45" cy="40" r="4" fill="#3b82f6" opacity="0.7" />
        <circle cx="60" cy="25" r="7" fill="#3b82f6" opacity="0.7" />
        <circle cx="75" cy="15" r="5" fill="#10b981" opacity="0.7" />
        <circle cx="85" cy="30" r="4" fill="#10b981" opacity="0.7" />
        <line x1="5" y1="55" x2="95" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),
    'bokeh-scatter': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <circle cx="15" cy="35" r="4" fill="#22c55e" opacity="0.5" />
        <circle cx="30" cy="20" r="4" fill="#22c55e" opacity="0.5" />
        <circle cx="45" cy="40" r="4" fill="#22c55e" opacity="0.5" />
        <circle cx="55" cy="15" r="4" fill="#22c55e" opacity="0.5" />
        <circle cx="70" cy="30" r="4" fill="#22c55e" opacity="0.5" />
        <circle cx="85" cy="25" r="4" fill="#22c55e" opacity="0.5" />
        <line x1="5" y1="55" x2="95" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),
    'altair-scatter': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <circle cx="20" cy="35" r="4" fill="#ef4444" />
        <circle cx="30" cy="25" r="4" fill="#3b82f6" />
        <circle cx="45" cy="40" r="4" fill="#10b981" />
        <circle cx="55" cy="20" r="4" fill="#ef4444" />
        <circle cx="70" cy="30" r="4" fill="#3b82f6" />
        <circle cx="85" cy="15" r="4" fill="#10b981" />
        <line x1="5" y1="55" x2="95" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),

    // Pie chart
    'mpl-pie': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <circle cx="50" cy="30" r="25" fill="#4682b4" />
        <path d="M50,30 L50,5 A25,25 0 0,1 75,30 Z" fill="#f59e0b" />
        <path d="M50,30 L75,30 A25,25 0 0,1 50,55 Z" fill="#10b981" />
        <path d="M50,30 L50,55 A25,25 0 0,1 30,45 Z" fill="#ef4444" />
      </svg>
    ),

    // Histogram
    'mpl-histogram': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <rect x="5" y="45" width="8" height="10" fill="#3b82f6" opacity="0.8" />
        <rect x="14" y="35" width="8" height="20" fill="#3b82f6" opacity="0.8" />
        <rect x="23" y="20" width="8" height="35" fill="#3b82f6" opacity="0.8" />
        <rect x="32" y="10" width="8" height="45" fill="#3b82f6" opacity="0.8" />
        <rect x="41" y="5" width="8" height="50" fill="#3b82f6" opacity="0.8" />
        <rect x="50" y="10" width="8" height="45" fill="#3b82f6" opacity="0.8" />
        <rect x="59" y="20" width="8" height="35" fill="#3b82f6" opacity="0.8" />
        <rect x="68" y="30" width="8" height="25" fill="#3b82f6" opacity="0.8" />
        <rect x="77" y="40" width="8" height="15" fill="#3b82f6" opacity="0.8" />
        <rect x="86" y="48" width="8" height="7" fill="#3b82f6" opacity="0.8" />
        <line x1="5" y1="55" x2="95" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),
    'pd-hist': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <rect x="10" y="40" width="10" height="15" fill="#ec4899" opacity="0.8" />
        <rect x="22" y="25" width="10" height="30" fill="#ec4899" opacity="0.8" />
        <rect x="34" y="10" width="10" height="45" fill="#ec4899" opacity="0.8" />
        <rect x="46" y="15" width="10" height="40" fill="#ec4899" opacity="0.8" />
        <rect x="58" y="25" width="10" height="30" fill="#ec4899" opacity="0.8" />
        <rect x="70" y="35" width="10" height="20" fill="#ec4899" opacity="0.8" />
        <rect x="82" y="45" width="10" height="10" fill="#ec4899" opacity="0.8" />
        <line x1="5" y1="55" x2="95" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),

    // Box plot
    'mpl-box': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <line x1="17" y1="10" x2="17" y2="50" stroke="#666" strokeWidth="1" />
        <rect x="10" y="20" width="14" height="20" fill="#3b82f6" stroke="#3b82f6" />
        <line x1="10" y1="30" x2="24" y2="30" stroke="#fff" strokeWidth="2" />
        <line x1="42" y1="15" x2="42" y2="45" stroke="#666" strokeWidth="1" />
        <rect x="35" y="22" width="14" height="18" fill="#3b82f6" stroke="#3b82f6" />
        <line x1="35" y1="32" x2="49" y2="32" stroke="#fff" strokeWidth="2" />
        <line x1="67" y1="8" x2="67" y2="48" stroke="#666" strokeWidth="1" />
        <rect x="60" y="18" width="14" height="22" fill="#3b82f6" stroke="#3b82f6" />
        <line x1="60" y1="28" x2="74" y2="28" stroke="#fff" strokeWidth="2" />
        <line x1="5" y1="55" x2="95" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),

    // Heatmap
    'sns-heatmap': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <rect x="10" y="5" width="15" height="10" fill="#1e40af" />
        <rect x="27" y="5" width="15" height="10" fill="#3b82f6" />
        <rect x="44" y="5" width="15" height="10" fill="#ef4444" />
        <rect x="61" y="5" width="15" height="10" fill="#f59e0b" />
        <rect x="78" y="5" width="15" height="10" fill="#22c55e" />
        <rect x="10" y="17" width="15" height="10" fill="#3b82f6" />
        <rect x="27" y="17" width="15" height="10" fill="#ef4444" />
        <rect x="44" y="17" width="15" height="10" fill="#1e40af" />
        <rect x="61" y="17" width="15" height="10" fill="#22c55e" />
        <rect x="78" y="17" width="15" height="10" fill="#f59e0b" />
        <rect x="10" y="29" width="15" height="10" fill="#ef4444" />
        <rect x="27" y="29" width="15" height="10" fill="#22c55e" />
        <rect x="44" y="29" width="15" height="10" fill="#3b82f6" />
        <rect x="61" y="29" width="15" height="10" fill="#1e40af" />
        <rect x="78" y="29" width="15" height="10" fill="#ef4444" />
        <rect x="10" y="41" width="15" height="10" fill="#f59e0b" />
        <rect x="27" y="41" width="15" height="10" fill="#1e40af" />
        <rect x="44" y="41" width="15" height="10" fill="#22c55e" />
        <rect x="61" y="41" width="15" height="10" fill="#ef4444" />
        <rect x="78" y="41" width="15" height="10" fill="#3b82f6" />
      </svg>
    ),

    // Pair plot
    'sns-pairplot': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <rect x="5" y="5" width="28" height="16" fill="#1f2937" stroke="#444" />
        <circle cx="12" cy="13" r="2" fill="#ef4444" />
        <circle cx="18" cy="10" r="2" fill="#3b82f6" />
        <circle cx="25" cy="15" r="2" fill="#10b981" />
        <rect x="36" y="5" width="28" height="16" fill="#1f2937" stroke="#444" />
        <rect x="40" y="8" width="4" height="10" fill="#a855f7" opacity="0.5" />
        <rect x="46" y="10" width="4" height="8" fill="#a855f7" opacity="0.5" />
        <rect x="52" y="12" width="4" height="6" fill="#a855f7" opacity="0.5" />
        <rect x="67" y="5" width="28" height="16" fill="#1f2937" stroke="#444" />
        <circle cx="74" cy="13" r="2" fill="#ef4444" />
        <circle cx="80" cy="9" r="2" fill="#3b82f6" />
        <circle cx="88" cy="14" r="2" fill="#10b981" />
        <rect x="5" y="24" width="28" height="16" fill="#1f2937" stroke="#444" />
        <circle cx="12" cy="32" r="2" fill="#ef4444" />
        <circle cx="20" cy="28" r="2" fill="#3b82f6" />
        <circle cx="26" cy="35" r="2" fill="#10b981" />
        <rect x="36" y="24" width="28" height="16" fill="#1f2937" stroke="#444" />
        <circle cx="43" cy="30" r="2" fill="#ef4444" />
        <circle cx="50" cy="34" r="2" fill="#3b82f6" />
        <circle cx="58" cy="28" r="2" fill="#10b981" />
        <rect x="67" y="24" width="28" height="16" fill="#1f2937" stroke="#444" />
        <rect x="71" y="27" width="4" height="10" fill="#a855f7" opacity="0.5" />
        <rect x="78" y="29" width="4" height="8" fill="#a855f7" opacity="0.5" />
        <rect x="85" y="31" width="4" height="6" fill="#a855f7" opacity="0.5" />
        <rect x="5" y="43" width="28" height="14" fill="#1f2937" stroke="#444" />
        <rect x="36" y="43" width="28" height="14" fill="#1f2937" stroke="#444" />
        <rect x="67" y="43" width="28" height="14" fill="#1f2937" stroke="#444" />
      </svg>
    ),

    // Violin plot
    'sns-violin': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <ellipse cx="25" cy="30" rx="8" ry="22" fill="#a855f7" opacity="0.6" />
        <ellipse cx="25" cy="30" rx="4" ry="18" fill="#a855f7" opacity="0.8" />
        <ellipse cx="50" cy="30" rx="10" ry="20" fill="#ec4899" opacity="0.6" />
        <ellipse cx="50" cy="30" rx="5" ry="15" fill="#ec4899" opacity="0.8" />
        <ellipse cx="75" cy="30" rx="7" ry="24" fill="#a855f7" opacity="0.6" />
        <ellipse cx="75" cy="30" rx="3" ry="20" fill="#a855f7" opacity="0.8" />
        <line x1="5" y1="55" x2="95" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),

    // Joint plot
    'sns-jointplot': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <rect x="15" y="10" width="60" height="40" fill="#1f2937" stroke="#444" />
        <circle cx="25" cy="35" r="2" fill="#06b6d4" />
        <circle cx="35" cy="25" r="2" fill="#06b6d4" />
        <circle cx="40" cy="40" r="2" fill="#06b6d4" />
        <circle cx="50" cy="20" r="2" fill="#06b6d4" />
        <circle cx="55" cy="30" r="2" fill="#06b6d4" />
        <circle cx="65" cy="15" r="2" fill="#06b6d4" />
        <rect x="15" y="2" width="60" height="6" fill="#1f2937" stroke="#444" />
        <rect x="20" y="3" width="8" height="4" fill="#06b6d4" opacity="0.5" />
        <rect x="35" y="3" width="15" height="4" fill="#06b6d4" opacity="0.7" />
        <rect x="55" y="3" width="10" height="4" fill="#06b6d4" opacity="0.6" />
        <rect x="77" y="10" width="6" height="40" fill="#1f2937" stroke="#444" />
        <rect x="78" y="12" width="4" height="8" fill="#06b6d4" opacity="0.5" />
        <rect x="78" y="25" width="4" height="12" fill="#06b6d4" opacity="0.7" />
        <rect x="78" y="40" width="4" height="8" fill="#06b6d4" opacity="0.6" />
      </svg>
    ),

    // Regression plot
    'sns-regplot': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <line x1="10" y1="50" x2="90" y2="10" stroke="#3b82f6" strokeWidth="2" />
        <path d="M10,55 Q50,35 90,5 L90,15 Q50,25 10,45 Z" fill="#3b82f6" opacity="0.2" />
        <circle cx="15" cy="48" r="3" fill="#3b82f6" />
        <circle cx="25" cy="42" r="3" fill="#3b82f6" />
        <circle cx="40" cy="38" r="3" fill="#3b82f6" />
        <circle cx="55" cy="28" r="3" fill="#3b82f6" />
        <circle cx="70" cy="22" r="3" fill="#3b82f6" />
        <circle cx="85" cy="12" r="3" fill="#3b82f6" />
        <line x1="5" y1="55" x2="95" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),

    // Subplots
    'mpl-subplot': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <rect x="5" y="5" width="42" height="22" fill="#1f2937" stroke="#444" />
        <polyline points="10,22 18,15 26,18 34,10 42,12" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
        <rect x="53" y="5" width="42" height="22" fill="#1f2937" stroke="#444" />
        <polyline points="58,20 66,12 74,18 82,8 90,15" fill="none" stroke="#10b981" strokeWidth="1.5" />
        <rect x="5" y="33" width="42" height="22" fill="#1f2937" stroke="#444" />
        <rect x="10" y="40" width="8" height="12" fill="#f59e0b" />
        <rect x="22" y="38" width="8" height="14" fill="#f59e0b" />
        <rect x="34" y="42" width="8" height="10" fill="#f59e0b" />
        <rect x="53" y="33" width="42" height="22" fill="#1f2937" stroke="#444" />
        <circle cx="62" cy="45" r="3" fill="#ef4444" />
        <circle cx="72" cy="40" r="3" fill="#ef4444" />
        <circle cx="82" cy="48" r="3" fill="#ef4444" />
        <circle cx="88" cy="42" r="3" fill="#ef4444" />
      </svg>
    ),

    // 3D scatter
    'plotly-3d': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <line x1="20" y1="50" x2="80" y2="50" stroke="#444" strokeWidth="1" />
        <line x1="20" y1="50" x2="5" y2="35" stroke="#444" strokeWidth="1" />
        <line x1="20" y1="50" x2="20" y2="10" stroke="#444" strokeWidth="1" />
        <circle cx="35" cy="40" r="4" fill="#ef4444" opacity="0.8" />
        <circle cx="50" cy="30" r="5" fill="#3b82f6" opacity="0.8" />
        <circle cx="45" cy="45" r="3" fill="#10b981" opacity="0.8" />
        <circle cx="65" cy="25" r="4" fill="#ef4444" opacity="0.8" />
        <circle cx="55" cy="35" r="3" fill="#3b82f6" opacity="0.8" />
        <circle cx="70" cy="40" r="4" fill="#10b981" opacity="0.8" />
      </svg>
    ),

    // Animated
    'plotly-animated': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <circle cx="30" cy="35" r="8" fill="#ef4444" opacity="0.6" />
        <circle cx="50" cy="25" r="12" fill="#3b82f6" opacity="0.6" />
        <circle cx="70" cy="40" r="6" fill="#10b981" opacity="0.6" />
        <rect x="30" y="52" width="40" height="4" fill="#1f2937" rx="2" />
        <rect x="32" y="53" width="15" height="2" fill="#3b82f6" rx="1" />
        <polygon points="85,53 90,51 90,57" fill="#666" />
        <line x1="5" y1="55" x2="25" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),

    // Sunburst
    'plotly-sunburst': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <circle cx="50" cy="30" r="10" fill="#3b82f6" />
        <path d="M50,30 L50,5 A25,25 0 0,1 75,30 Z" fill="#ef4444" opacity="0.8" />
        <path d="M50,30 L75,30 A25,25 0 0,1 50,55 Z" fill="#10b981" opacity="0.8" />
        <path d="M50,30 L50,55 A25,25 0 0,1 25,30 Z" fill="#f59e0b" opacity="0.8" />
        <path d="M50,30 L25,30 A25,25 0 0,1 50,5 Z" fill="#8b5cf6" opacity="0.8" />
      </svg>
    ),

    // Altair layered
    'altair-layered': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <polyline points="10,45 30,30 50,35 70,20 90,25" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <circle cx="10" cy="45" r="3" fill="#ef4444" />
        <circle cx="30" cy="30" r="3" fill="#ef4444" />
        <circle cx="50" cy="35" r="3" fill="#ef4444" />
        <circle cx="70" cy="20" r="3" fill="#ef4444" />
        <circle cx="90" cy="25" r="3" fill="#ef4444" />
        <line x1="5" y1="55" x2="95" y2="55" stroke="#444" strokeWidth="1" />
      </svg>
    ),

    // Folium map
    'folium-map': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <rect x="5" y="5" width="90" height="50" fill="#1a365d" rx="2" />
        <path d="M20,15 L35,20 L30,35 L15,40 Z" fill="#2d4a3e" opacity="0.7" />
        <path d="M45,10 L70,15 L75,30 L60,40 L40,35 Z" fill="#2d4a3e" opacity="0.7" />
        <path d="M78,20 L90,18 L92,35 L80,38 Z" fill="#2d4a3e" opacity="0.7" />
        <circle cx="50" cy="25" r="4" fill="#ef4444" />
        <path d="M50,21 L50,15" stroke="#ef4444" strokeWidth="2" />
      </svg>
    ),

    // Choropleth
    'folium-choropleth': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <rect x="5" y="5" width="90" height="50" fill="#1e3a5f" rx="2" />
        <circle cx="25" cy="25" r="8" fill="#ef4444" opacity="0.6" />
        <circle cx="60" cy="20" r="12" fill="#ef4444" opacity="0.4" />
        <circle cx="75" cy="40" r="6" fill="#ef4444" opacity="0.8" />
        <text x="25" y="27" fill="white" fontSize="6" textAnchor="middle">NYC</text>
        <text x="60" y="22" fill="white" fontSize="6" textAnchor="middle">LA</text>
      </svg>
    ),

    // Network graph
    'nx-basic': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <line x1="30" y1="15" x2="70" y2="15" stroke="#666" strokeWidth="1" />
        <line x1="30" y1="15" x2="20" y2="40" stroke="#666" strokeWidth="1" />
        <line x1="70" y1="15" x2="80" y2="40" stroke="#666" strokeWidth="1" />
        <line x1="20" y1="40" x2="50" y2="50" stroke="#666" strokeWidth="1" />
        <line x1="80" y1="40" x2="50" y2="50" stroke="#666" strokeWidth="1" />
        <line x1="30" y1="15" x2="50" y2="50" stroke="#666" strokeWidth="1" />
        <circle cx="30" cy="15" r="6" fill="#87ceeb" />
        <circle cx="70" cy="15" r="6" fill="#87ceeb" />
        <circle cx="20" cy="40" r="6" fill="#87ceeb" />
        <circle cx="80" cy="40" r="6" fill="#87ceeb" />
        <circle cx="50" cy="50" r="6" fill="#87ceeb" />
        <text x="30" y="17" fill="#1f2937" fontSize="5" textAnchor="middle">A</text>
        <text x="70" y="17" fill="#1f2937" fontSize="5" textAnchor="middle">B</text>
      </svg>
    ),

    // Directed graph
    'nx-directed': (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#666" />
          </marker>
        </defs>
        <line x1="20" y1="30" x2="38" y2="30" stroke="#666" strokeWidth="1" markerEnd="url(#arrow)" />
        <line x1="50" y1="25" x2="68" y2="15" stroke="#666" strokeWidth="1" markerEnd="url(#arrow)" />
        <line x1="50" y1="35" x2="68" y2="45" stroke="#666" strokeWidth="1" markerEnd="url(#arrow)" />
        <line x1="80" y1="18" x2="88" y2="28" stroke="#666" strokeWidth="1" markerEnd="url(#arrow)" />
        <line x1="80" y1="42" x2="88" y2="32" stroke="#666" strokeWidth="1" markerEnd="url(#arrow)" />
        <circle cx="15" cy="30" r="6" fill="#90ee90" />
        <circle cx="50" cy="30" r="6" fill="#90ee90" />
        <circle cx="80" cy="15" r="6" fill="#90ee90" />
        <circle cx="80" cy="45" r="6" fill="#90ee90" />
        <circle cx="92" cy="30" r="6" fill="#90ee90" />
      </svg>
    ),
  };

  // Default visualization for charts without specific preview
  const defaultPreview = (
    <svg viewBox="0 0 100 60" className="w-full h-full">
      <rect x="10" y="35" width="12" height="20" fill="#6b7280" rx="1" />
      <rect x="27" y="25" width="12" height="30" fill="#6b7280" rx="1" />
      <rect x="44" y="15" width="12" height="40" fill="#6b7280" rx="1" />
      <rect x="61" y="20" width="12" height="35" fill="#6b7280" rx="1" />
      <rect x="78" y="30" width="12" height="25" fill="#6b7280" rx="1" />
      <line x1="5" y1="55" x2="95" y2="55" stroke="#444" strokeWidth="1" />
    </svg>
  );

  return (
    <div className={baseClass}>
      {previews[chartId] || defaultPreview}
    </div>
  );
}
