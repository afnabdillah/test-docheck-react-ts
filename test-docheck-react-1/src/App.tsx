import { ReactElement } from "react";
import TableRow from "./components/TableRow";

function App(): ReactElement {

  const passengerList = [
    {
      id: "KJSD93",
      name: "Maria Anders",
      age: 20,
    },
    {
      id: "KJSD94",
      name: "Francisco Chang",
      age: 35,
    },
    {
      id: "KJSD95",
      name: "Anna Angelo",
      age: 28,
    },
  ];

  return (
    <>
      <main className=" font-serif mx-24">
        <div className=" text-center my-8 font-semibold text-[1.5rem]">
          List Passengers
        </div>
        <table className=" w-[36rem] mx-auto">
          <thead className=" text-xl border-b-2 border-black">
            <tr>
              <th className=" py-2 w-20">Id</th>
              <th className=" py-2">Name</th>
              <th className=" py-2">age</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {passengerList.map((el): ReactElement => {
              return (
                <TableRow user={el} />
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
}

export default App;
