import React from "react";

function Container({ children }) {
  return (
    <>
      <div className="container mx-auto md:container md:mx-auto lg:container lg:mx-auto xl:container xl:mx-auto 2xl:container 2xl:mx-auto 2xl:max-w-custom px-2 sm:px-0">
        {children}
      </div>
    </>
  );
}

export default Container;
