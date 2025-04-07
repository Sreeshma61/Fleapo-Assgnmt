import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Path, Line, Circle, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

const  LineGraph = () => {
  const chartWidth = 361;
  const chartHeight = 86;

  const data = [5.3, 6.8, 7.4, 8.0, 9.8];
  const maxY = 10;
  const minY = 5;

  // Convert data points into SVG Path
  const points = data.map((value, index) => {
    const x = (chartWidth / (data.length - 1)) * index;
    const y = chartHeight - ((value - minY) / (maxY - minY)) * chartHeight;
    return { x, y };
  });

  const pathData = points.reduce((acc, point, i) => {
    return i === 0
      ? `M ${point.x},${point.y}`
      : `${acc} L ${point.x},${point.y}`;
  }, '');

  const peak = points[3];

  return (
    <View style={styles.container}>
      <Svg width={chartWidth} height={chartHeight}>
        {/* Background gradient under the line */}
        <Defs>
          <LinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0%" stopColor="red" stopOpacity="0.4" />
            <Stop offset="100%" stopColor="black" stopOpacity="1" />
          </LinearGradient>
        </Defs>

        {/* Horizontal grid lines */}
        {[1, 2, 3].map(i => (
          <Line
            key={i}
            x1="0"
            y1={(chartHeight / 4) * i}
            x2={chartWidth}
            y2={(chartHeight / 4) * i}
            stroke="gray"
            strokeWidth={0.3}
          />
        ))}

        {/* Gradient fill area (optional) */}
        <Path
          d={`${pathData} L ${chartWidth},${chartHeight} L 0,${chartHeight} Z`}
          fill="url(#gradient)"
        />

        {/* Red line path */}
        <Path d={pathData} stroke="red" strokeWidth="2" fill="none" />

        {/* Peak vertical line */}
        <Line
          x1={peak.x}
          y1="0"
          x2={peak.x}
          y2={66}
          stroke="red"
          strokeWidth="1"
        />

        {/* Peak circle */}
        <Circle cx={peak.x} cy={peak.y - 10} r="12" fill="red" />
      </Svg>

      {/* Label inside the peak circle */}
      <Text
        style={{
          position: 'absolute',
          left: peak.x - 10,
          top: peak.y - 25,
          color: 'white',
          fontWeight: 'bold',
          fontSize: 12,
        }}
      >
        2.3k
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    
    alignSelf: 'center',
    width:360
  },
});


export default LineGraph;

