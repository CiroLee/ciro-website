export interface ContributionItem {
  color: string;
  contributionCount: number;
  contributionLevel: string;
  date: string;
}

export interface ContributionsRes {
  contributions: ContributionItem[];
  totalContributions: number;
}
