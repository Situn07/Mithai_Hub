// import AdminLayout from "../../layouts/AdminLayout";
// import StatsCard from "../../components/common/StatsCard";

// import {
//   ShoppingCart,
//   IndianRupee,
//   Package,
//   CheckCircle,
// } from "lucide-react";

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "../../components/ui/card";

// export default function Dashboard() {
//   return (
//     <AdminLayout>
//       <div className="space-y-6">

//         {/* Header */}
//         <div>
//           <h1 className="text-3xl font-bold">
//             Dashboard
//           </h1>

//           <p className="text-muted-foreground">
//             Welcome back Admin 👋
//           </p>
//         </div>

//         {/* Hero Banner */}
//         <div className="rounded-3xl p-8 bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Sweet Shop Management
//           </h2>

//           <p className="mt-3 text-white/90 max-w-2xl">
//             Manage products, track orders, monitor sales,
//             and streamline your sweet shop operations from one place.
//           </p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

//           <StatsCard
//             title="Today's Orders"
//             value="120"
//             icon={ShoppingCart}
//           />

//           <StatsCard
//             title="Revenue"
//             value="₹25,000"
//             icon={IndianRupee}
//           />

//           <StatsCard
//             title="Pending Orders"
//             value="15"
//             icon={Package}
//           />

//           <StatsCard
//             title="Completed Orders"
//             value="105"
//             icon={CheckCircle}
//           />

//         </div>

//         {/* Bottom Section */}
//         <div className="grid gap-6 lg:grid-cols-2">

//           {/* Recent Orders */}
//           <Card>
//             <CardHeader>
//               <CardTitle>
//                 Recent Orders
//               </CardTitle>
//             </CardHeader>

//             <CardContent>
//               <div className="space-y-4">

//                 <div className="flex items-center justify-between border-b pb-2">
//                   <span className="font-medium">
//                     Token #101
//                   </span>

//                   <span className="text-muted-foreground">
//                     Rasgulla
//                   </span>
//                 </div>

//                 <div className="flex items-center justify-between border-b pb-2">
//                   <span className="font-medium">
//                     Token #102
//                   </span>

//                   <span className="text-muted-foreground">
//                     Gulab Jamun
//                   </span>
//                 </div>

//                 <div className="flex items-center justify-between border-b pb-2">
//                   <span className="font-medium">
//                     Token #103
//                   </span>

//                   <span className="text-muted-foreground">
//                     Kaju Katli
//                   </span>
//                 </div>

//               </div>
//             </CardContent>
//           </Card>

//           {/* Top Selling Products */}
//           <Card>
//             <CardHeader>
//               <CardTitle>
//                 Top Selling Products
//               </CardTitle>
//             </CardHeader>

//             <CardContent>
//               <div className="space-y-4">

//                 <div className="flex justify-between border-b pb-2">
//                   <span>Rasgulla</span>
//                   <span className="font-semibold">
//                     45 Orders
//                   </span>
//                 </div>

//                 <div className="flex justify-between border-b pb-2">
//                   <span>Gulab Jamun</span>
//                   <span className="font-semibold">
//                     32 Orders
//                   </span>
//                 </div>

//                 <div className="flex justify-between border-b pb-2">
//                   <span>Kaju Katli</span>
//                   <span className="font-semibold">
//                     25 Orders
//                   </span>
//                 </div>

//               </div>
//             </CardContent>
//           </Card>

//         </div>

//       </div>
//     </AdminLayout>
//   );
// }