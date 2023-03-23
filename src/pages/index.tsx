import { map } from 'lodash';

export default function Home() {
  return (
    <main>
      {map([1, 2, 3], (i) => (
        <div key={i}>Hello {i}</div>
      ))}
    </main>
  );
}
