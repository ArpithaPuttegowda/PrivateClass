import React from "react";

export const ListsComp = () => {
  return (
    <>
      <UnorderedList />
      <OrderedList />
    </>
  );
};
export const UnorderedList = () => {
  const data = ["Lilly", "Jasmin", "Rose"];
  return (
    <ul>
      {data?.map((v, i) => {
        return <ListItems listItem={v} key={v + i} />;
      })}
    </ul>
  );
};

export const OrderedList = () => {
  const data = ["UK", "US", "China"];
  return (
    <ol>
      {data?.map((v, i) => {
        return <ListItems listItem={v} key={v + i} />;
      })}
    </ol>
  );
};

const ListItems = ({ listItem }) => {
  return <li>{listItem}</li>;
};
