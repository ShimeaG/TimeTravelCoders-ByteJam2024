import MyForm from '../components/EventForm';
import MyForm from '../components/YearForm';

export default function Home() {
  return (
    <div>
      <h1>Time Travel Event Form</h1>
      <EventForm/>
      <h1>Time Travel Year Form</h1>
      <YearForm/>
    </div>
  );
}