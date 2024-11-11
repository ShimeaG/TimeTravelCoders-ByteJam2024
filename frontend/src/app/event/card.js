export default function Card({ name, desc, date, img }) {
    console.log(name)
  return (
    <div className="mb-2 shadow-inner shadow-gray-50 w-1/3 p-4 rounded-xl bg-glass backdrop-blur-3xl border-b-2 border-gray-50">
      <h1 className="">{name}</h1>  {/* Event Title */}
      <p className="text-sm mt-2">{desc}</p>         {/* Event Description */}
      <p className="text-xs mt-1">{date}</p>         {/* Event Date */}
    </div>
  );
}
