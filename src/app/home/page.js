import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <div className="px-4 pt-10">
        <h1 className="text-3xl font-bold">Home Page</h1>
      </div>
    </Suspense>
  );
}
