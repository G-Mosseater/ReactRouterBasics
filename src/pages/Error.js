import React from "react";
import { MainNavigation } from "../components/MainNavigation";

export default function Error() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Error occured</h1>
        <p>Page could not be found</p>
      </main>
    </>
  );
}
