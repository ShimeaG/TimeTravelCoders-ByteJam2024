import AdminYearForm from "@/app/admin/YearForm.js";
import AdminEventForm from "@/app/admin/EventForm.js";

export default function Home() {
  return (
    <div>
      <h1>Time Travel Event Form</h1>
      <AdminYearForm/>
      <h1>Time Travel Year Form</h1>
      <AdminEventForm/>
    </div>
  );
}