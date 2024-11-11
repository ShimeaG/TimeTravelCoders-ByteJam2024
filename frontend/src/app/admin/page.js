import AdminYearForm from "@/app/admin/YearForm.js";
import AdminEventForm from "@/app/admin/EventForm.js";

export default function Home() {
  return (
    <div className={'pb-32 flex flex-col space-y-2 w-full'}>
      <AdminYearForm/>
      <AdminEventForm/>
    </div>
  );
}