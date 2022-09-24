import { getEventById } from "../../dummy-data";
import { useRouter } from "next/router";
import EventItem from "../../components/events/event-item";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventDetailPage = () => {
  const route = useRouter();
  const eventId = route.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return <p>Not event found!</p>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};
export default EventDetailPage;
