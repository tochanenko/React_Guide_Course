import Accordion from "./components/Accordion/Accordion";

function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>

      <Accordion className="accordion">
        <Accordion.Item
          id="experience"
          className="accordion-item"
          title="We got 20 years of experience"
        >
          <Accordion.Title className="accordion-item-title">You can't go wrong with us.</Accordion.Title>
          <Accordion.Content className="accordion-item-content">We are in the business of planning highly individualized vacation trips for more tan 20 years.</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item
          id="guides"
          className="accordion-item"
          title="We're working with local guides"
        >
          <Accordion.Title className="accordion-item-title">We are not doing this along from our office.</Accordion.Title>
          <Accordion.Content className="accordion-item-content">We hire most experinced local guides.</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </section>
  </main>;
}

export default App;
