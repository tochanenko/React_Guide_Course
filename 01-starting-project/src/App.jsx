const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import reactImg  from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept(props) {
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      {/* <img src={reactImg} alt="Stylized atom" /> */}
      <h1>React Essentials</h1>
      <p>
        {description} Fundamental React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;