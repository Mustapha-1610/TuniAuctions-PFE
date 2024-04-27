export default function PackageCountSection() {
  return (
    <>
      <div className="bg-white shadow rounded-lg 2xl:col-span-2 flex ">
        <div className="flex-1 border-r border-black flex flex-col items-center justify-center text-center">
          <img
            src="https://img.freepik.com/premium-vector/packaging-box-icon-vector-logo-template_917138-1363.jpg"
            alt="Your Image Description"
            className="w-3/4"
          />
          <div className="pb-8">
            <h2 className="font-bold pb-4 text-3xl">Standard Listings</h2>
            <p className="font-bold text-xl">Count : 0</p>
          </div>
        </div>
        <div className="flex-1 border-black flex flex-col items-center justify-center text-center">
          <img
            src="https://img.freepik.com/premium-vector/packaging-box-icon-vector-logo-template_917138-1363.jpg"
            alt="Your Image Description"
            className="w-3/4"
          />
          <div className="pb-8">
            <h2 className="font-bold pb-4 text-3xl">Premium Listings</h2>
            <p className="font-bold text-xl">Count : 0</p>
          </div>
        </div>
      </div>
    </>
  );
}
