export interface Module {
  name: string;
  component: React.ComponentType;
  options: {
    grid: [number, number];
  };
}

export function getModules(): Module[] {
  return (window as any).modules as Module[];
}
