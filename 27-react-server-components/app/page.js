import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromiseDemo from "@/components/UsePromisesDemo";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

import fs from 'node:fs/promises';
import { Suspense } from "react";

export default async function Home() {
  const fetchUsersPromise = new Promise((resolve) => setTimeout(async () => {
    const data = await fs.readFile('dummy-db.json', 'utf-8');
    const users = JSON.parse(data);
    resolve(users);
  }, 2000));

  return (
    <main>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Suspense fallback={<p>Loading...</p>}>
          <ClientDemo />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
