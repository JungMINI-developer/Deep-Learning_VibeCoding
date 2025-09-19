export interface Team {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  positions: string[];
  required: number;
  logo: string;
  description: string;
  gameType: string;
}

export interface Player {
  id: number;
  name: string;
  position: string;
  hand: string;
  experience: string;
  region: string;
  photo: string;
  intro: string;
}

export interface AppState {
  loggedIn: boolean;
  currentPage: "login" | "recruiting" | "seeking" | "mypage";
  user: {
    name: string;
  } | null;
}

export interface FilterState {
  recruiting: {
    date: string;
    region: string;
    position: string;
  };
  seeking: {
    region: string;
    position: string;
    name: string;
  };
}


