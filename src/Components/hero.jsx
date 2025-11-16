import herobg from "../assets/herobg.png";
export default function Hero() {
    return (
<section
  className="w-full h-[90vh] bg-center bg-cover bg-no-repeat"
  style={{ backgroundImage: `url(${herobg})` }}
>
  <div className="flex items-center justify-center h-full">
    <h1 className="text-white text-4xl font-bold">Adventure awaits at every<br></br> turn of the Trail</h1>
  </div>
</section>

    );
}
