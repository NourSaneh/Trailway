import InfoIcon from "../assets/info.png";

export default function WhyJoin() {
  return (
    <section className="w-full bg-[#F4C66A] py-6 px-6 text-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-3xl font-extrabold mb-12 tracking-wide font-['Karla']">
          WHY JOIN OUR COMMUNITY?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Item 1 */}
          <div className="flex items-start gap-4">
            <img src={InfoIcon} alt="info icon" className="w-7 h-7 mt-1" />
            <div>
              <h3 className="font-semibold text-lg font-['Lexend Zetta']">Trained Guides</h3>
              <p className="text-sm mt-1">
                Our skilled instructors provide a safe, enjoyable experience,
                guiding you to enhance your skills and make the most of your time.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4">
            <img src={InfoIcon} alt="info icon" className="w-7 h-7 mt-1" />
            <div>
              <h3 className="font-semibold text-lg font-['Lexend Zetta']">Everything Included</h3>
              <p className="text-sm mt-1">
                We handle all the details from gear to logistics so you can relax
                and focus on enjoying your adventure.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4">
            <img src={InfoIcon} alt="info icon" className="w-7 h-7 mt-1" />
            <div>
              <h3 className="font-semibold text-lg font-['Lexend Zetta']">Knowledge & Learning</h3>
              <p className="text-sm mt-1">
                Whether new or experienced, our programs help you develop skills
                and gain knowledge in a supportive environment.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-4">
            <img src={InfoIcon} alt="info icon" className="w-7 h-7 mt-1" />
            <div>
              <h3 className="font-semibold text-lg font-['Lexend Zetta']">A Perfect Community</h3>
              <p className="text-sm mt-1">
                Join a like minded community that shares your passion for the
                outdoors. Make lifelong friends who inspire you.
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex items-start gap-4">
            <img src={InfoIcon} alt="info icon" className="w-7 h-7 mt-1" />
            <div>
              <h3 className="font-semibold text-lg font-['Lexend Zetta']">Unforgettable Experiences</h3>
              <p className="text-sm mt-1">
                Enjoy adventures crafted to be both thrilling and memorable,
                leaving you with lasting stories you'll treasure.
              </p>
            </div>
          </div>


          {/* Item 6 */}
          <div className="flex items-start gap-4">
            <img src={InfoIcon} alt="info icon" className="w-7 h-7 mt-1" />
            <div>
              <h3 className="font-semibold text-lg font-['Lexend Zetta']"> Eco-Friendly Adventures</h3>
              <p className="text-sm mt-1">
  We promote responsible hiking practices that protect nature, support local communities, and ensure our trails stay beautiful for generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
