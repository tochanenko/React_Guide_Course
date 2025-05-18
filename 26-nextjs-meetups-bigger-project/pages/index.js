import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Cybernectics_faculty_of_Kyiv_University.JPG/1280px-Cybernectics_faculty_of_Kyiv_University.JPG',
    address: 'FCSC KNU',
    description: 'This is a first meetup'
  },
  {
    id: 'm2',
    title: 'Second meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Cybernectics_faculty_of_Kyiv_University.JPG/1280px-Cybernectics_faculty_of_Kyiv_University.JPG',
    address: 'FCSC KNU',
    description: 'This is a first meetup'
  },
  {
    id: 'm3',
    title: 'Third meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Cybernectics_faculty_of_Kyiv_University.JPG/1280px-Cybernectics_faculty_of_Kyiv_University.JPG',
    address: 'FCSC KNU',
    description: 'This is a first meetup'
  }
]

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />
}

export function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//   };
// }