// "use client";
// // import { AnimationProvider } from "@/components/AnimationProvider";
// import {
//   FaMusic,
//   FaBiking,
//   FaBook,
//   FaCameraRetro,
//   FaGamepad,
// } from "react-icons/fa";

// const hobbies = [
//   {
//     icon: <FaMusic className="text-3xl text-orange-400" />,
//     label: "Music Production",
//   },
//   {
//     icon: <FaBiking className="text-3xl text-orange-400" />,
//     label: "Cycling",
//   },
//   {
//     icon: <FaBook className="text-3xl text-orange-400" />,
//     label: "Reading Tech Books",
//   },
//   {
//     icon: <FaCameraRetro className="text-3xl text-orange-400" />,
//     label: "Photography",
//   },
//   {
//     icon: <FaGamepad className="text-3xl text-orange-400" />,
//     label: "Gaming",
//   },
// ];

// export function Hobbies() {
//   return (
//     <AnimationProvider
//       as="section"
//       id="hobbies"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       className="py-16"
//     >
//       <div className="container mx-auto px-4">
//         <AnimationProvider
//           as="h2"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-3xl font-bold mb-12 text-center"
//         >
//           Hobbies
//         </AnimationProvider>
//         <div className="flex flex-wrap justify-center gap-8">
//           {hobbies.map((hobby, idx) => (
//             <AnimationProvider
//               as="div"
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               className="flex flex-col items-center gap-2 bg-[#232222] rounded-xl shadow p-6 min-w-[160px]"
//             >
//               {hobby.icon}
//               <span className="text-white text-lg font-medium text-center">
//                 {hobby.label}
//               </span>
//             </AnimationProvider>
//           ))}
//         </div>
//       </div>
//     </AnimationProvider>
//   );
// }
