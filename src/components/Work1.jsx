export const Work1 = ({ logo, header, text, icons, iconBut }) => {
  //   console.log(iconBut);
  return (
    <div className="flex">
      <div>{logo}</div>
      <div className="w-2/4 p-12 flex flex-col gap-y-8">
        <h2 className="text-2xl">{header}</h2>
        <p>{text}</p>
        <ul className="flex gap-2 flex-wrap ">
          {icons.map((i) => {
            return <p>{i}</p>;
          })}
        </ul>
        <button>{iconBut}</button>
      </div>
    </div>
  );
};
