import { ReactElement } from "react";

type UserProps = {
  id: string;
  name: string;
  age: number;
};

function TableRow({user} : {user: UserProps}): ReactElement {

  return (
    <tr className=" border-black border-solid border-b-[1px]">
      <td className=" py-2">{user.id}</td>
      <td className=" py-2">{user.name}</td>
      <td className=" py-2">{user.age}</td>
    </tr>
  );
}

export default TableRow;
