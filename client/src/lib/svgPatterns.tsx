import React from 'react';

// Generate a random color in the range of tech-looking colors
function getRandomColor(saturation = '70%', lightness = '50%', hueMin = 180, hueMax = 270) {
  const hue = Math.floor(Math.random() * (hueMax - hueMin) + hueMin);
  return `hsl(${hue}, ${saturation}, ${lightness})`;
}

// A function to create a unique pattern ID
const createUniqueId = () => `pattern-${Math.random().toString(36).substring(2, 11)}`;

// Grid pattern with varying colors
export const GridPattern = ({ id = createUniqueId(), primaryColor = getRandomColor(), secondaryColor = getRandomColor(), size = 20 }) => {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width={size} height={size}>
          <rect width={size} height={size} fill={primaryColor} opacity="0.3" />
          <path d={`M${size},0 L0,${size}`} stroke={secondaryColor} strokeWidth="1" />
          <path d={`M0,0 L${size},${size}`} stroke={secondaryColor} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};

// Circuit-like pattern
export const CircuitPattern = ({ id = createUniqueId(), primaryColor = getRandomColor(), secondaryColor = getRandomColor(), size = 50 }) => {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width={size} height={size}>
          <rect width={size} height={size} fill={primaryColor} opacity="0.2" />
          <circle cx={size/4} cy={size/4} r="2" fill={secondaryColor} />
          <circle cx={size/2} cy={size/2} r="2" fill={secondaryColor} />
          <circle cx={3*size/4} cy={3*size/4} r="2" fill={secondaryColor} />
          <path d={`M${size/4},${size/4} L${size/2},${size/2}`} stroke={secondaryColor} strokeWidth="1" />
          <path d={`M${size/2},${size/2} L${3*size/4},${3*size/4}`} stroke={secondaryColor} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};

// Gradient wave pattern
export const WavePattern = ({ id = createUniqueId(), primaryColor = getRandomColor(), secondaryColor = getRandomColor() }) => {
  const gradientId = `${id}-gradient`;
  
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryColor} stopOpacity="0.7" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.7" />
        </linearGradient>
        <pattern id={id} patternUnits="userSpaceOnUse" width="100" height="30">
          <path d="M0,15 Q25,0 50,15 T100,15" stroke={`url(#${gradientId})`} fill="none" strokeWidth="2" />
          <path d="M0,30 Q25,15 50,30 T100,30" stroke={`url(#${gradientId})`} fill="none" strokeWidth="2" />
          <path d="M0,0 Q25,15 50,0 T100,0" stroke={`url(#${gradientId})`} fill="none" strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};

// Dot grid pattern
export const DotGridPattern = ({ id = createUniqueId(), primaryColor = getRandomColor(), size = 20 }) => {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width={size} height={size}>
          <rect width={size} height={size} fill="none" />
          <circle cx={size/2} cy={size/2} r="2" fill={primaryColor} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};

// Hexagon pattern
export const HexagonPattern = ({ id = createUniqueId(), primaryColor = getRandomColor(), size = 30 }) => {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width={size} height={size * 0.866}>
          <path d={`M0,${size * 0.433} L${size/2},0 L${size},${size * 0.433} L${size},${size * 0.866} L${size/2},${size * 1.299} L0,${size * 0.866} Z`} 
                stroke={primaryColor} fill="none" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};

// Triangle pattern
export const TrianglePattern = ({ id = createUniqueId(), primaryColor = getRandomColor(), size = 20 }) => {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width={size} height={size}>
          <path d={`M0,0 L${size},0 L${size/2},${size} Z`} fill={primaryColor} opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};

