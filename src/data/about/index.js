import { DiPython, DiNodejs } from 'react-icons/di';
import { SiPostgresql, SiPandas } from 'react-icons/si';

export const outerCircleIcons = [
  <DiPython />,
  <SiPandas />,
  <SiPostgresql />,
  <DiNodejs />,
];

export const aboutMeData = [
  {
    title: Product Manager',
    location: 'Based in Lisbon, Portugal',
    descr:
      'I\'m a curious and passionate individual, who enjoys studying and learning things. I am methodical, ambitious, practical and I take lots of notes and make lots of lists. I\'m experienced in all phases of the software development lifecycle, from research to design and delivery.',
  },
];

let it = 0;
export const aboutMeList = [
  {
    id: it++,
    title: '1',
    descr: 'Publication',
  },
  {
    id: it++,
    title: '4+',
    descr: 'Years of Experience',
  }
];
