export default function StatisticCard() {

    const fridnds = async ()=>{
        const res = await 
    }

  return (
    <div className="max-w-277.5 mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="p-9 bg-base-100 shadow box-border rounded-2xl text-center"
        >
          <h3 className="text-3xl text-brand font-semibold">10</h3>
          <p className="text-[18px]">Total Friends</p>
        </div>
      ))}
    </div>
  );
}
