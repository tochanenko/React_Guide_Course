'use client';

export default function MealsErrorPage({ error }) {
  return <main className="error">
    <h1>An error occurred!</h1>
    <p>{JSON.stringify(error, null, 4)}</p>
  </main>;
}