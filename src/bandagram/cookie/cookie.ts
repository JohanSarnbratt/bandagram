export interface CookieShape {
  dailyState: DailyState;
  results: DailyResults;
}

export interface DailyState {
  guesses: string[];
  date: string; // (new Date()).toDateString() format
}

export interface DailyResults {
  histogram: DailyHistogram;
  streak: StreakData;
}

export interface DailyHistogram {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  failed: number;
}

export interface StreakData {
  streakLength: number;
  lastStreakDay: string; // (new Date()).toDateString() format
}
