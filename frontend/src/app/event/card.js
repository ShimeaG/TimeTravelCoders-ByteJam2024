export default function Card({ name, desc, img }) {
    console.log(name)
  return (
    <div className="mb-2 shadow-inner shadow-gray-50 w-1/3 p-4 rounded-xl bg-glass backdrop-blur-3xl border-b-2 border-gray-50">
      <img src={img} className={'border-2 border-white rounded-lg'}/>
        <h1 className="text-xl">{name}</h1>  {/* Event Title */}
      <p className="text-md mt-2">{desc}</p>         {/* Event Description */}
    </div>
  );
}
