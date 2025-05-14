import { redirect, useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";
import EventItem from '../components/EventItem';

export default function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');

  return <>
    <EventItem event={data.event} />
  </>;
}

export async function loader({ request, params }) {
  const response = await fetch(`http://localhost:8080/events/${params.id}`);
  
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not fetch details for selected event. '}, { status: 500 }));
  } else {
    return response;
  }
}

export async function action({ request, params }) {
  const response = await fetch(`http://localhost:8080/events/${params.id}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not delete event.'}, { status: 500 }));
  }

  return redirect('/events');
}