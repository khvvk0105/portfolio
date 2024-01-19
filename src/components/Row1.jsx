export const Row1 = ({ logo, header, text, date }) => {
  console.log(text);
  return (
    <div className="w-4/5 flex justify-between m-auto mt-10">
      <div>{logo}</div>
      <div>
        <h2>{header}</h2>
        <ul className=" w-96">
          {text.map((list) => {
            return <li>{list}</li>;
          })}
        </ul>
      </div>
      <div>{date}</div>
    </div>
  );
};
