import React from "react";

export default function page({
  params: { cat },
}: {
  params: {
    cat: string;
  };
}) {
  return (
    <div>
      <h1>Categories</h1>
      <p>Category: {cat}</p>
    </div>
  );
}
