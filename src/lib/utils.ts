import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ArtifactSets, Artifacter } from "./interface";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const FormatPercent = (n: number) => {
  return new Intl.NumberFormat("ja", {
    style: "percent",
    minimumFractionDigits: 1,
  }).format(n);
};

const IntStatId = (statId: string) => {
  const subStats = ["101", "201", "301", "400"];
  return subStats.includes(statId);
};

const getActiveArtifactSetBonus = (
  artifacts: Artifacter[],
  artifactId: string[]
) => {
  const setBonusCounts = artifacts
    .filter((equip) => artifactId.includes(equip.id))
    .map((equip) => equip.setId)
    .reduce((a: { [K: number]: number }, b) => ((a[b] = ++a[b] || 1), a), {});

  const activeSetBonus: {
    setId: number;
    setCount: number;
    artifactSet: ArtifactSets;
  }[] = [];

  for (const [key, value] of Object.entries(setBonusCounts)) {
    if (value > 1) {
      activeSetBonus.push({
        setId: Number(key),
        setCount: value,
        artifactSet: artifacts.find(
          (artifact) => artifact.setId.toString() === key
        )?.ArtifactSets!,
      });
    }
  }

  const activeSetBonusValue: {
    statId: number;
    value: number;
    needCount: number;
  }[] = [];
  activeSetBonus.map((stat) =>
    stat.artifactSet.ArtifactSetBonusValues.filter(
      (value) => value.needCount <= stat.setCount
    ).map((value) =>
      activeSetBonusValue.push({
        statId: value.statId,
        value: value.value,
        needCount: value.needCount,
      })
    )
  );

  return activeSetBonusValue;
};

const baseCalculator = (data: number[]) => {
  return data[0] * (1 + data[1]) + data[2];
};

const parameterCalculator = (stats: { statId: number; value: number }[]) => {
  const baseStats = getBaseStats(stats);

  const contexts = [
    {
      label: "HP",
      value: baseCalculator(baseStats.hp),
      format: false,
    },
    {
      label: "攻撃力",
      value: baseCalculator(baseStats.atk),
      format: false,
    },
    {
      label: "防御力",
      value: baseCalculator(baseStats.def),
      format: false,
    },
    {
      label: "元素熟知",
      value: stats
        .filter((stat) => stat.statId === 400)
        .map((stat) => stat.value)
        .reduce((a, b) => a + b, 0),
      format: false,
    },
    {
      label: "元素チャージ効率",
      value: stats
        .filter((stat) => stat.statId === 500)
        .map((stat) => stat.value)
        .reduce((a, b) => a + b, 0),
      format: true,
    },
    {
      label: "会心率",
      value: stats
        .filter((stat) => stat.statId === 600)
        .map((stat) => stat.value)
        .reduce((a, b) => a + b, 0),
      format: true,
    },
    {
      label: "会心ダメージ",
      value: stats
        .filter((stat) => stat.statId === 700)
        .map((stat) => stat.value)
        .reduce((a, b) => a + b, 0),
      format: true,
    },
  ];

  return contexts;
};

const getBaseStats = (stats: { statId: number; value: number }[]) => {
  const baseStats: {
    [K: string]: number[];
  } = {
    hp: [],
    atk: [],
    def: [],
  };

  const baseStatsProps = [
    { label: "hp", value: "1" },
    { label: "atk", value: "2" },
    { label: "def", value: "3" },
  ];

  baseStatsProps.map((prop) =>
    baseStats[prop.label].push(
      stats
        .filter((stat) => stat.statId === Number(`${prop.value}00`))
        .map((stat) => stat.value)
        .reduce((a, b) => a + b, 0),
      stats
        .filter((stat) => stat.statId === Number(`${prop.value}03`))
        .map((stat) => stat.value)
        .reduce((a, b) => a + b, 0),
      stats
        .filter((stat) => stat.statId === Number(`${prop.value}01`))
        .map((stat) => stat.value)
        .reduce((a, b) => a + b, 0)
    )
  );

  return baseStats;
};

const getCharacterAllStats = () => {};

export {
  cn,
  FormatPercent,
  IntStatId,
  getActiveArtifactSetBonus,
  baseCalculator,
  parameterCalculator,
  getBaseStats,
  getCharacterAllStats,
};
