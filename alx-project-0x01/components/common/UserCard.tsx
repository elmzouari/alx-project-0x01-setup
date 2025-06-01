import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="w-[min(100%,_36rem)] mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl text-center font-bold text-gray-800">
          {company.name}
        </h2>
        <p className="text-lg text-center italic">{company["catchPhrase"]}</p>

        <div className="py-2 ">
          <h3 className="text-lg font-bold">Location </h3>
          <p>Street: {address.street}</p>
          <p>Suite: {address.suite}</p>
          <p>City: {address.city}</p>
          <p>Zipcode: {address.zipcode}</p>
          <p>
            Geo Location. Latitude:{address.geo.lat}, Longitude:
            {address.geo.lng}
          </p>
        </div>
      </div>

      <div>
        <p className="text-gray-600">User: {name}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Website: {website}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>Username: {username}</span>
          <span>User ID: {id}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
