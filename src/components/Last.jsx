export const Last = ({ text, icon1, icon2, icon3 }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <div>
        <p>{text}</p>
      </div>
      <div className="flex gap-6 mt-6">
        <ul>{icon1}</ul>
        <ul>{icon2}</ul>
        <ul>{icon3}</ul>
      </div>
    </div>
  );
};
