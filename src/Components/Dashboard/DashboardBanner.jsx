const DashboardBanner = ({ setView, view }) => {
    return (
      <div className="bg-[#9538E2] flex justify-center text-center flex-col py-16 mb-10 text-white items-center">
        <div className="space-y-2 w-3/4 mx-auto">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="text-xl">
            Explore the latest gadgets that will take your experience to the next
            level. From smart devices to the coolest accessories, we have it all!
          </p>
  
          <div className="flex gap-4 justify-center mt-5">
            {/* ✅ Cart Button */}
            <button
              onClick={() => setView("cart")}
              className={`btn ${view === "cart" ? "bg-white text-black border border-blue-500 font-bold shadow-lg" : "bg-gray-300 text-black"}`}
            >
              Cart
            </button>
  
            {/* ✅ Wishlist Button */}
            <button
              onClick={() => setView("wishlist")}
              className={`btn ${view === "wishlist" ? "bg-white text-black border border-blue-400 font-bold shadow-lg" : "bg-gray-300 text-black"}`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardBanner;
  