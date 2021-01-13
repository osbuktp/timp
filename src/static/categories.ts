export interface ICategory {
  title: string;
  query: string;
}

const categories: ICategory[] = [
  {
    title: "Антибиотики",
    query: "антибиотик",
  },
  {
    title: "Антигистаминные",
    query: "антигистаминное",
  },
  {
    title: "Антисептики",
    query: "антисептик",
  },
  {
    title: "Болеутоляющие",
    query: "болеутоляющее",
  },
  {
    title: "Жаропонижающие",
    query: "жаропонижающее",
  },
  {
    title: "Ноотропы",
    query: "ноотроп",
  },
  {
    title: "Обезболивающие",
    query: "обезболивающее",
  },
  {
    title: "Противомикробные",
    query: "противомикробное",
  },
  {
    title: "Психостимуляторы",
    query: "психостимулятор",
  },
  {
    title: "Слабительные",
    query: "слабительное",
  },
  {
    title: "Эубиотики",
    query: "эубиотик",
  },
];

export default categories;
