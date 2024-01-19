import { row1Arr } from "@/utils/raw1";
import { Row1 } from "./Row1";

export const Experience = () => {
  return (
    <div className="w-4/5 m-auto mt-10 bg-stone-200">
      <div className="flex items-center justify-center ">
        <button className=" bg-stone-600 border rounded-lg p-[4px] mt-20 ">
          Experience
        </button>
      </div>
      <div className="flex items-center justify-center mt-10">
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>
      <div>
        <div>
          {row1Arr.map((e, index) => {
            return (
              <Row1
                logo={e.logo}
                header={e.header}
                text={e.text}
                date={e.date}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
