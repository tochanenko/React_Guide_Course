export default function MealPage({ params }) {
  return <main>
    <h1>This is a page for {params.mealSlug} meal</h1>
  </main>
}