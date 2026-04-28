// Simple TypeScript code to generate random data for testing Graphite metrics

interface Metric {
  name: string;
  value: number;
  timestamp: number;
}

class GraphiteTester {
  private metrics: Metric[] = [];

  generateRandomMetric(): Metric {
    const names = ['cpu.usage', 'memory.usage', 'disk.io', 'network.latency'];
    const name = names[Math.floor(Math.random() * names.length)];
    const value = Math.random() * 100;
    const timestamp = Date.now();
    return { name, value, timestamp };
  }

  addMetric(metric: Metric): void {
    this.metrics.push(metric);
    console.log(`Metric added: ${metric.name} = ${metric.value} at ${new Date(metric.timestamp).toISOString()}`);
  }

  simulateMetrics(count: number): void {
    for (let i = 0; i < count; i++) {
      const metric = this.generateRandomMetric();
      this.addMetric(metric);
      // Simulate delay
      setTimeout(() => {}, Math.random() * 1000);
    }
  }
}

// Usage example
const tester = new GraphiteTester();
tester.simulateMetrics(10);