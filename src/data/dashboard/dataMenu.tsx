import { PersonStanding, Banknote, MoveUpRight } from "lucide-react";

export const menuStatistik = [
  {
    logo: <PersonStanding />,
    label: "Pengunjung hari ini",
    value: "1",
  },

  {
    logo: <Banknote />,
    label: "Pendapatan hari ini",
    value: "Rp 50.000",
  },
];

export const menuLink = [
  {
    logo: <MoveUpRight />,
    label: "Cashier",
    href: "https://cashier.numera.com/",
  },

  {
    logo: <MoveUpRight />,
    label: "Waiters",
    href: "https://waiters.numera.com/",
  },
];
