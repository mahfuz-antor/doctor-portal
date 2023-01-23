import { useQuery } from "@tanstack/react-query";
import React from "react";

const Users = () => {
  const url = `http://localhost:5000/users`;
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  console.log(users, "getting users data");
  const booking = [{}];
  return (
    <main className="px-5 py-5 bg-sky-100">
      <section className=" px-10">
        <div className="flex justify-between items-center pt-10 pb-5">
          <h4 className="text-xl text-accent">User List</h4>
          {/* <h4 className="text-sm text-accent border-2 border-accent rounded-lg py-2 px-1"></h4> */}
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full h-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                {users?.map((user, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Users;
