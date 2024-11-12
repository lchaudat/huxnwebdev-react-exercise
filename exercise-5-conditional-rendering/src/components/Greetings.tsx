interface time {
  TimeOfDay: string;
}

const Greetings = ({ TimeOfDay }: time) => {
  return TimeOfDay == "morning" ? (
    <div>Good Morning</div>
  ) : (
    <div>Good afternoon</div>
  );
};

export default Greetings;
