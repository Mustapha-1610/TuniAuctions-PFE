interface ProfileDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
}
export default function ProfileInformations(profileDetails: ProfileDetails) {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <div className="bg-rose-500 text-white p-3 rounded-lg">
            <span className="block text-xl font-semibold">16</span>
            <span className="block text-sm">All Orders</span>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <div className="bg-rose-500 text-white p-3 rounded-lg">
            <span className="block text-xl font-semibold">02</span>
            <span className="block text-sm">Awaiting Payments</span>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
          <div className="bg-rose-500 text-white p-3 rounded-lg">
            <span className="block text-xl font-semibold">00</span>
            <span className="block text-sm">Awaiting Shipment</span>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2">
          <div className="bg-rose-500 text-white p-3 rounded-lg">
            <span className="block text-xl font-semibold">01</span>
            <span className="block text-sm">Awaiting Delivery</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-5 mt-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <label className="block font-semibold mb-1">First Name</label>
            <p>{profileDetails.firstName}</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <label className="block font-semibold mb-1">Last Name</label>
            <p>{profileDetails.lastName}</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <label className="block font-semibold mb-1">Email</label>
            <p>{profileDetails.email}</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <label className="block font-semibold mb-1">Phone</label>
            <p>{profileDetails.phone}</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <label className="block font-semibold mb-1">Birth Date</label>
            <p>{profileDetails.birthDate}</p>
          </div>
        </div>
      </div>
    </>
  );
}
