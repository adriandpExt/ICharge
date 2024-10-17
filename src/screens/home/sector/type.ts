export interface IndustryCard {
  title: string;
  bgImage: string;
}
export interface IndustryCardType {
  card: IndustryCard;
  isDesktop: boolean;
  className?: string
}
