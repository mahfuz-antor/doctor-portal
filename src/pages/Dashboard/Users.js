import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";

const Users = () => {
  const url = `http://localhost:5000/users`;
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Admin added successfully!");
          refetch();
        }
        console.log(data, "checking admin making");
      });
  };

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
                  <th>Admin</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                {users?.map((user, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>
                      {user?.role !== "admin" && (
                        <button
                          onClick={() => handleMakeAdmin(user._id)}
                          className="btn btn-xs btn-primary rounded-lg"
                        >
                          Make Admin
                        </button>
                      )}
                    </td>
                    <td>
                      <button className="btn btn-xs btn-red rounded-lg">
                        Delete
                      </button>
                    </td>
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
