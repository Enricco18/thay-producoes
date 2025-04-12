"use client";

const Anchor = ({ id, top }) => {
  return (
    <div id={id} className={`invisible w-1 h-1 relative ${top}`}>
      Anchor
    </div>
  );
};

export default Anchor;
