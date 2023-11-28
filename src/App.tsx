import { Paragraph } from './components/Paragraph.tsx';

const paragraph: string =
  'Elit deserunt duis cupidatat reprehenderit aliquip ipsum dolore irure amet aliqua amet. Ad commodo minim ipsum excepteur eiusmod commodo. Lorem ullamco do in deserunt enim quis dolor esse mollit enim in duis ex sunt. Nulla culpa nostrud mollit enim enim est quis.';

function App() {
  return (
    <main>
      <div style={{ height: '100vh' }} />
      <Paragraph value={paragraph} />
      <div style={{ height: '100vh' }} />
    </main>
  );
}

export default App;
