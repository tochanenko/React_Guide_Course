import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return <>
    <MeetupDetail />
  </>;
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {},
    }
  }
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: [{ meetupId: 'm1' }, { meetupId: 'm2' }]
      }
    ]
  }
}