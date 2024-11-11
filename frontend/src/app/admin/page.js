import AdminYearForm from "@/app/admin/YearForm.js";
import AdminEventForm from "@/app/admin/EventForm.js";

export default function Home() {
  return (
      <>
          <div className={'fixed top-3 left-3 flex items-center'}>
              <a href={'/'} className="flex items-center hover:underline">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19l-7-7 7-7"
                      />
                  </svg>
                  Back to Present
              </a>
          </div>
          <div className={'pb-32 flex flex-col space-y-2 w-full'}>
              <AdminYearForm/>
              <AdminEventForm/>
          </div>
      </>
  )
      ;
}