import { koWeekString } from '@lib/constant';

export const getThisWeekRange = (date: string | Date | null | undefined) => {
  if (!date) {
    return { startDate: null, endDate: null };
  }
  if (typeof date === 'string') {
    const [yyyy, mm, dd] = date.split('-').map(v => +v);
    const startDate = new Date(yyyy, mm - 1, dd - new Date(date).getDay());
    const endDate = new Date(yyyy, mm - 1, 7 + dd - new Date(date).getDay());

    return { startDate, endDate };
  }
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const startDate = new Date(year, month, day - date.getDay());
  const endDate = new Date(year, month, 6 + day - date.getDay());

  return { startDate, endDate };
};

export const getPlusDate = (date: Date | null | undefined, number: number) => {
  if (!date) {
    return;
  }
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return new Date(year, month, day + number);
};

export const getWeek = (date: string | Date | null | undefined) => {
  if (!date) {
    return '';
  }

  let year = undefined;
  let month = undefined;
  let day = undefined;

  if (typeof date === 'string') {
    const [yyyy, mm, dd] = date.split('-').map(v => +v);
    const newDate = new Date(yyyy, mm - 1, dd);
    year = newDate.getFullYear();
    month = newDate.getMonth();
    day = newDate.getDate();
  } else {
    year = date.getMonth();
    month = date.getMonth();
    day = date.getDate();
  }

  const between: any = {};

  for (let i = 0; i < 7; i++) {
    const beWeek = week(new Date(year, month, i + day - new Date(date).getDay()));

    if (between[beWeek] !== undefined) {
      between[beWeek] = between[beWeek] + 1;
    } else {
      between[beWeek] = 0;
    }
  }
  const values = Object.values(between) as number[];

  if (values[0] < values[1]) {
    return Object.keys(between)[1];
  }
  return Object.keys(between)[0];
};

const week = (date: Date) => {
  const month = date.getMonth();
  const day = date.getDate();
  return `${month + 1}월 ${koWeekString[Math.ceil(day / 7)]}째 주`;
};
