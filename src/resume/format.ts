const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatMonth = (date: string) => {
  const [year, month] = date.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
};

export const formatDateRange = (startDate?: string, endDate?: string) =>
  startDate
    ? `${formatMonth(startDate)} - ${endDate ? formatMonth(endDate) : "Present"}`
    : "";

export interface Link {
  text: string;
  url: string;
}

export const splitLinks = (text: string): Array<string | Link> =>
  text
    .split(/(\[[^\]]+\]\([^)]+\))/)
    .filter(Boolean)
    .map((part) => {
      const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      return match ? { text: match[1], url: match[2] } : part;
    });
