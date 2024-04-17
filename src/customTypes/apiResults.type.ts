export type ResultsDataType =
  | Achievements
  | Armoires
  | Bardings
  | Emotes
  | Fashions
  | Frames
  | Hairstyles
  | Minions
  | Mounts
  | Orchestrions
  | Records
  | Relics
  | Spells
  | SurveyRecords
  | Titles;

export interface Achievements {
  category: { id: number; name: string };
  description: string;
  icon: string;
  id: number;
  name: string;
  order: number;
  owned: string;
  patch: string;
  points: number;
  reward: { title: [Object]; type: string };
  type: { id: number; name: string };
}

export interface Minions {
  id: number;
  name: string;
  description: string;
  enhanced_description: string;
  tooltip: string;
  patch: string;
  item_id: number;
  tradeable: boolean;
  behavior: {
    id: number;
    name: string;
  };
  race: {
    id: number;
    name: string;
  };
  image: string;
  icon: string;
  owned: string;
  sources: [
    {
      type: string;
      text: string;
      related_type?: string;
      related_id?: string;
    }
  ];
  verminion: {
    cost: number;
    attack: number;
    defense: number;
    hp: number;
    speed: number;
    area_attack: boolean;
    skill: string;
    skill_description: string;
    skill_angle: number;
    skill_cost: number;
    eye: boolean;
    gate: boolean;
    shield: boolean;
    skill_type: {
      id: number;
      name: string;
    };
  };
}

export interface Titles {
  id: number;
  name: string;
  female_name: string;
  order: number;
  patch: string;
  owned: string;
  icon: string;
  achievement: {
    id: number;
    name: string;
    description: string;
    points: number;
    order: number;
    patch: string;
    owned: string;
    icon: string;
    category: {
      id: number;
      name: string;
    };
    type: {
      id: number;
      name: string;
    };
  };
}

export interface Mounts {
  id: number;
  name: string;
  description: string;
  enhanced_description: string;
  tooltip: string;
  movement: string;
  seats: number;
  order: number;
  order_group: number;
  patch: string;
  item_id?: number;
  tradeable: boolean;
  owned: string;
  image: string;
  icon: string;
  bgm: string;
  sources: [
    {
      type: string;
      text: string;
      related_type: string;
      related_id: number;
    }
  ];
}

export interface Orchestrions {
  id: number;
  name: string;
  description: string;
  patch: string;
  item_id?: number;
  tradeable: boolean;
  owned?: string;
  number: string;
  icon: string;
  category: {
    id: number;
    name: string;
  };
}

export interface Frames {
  id: number;
  name: string;
  item_name: string;
  description: string;
  patch: string;
  item_id: number;
  owned: string;
  icon: string;
  image: string;
}

export interface Spells {
  id: number;
  name: string;
  description: string;
  tooltip: string;
  order: number;
  rank: number;
  patch: string;
  owned: string;
  icon: string;
  type: {
    id: number;
    name: string;
  };
  aspect: {
    id: number;
    name: string;
  };
  sources: [
    {
      type: string;
      text: string;
      related_type?: string;
      related_id?: number;
    },
    {
      type: string;
      text: string;
      related_type?: string;
      related_id?: number;
    }
  ];
}

export interface Emotes {
  id: number;
  name: string;
  command: string;
  order: number;
  patch: string;
  item_id?: number;
  tradeable: boolean;
  owned: string;
  icon: string;
  category: {
    id: number;
    name: string;
  };
  sources: [
    {
      type: string;
      text: string;
      related_type: string;
      related_id: number;
    }
  ];
}

export interface Bardings {
  id: number;
  name: string;
  order: number;
  patch: string;
  item_id: number;
  tradeable: boolean;
  owned?: string;
  icon: string;
  sources: [
    {
      type: string;
      text: string;
      related_type?: string;
      related_id: number;
    }
  ];
}

export interface Hairstyles {
  id: number;
  name: string;
  description?: string;
  patch: string;
  item_id?: number;
  tradeable: boolean;
  owned: string;
  icon: string;
  sources: [
    {
      type: string;
      text: string;
      related_type: string;
      related_id?: number;
    }
  ];
}

