export interface ITrending {
    id: number;
    name: string;
    gain?: number;
    currentPlayers: number;
    hoursPlayed?: number;
    peakPlayers?: number;
    rank?: number;
}

export interface IRecord {
    id: number;
    name: string;
    peakPlayers: number;
    date: number;
}

export interface ITopGames {
    id: number;
    rank: number;
    name: string;
    currentPlayers: number;
    peakPlayers: number;
    hoursPLayed: number;
}

interface IStats {
    month: string;
    averagePlayers: number;
    gain: number;
    gainInPercent: number;
    peakPlayers: number;
}

export interface IDetails {
    id: number;
    name: string;
    playingTwelveHoursAgo: number;
    twentyFourHourPeek: number;
    allTimePeek: number;
    stats: IStats[];
}