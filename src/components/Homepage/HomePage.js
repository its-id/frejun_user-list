import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import styles from "./homepage.module.css";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  const fetchUsers = async () => {
    await fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res) => {
        setData(res.users);
        setFilteredArray(res.users);
        setLoading(false);
      })
      .catch((err) => console.log("error is", err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    const searchedVal = e.target.value;
    setSearchValue(searchedVal);

    if (filteredArray.length > 0) {
      const temp = filteredArray.filter((user) => {
        return user.firstName.toLowerCase().includes(searchedVal.toLowerCase()) || user.email.toLowerCase().includes(searchedVal.toLowerCase());
      });
      setData(temp);
    }
  };

  const handleSelect = (e) => {
    const selectedVal = e.target.value;
    console.log(selectedVal);
    //based on the gender, filter the data

    if (filteredArray.length > 0) {
      const temp = filteredArray.filter((user) => {
        if (selectedVal === "all") return user.gender === "male" || user.gender === "female";
        else return user.gender === selectedVal;
      });
      setData(temp);
      console.log(data);
    }
  };

  return (
    <div className="w-[50%] mx-auto mt-10">
      {loading === true ? (
        <p className="mt-20"> LOADING...</p>
      ) : (
        <>
          <div className="flex justify-between">
            <div className="relative w-[40%] focus-within:text-gray-600 rounded-lg shadow-md border border-gray-300g">
              <div className="absolute inset-y-0 left-1 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                id="search-field"
                className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm rounded-lg"
                placeholder="Search"
                type="search"
                name="search"
                value={searchValue}
                onChange={handleSearch}
              />
            </div>
            <select className="w-[20%] h-10 rounded-lg shadow-md border border-gray-300" defaultValue="" onChange={handleSelect}>
              <option disabled={true} value="">
                Gender
              </option>
              <option value="all">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="h-[60vh] overflow-y-auto w-full my-5 p-3 rounded-lg shadow-md border border-gray-300">
            {data.length === 0 ? (
              <p>No results found.</p>
            ) : (
              <table className={`${styles.tableContainer} w-full whitespace-no-wrap`}>
                <thead>
                  <tr className="text-md font-medium tracking-wide text-left border-b border-gray-300">
                    <th className="px-4 py-3">User</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Age</th>
                    <th className="px-4 py-3">Gender</th>
                  </tr>
                </thead>
                <tbody className="w-[100%] bg-white divide-y divide-gray-300 bg-gray-800">
                  {data.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-10 h-10 mr-3 rounded-full md:block">
                              <img className="object-cover w-full h-full rounded-full" src={item?.image} alt="" loading="lazy" />
                              <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                              <p className="font-semibold">{item.firstName}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">{item?.email}</td>
                        <td className="px-4 py-3 text-sm">{item?.age}</td>
                        <td className="px-4 py-3 text-sm">{item?.gender}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              // <table className="table w-full">
              //   <thead>
              //     <tr>
              //       <th className="font-semibold">User</th>
              //       <th className="font-semibold">Email</th>
              //       <th className="font-semibold">Age</th>
              //       <th className="font-semibold">Gender</th>
              //     </tr>
              //   </thead>
              //   <tbody>
              //     {data.map((item) => {
              //       return (
              //         <tr key={item.id}>
              //           {loading === true ? (
              //             <p className=" mt-20"> LOADING...</p>
              //           ) : (
              //             <>
              //               <td>
              //                 <div className="flex items-center space-x-3">
              //                   <div className="avatar">
              //                     <div className="mask mask-squircle w-12 h-12">
              //                       <img src={item.image} alt="Avatar Tailwind CSS Component" />
              //                     </div>
              //                   </div>
              //                   <div>
              //                     <div className="font-semibold">{item.firstName}</div>
              //                   </div>
              //                 </div>
              //               </td>
              //               <td>{item.email}</td>
              //               <td>{item.age}</td>
              //               <td>{item.gender}</td>
              //             </>
              //           )}
              //         </tr>
              //       );
              //     })}
              //   </tbody>
              // </table>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
