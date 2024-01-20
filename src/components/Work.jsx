import { workArr } from "@/utils/workArr";
import { Work1 } from "./Work1";
export const Work = () => {
  return (
    <div className="w-4/5 m-auto mt-20">
      <div className="flex items-center justify-center">
        <button className=" bg-stone-600 border rounded-lg p-[4px] mt-20 ">
          Work
        </button>
      </div>
      <div className="flex items-center justify-center">
        <p>Some of the noteworthy projects I have built:</p>
      </div>
      <div>
        {workArr.map((e) => {
          return (
            <Work1
              logo={e.logo}
              header={e.header}
              text={e.text}
              icons={e.icons}
              iconBut={e.iconBut}
            />
          );
        })}
      </div>
    </div>
  );
};