// Neural network pattern
export const NeuralNetworkPattern = ({ id = createUniqueId(), primaryColor = getRandomColor(), secondaryColor = getRandomColor(), size = 100 }) => {
  interface Node {
    x: number;
    y: number;
  }
  
  interface Connection {
    from: number;
    to: number;
  }
  
  const nodes: Node[] = [];
  const connections: Connection[] = [];
  const nodeCount = 10;
  
  // Generate random nodes
  for (let i = 0; i < nodeCount; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    nodes.push({ x, y });
  }
  
  // Generate connections between nodes
  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      if (Math.random() > 0.7) {
        connections.push({ from: i, to: j });
      }
    }
  }
  
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width={size} height={size}>
          <rect width={size} height={size} fill="none" />
          {connections.map((conn, index) => (
            <line 
              key={`conn-${index}`}
              x1={nodes[conn.from].x} 
              y1={nodes[conn.from].y} 
              x2={nodes[conn.to].x} 
              y2={nodes[conn.to].y} 
              stroke={secondaryColor} 
              strokeWidth="0.5" 
              opacity="0.6"
            />
          ))}
          {nodes.map((node, index) => (
            <circle 
              key={`node-${index}`}
              cx={node.x} 
              cy={node.y} 
              r="2" 
              fill={primaryColor} 
            />
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};

// Cinematic frame pattern
export const FilmFramePattern = ({ id = createUniqueId(), primaryColor = getRandomColor(), size = 50 }) => {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width={size} height={size}>
          <rect width={size} height={size} fill="none" stroke={primaryColor} strokeWidth="1" />
          <circle cx={size/2} cy={size/2} r={size/6} fill="none" stroke={primaryColor} strokeWidth="1" />
          <rect x={size/10} y="0" width={size/20} height={size/10} fill={primaryColor} />
          <rect x={size/10} y={size*0.9} width={size/20} height={size/10} fill={primaryColor} />
          <rect x={size*0.9-size/20} y="0" width={size/20} height={size/10} fill={primaryColor} />
          <rect x={size*0.9-size/20} y={size*0.9} width={size/20} height={size/10} fill={primaryColor} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};

// Abstract data visualization pattern
export const DataVisualizationPattern = ({ id = createUniqueId(), primaryColor = getRandomColor(), secondaryColor = getRandomColor(), size = 100 }) => {
  // Generate random bars
  const barCount = 10;
  const barWidth = size / barCount;
  const bars = Array(barCount).fill(0).map(() => Math.random() * 0.8 + 0.2); // Values between 0.2 and 1.0
  
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}-gradient`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={primaryColor} stopOpacity="0.8" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.8" />
        </linearGradient>
        <pattern id={id} patternUnits="userSpaceOnUse" width={size} height={size}>
          <rect width={size} height={size} fill="none" />
          {bars.map((height, index) => (
            <rect 
              key={`bar-${index}`}
              x={index * barWidth} 
              y={size * (1 - height)} 
              width={barWidth - 1} 
              height={size * height} 
              fill={`url(#${id}-gradient)`} 
              rx="2" 
              ry="2"
            />
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};

// A component that generates and returns a random pattern
export const RandomPattern = (props: any) => {
  const patterns = [
    GridPattern,
    CircuitPattern,
    WavePattern,
    DotGridPattern,
    HexagonPattern, 
    TrianglePattern,
    NeuralNetworkPattern,
    FilmFramePattern,
    DataVisualizationPattern
  ];
  
  const PatternComponent = patterns[Math.floor(Math.random() * patterns.length)];
  return <PatternComponent {...props} />;
};

// SVG Pattern Wrapper Component
interface PatternImageProps {
  patternType?: 'grid' | 'circuit' | 'wave' | 'dots' | 'hexagon' | 'triangle' | 'neural' | 'film' | 'data' | 'random';
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
  size?: number;
}

export const PatternImage: React.FC<PatternImageProps> = ({ 
  patternType = 'random', 
  className = '',
  primaryColor,
  secondaryColor,
  size
}) => {
  const props = { primaryColor, secondaryColor, size };
  
  const renderPattern = () => {
    switch (patternType) {
      case 'grid': return <GridPattern {...props} />;
      case 'circuit': return <CircuitPattern {...props} />;
      case 'wave': return <WavePattern {...props} />;
      case 'dots': return <DotGridPattern {...props} />;
      case 'hexagon': return <HexagonPattern {...props} />;
      case 'triangle': return <TrianglePattern {...props} />;
      case 'neural': return <NeuralNetworkPattern {...props} />;
      case 'film': return <FilmFramePattern {...props} />;
      case 'data': return <DataVisualizationPattern {...props} />;
      case 'random': 
      default: return <RandomPattern {...props} />;
    }
  };

  return (
    <div className={`w-full h-full ${className}`}>
      {renderPattern()}
    </div>
  );
};

export default PatternImage;