export interface SummaryCardAppearance {
    stepSummary: SumStep;
    sideBg: string;
    isFlipped: boolean
}

export interface SumStep {
    header: string;
    desc: string;
    list: string[];
}