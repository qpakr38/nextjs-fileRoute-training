import EventItem from "./event-item";

const EventList = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => {
        return <EventItem key={item.id} item={item} />;
      })}
    </ul>
  );
};
export default EventList;