export interface Armoires {
  id: number;
  name: string;
  order: number;
  patch: string;
  owned: string;
  icon: string;
  category: {
    id: number;
    name: string;
  };
  sources: [
    {
      type: string;
      text: string;
      related_type: string;
      related_id: number;
    }
  ];
}

export interface Fashions {
  id: number;
  name: string;
  description: string;
  order: number;
  patch: string;
  item_id: number;
  tradeable: boolean;
  owned: string;
  image: string;
  icon: string;
  sources: [
    {
      type: string;
      text: string;
      related_type?: string;
      related_id?: number;
    },
    {
      type: string;
      text: string;
      related_type?: string;
      related_id?: number;
    }
  ];
}

export interface Records {
  id: number;
  name: string;
  description: string;
  rarity: number;
  location: string;
  patch: string;
  linked_record_id?: number;
  owned: string;
  image: string;
  icon: string;
  sources: [
    {
      type: string;
      text: string;
      related_type?: string;
      related_id?: number;
    }
  ];
}

export interface SurveyRecords {
  id: number;
  name: string;
  description: string;
  rarity: number;
  location: string;
  patch: string;
  linked_record_id?: number;
  owned: string;
  image: string;
  icon: string;
  sources: [
    {
      type: string;
      text: string;
      related_type?: string;
      related_id?: number;
    }
  ];
}

export interface Relics {
  id: number;
  name: string;
  order: number;
  achievement_id: number;
  icon: string;
  owned: string;
  type: {
    name: string;
    category: string;
    jobs: number;
    order: number;
    expansion: number;
  };
}

export interface Characters {
  id: number;
  name: string;
  server: string;
  data_center: string;
  portrait: string;
  avatar: string;
  last_parsed: string;
  verified: boolean;
  achievements: {
    count: number;
    total: number;
    points: number;
    points_total: number;
    ranked_points: number;
    ranked_points_total: number;
    ranked_time: string;
    public: boolean;
  };
  mounts: {
    count: number;
    total: number;
    ranked_count: number;
    ranked_total: number;
  };
  minions: {
    count: number;
    total: number;
    ranked_count: number;
    ranked_total: number;
  };
  orchestrions: {
    count: number;
    total: number;
  };
  spells: {
    count: number;
    total: number;
  };
  emotes: {
    count: number;
    total: number;
  };
  bardings: {
    count: number;
    total: number;
  };
  hairstyles: {
    count: number;
    total: number;
  };
  armoires: {
    count: number;
    total: number;
  };
  fashions: {
    count: number;
    total: number;
  };
  records: {
    count: number;
    total: number;
  };
  survey_records: {
    count: number;
    total: number;
  };
  rankings: {
    achievements: {
      server: number;
      data_center: number;
      global: number;
    };
    mounts: {
      server: number;
      data_center: number;
      global: number;
    };
    minions: {
      server: number;
      data_center: number;
      global: number;
    };
  };
  relics: {
    weapons: {
      count: number;
      total: number;
    };
    armor: {
      count: number;
      total: number;
    };
    tools: {
      count: number;
      total: number;
    };
  };
}

export interface Users {
  id: number;
  name: string;
  server: string;
  portrait: string;
  avatar: string;
  last_parsed: string;
  verified: boolean;
  achievements: {
    count: number;
    total: number;
    points: number;
    points_total: number;
    public: boolean;
  };
  mounts: {
    count: number;
    total: number;
  };
  minions: {
    count: number;
    total: number;
  };
  orchestrions: {
    count: number;
    total: number;
  };
  spells: {
    count: number;
    total: number;
  };
  emotes: {
    count: number;
    total: number;
  };
  bardings: {
    count: number;
    total: number;
  };
  hairstyles: {
    count: number;
    total: number;
  };
  armoires: {
    count: number;
    total: number;
  };
  fashions: {
    count: number;
    total: number;
  };
  records: {
    count: number;
    total: number;
  };
  relics: {
    weapons: {
      count: number;
      total: number;
    };
    armor: {
      count: number;
      total: number;
    };
    tools: {
      count: number;
      total: number;
    };
  };
}
