// import { useEffect, useState } from 'react';

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// export default function Users() {
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//     fetch('/api/users')
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name} - {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
