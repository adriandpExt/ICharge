export interface SectorProps {
  name: string;
  col: number;
  row: number;
}

export interface PolygonProps {
  sectors: SectorProps[];
}
