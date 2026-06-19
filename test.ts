// Simple TypeScript code to generate random data for testing Graphite metrics
// branch-1: baseline edits for restack experiments (round 2)

interface Metric {
  name: string;
  value: number;
  timestamp: number;
  cheers: string;
  optional: string;
}

class GraphiteTester {
  private metrics: Metric[] = [];

  generateRandomMetric(): Metric {
    const names = [
      'cpu.usage',
      'memory.usage',
      'disk.io',
      'network.latency',
      'queue.depth',
      'cache.hit_rate',
    ];
    const name = names[Math.floor(Math.random() * names.length)];
    const value = Math.round((Math.random() * 100) * 100) / 100;
    const timestamp = Date.now();
    return { name, value, timestamp };
  }

  addMetric(metric: Metric): void {
    this.metrics.push(metric);
    console.log(`Metric added: ${metric.name} = ${metric.value} at ${new Date(metric.timestamp).toISOString()}`);
  }

  latest(count = 3): Metric[] {
    return this.metrics.slice(-count);
  }

  /** How many metrics recorded so far. */
  totalCount(): number {
    return this.metrics.length;
  }

  simulateMetrics(count: number): void {
    for (let i = 0; i < count; i++) {
      const metric = this.generateRandomMetric();
      this.addMetric(metric);
      // Simulate delay
      setTimeout(() => { }, Math.random() * 1000);
    }
  }
}

// Usage example
const tester = new GraphiteTester();
tester.simulateMetrics(5);