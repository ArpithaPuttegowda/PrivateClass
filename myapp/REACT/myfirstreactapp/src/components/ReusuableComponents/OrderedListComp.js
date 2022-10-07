import React from "react";

export const OrderedListComp = ({data}) => {
  return (
    <div>
      <ol>
        {data?.map((listItem) => {
          return <li>{listItem}</li>;
        })}
      </ol>
    </div>
  );
};
