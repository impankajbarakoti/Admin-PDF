// // import React, { useState } from "react";
// // import {
// //   Menu,
// //   Bell,
// //   LayoutDashboard,
// //   FileEdit,
// //   BookOpen,
// //   Calendar,
// //   FileText,
// //   MessageSquare,
// //   Plus,
// //   ChevronDown,
// //   X,
// //   ClipboardList,
// //   CalendarCheck,
// //   Zap,
// // } from "lucide-react";

// // import PostBooks from "./PostBooks"; // make sure path is correct
// // import PublishedBlogs from "./PublishedBlog";

// // // Sidebar Item Component (no router)
// // const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
// //   <button
// //     onClick={onClick}
// //     className={`flex items-center w-full p-3 rounded-xl transition-all duration-200 text-left ${
// //       active
// //         ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-violet-500/40"
// //         : "text-gray-600 hover:bg-gray-100"
// //     }`}
// //   >
// //     <Icon
// //       className={`w-5 h-5 mr-3 ${active ? "text-white" : "text-indigo-500"}`}
// //     />
// //     <span className="text-sm font-medium font-sans ">{label}</span>
// //   </button>
// // );

// // // Small UI components used in dashboard home
// // const StatCard = ({ title, count, icon: Icon, bg, iconColor }) => (
// //   <div className="bg-white p-6 rounded-2xl shadow-xl transition-transform hover:scale-[1.02]">
// //     <div className="flex items-center justify-between">
// //       <div>
// //         <p className="text-gray-500 text-sm">{title}</p>
// //         <h2 className="text-3xl font-bold text-gray-800 mt-1">{count}</h2>
// //       </div>
// //       <div className={`p-3 rounded-xl ${bg}`}>
// //         <Icon className={`w-6 h-6 ${iconColor}`} />
// //       </div>
// //     </div>
// //   </div>
// // );

// // const ActionButton = ({ title, subtitle, icon: Icon, bg, iconBg, onClick }) => (
// //   <button
// //     onClick={onClick}
// //     className={`flex flex-col items-center cursor-pointer justify-center h-40 rounded-2xl p-6 border ${bg} hover:shadow-lg hover:-translate-y-1 duration-200`}
// //   >
// //     <div className={`p-4 rounded-full mb-3 ${iconBg}`}>
// //       <Icon className="w-8 h-8 text-white" />
// //     </div>
// //     <div className="text-lg font-semibold">{title}</div>
// //     <div className="text-sm text-gray-500">{subtitle}</div>
// //   </button>
// // );


// // const Dashboard = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [activeScreen, setActiveScreen] = useState("dashboard");

// //   const navItems = [
// //     { label: "Dashboard", icon: LayoutDashboard, screen: "dashboard" },
// //     { label: "Post Books", icon: FileEdit, screen: "postbooks" },
// //     { label: "Published Books", icon: BookOpen, screen: "published" },
// //     // { label: "Scheduled Blogs", icon: Calendar, screen: "scheduled" },
// //     // { label: "Drafted Blogs", icon: FileText, screen: "drafts" },
// //     // { label: "Inquiries", icon: MessageSquare, screen: "inquiries" },
// //   ];

// //   const stats = [
// //     {
// //       title: "Total Books",
// //       count: 35,
// //       icon: ClipboardList,
// //       bg: "bg-indigo-100",
// //       iconColor: "text-indigo-600",
// //     },
// //     // {
// //     //   title: "Draft Blogs",
// //     //   count: 0,
// //     //   icon: FileText,
// //     //   bg: "bg-purple-100",
// //     //   iconColor: "text-purple-600",
// //     // },
// //     {
// //       title: "Published Books",
// //       count: 35,
// //       icon: Zap,
// //       bg: "bg-orange-100",
// //       iconColor: "text-orange-600",
// //     },
// //     // {
// //     //   title: "Scheduled Blogs",
// //     //   count: 0,
// //     //   icon: CalendarCheck,
// //     //   bg: "bg-orange-100",
// //     //   iconColor: "text-orange-600",
// //     // },
// //   ];

// //   // simple screen components for other pages
// //   const Published = () => (
// //     <div className="text- font-sans font-medium">Published Blogs (placeholder)</div>
// //   );
// //   const Scheduled = () => (
// //     <div className="text-xl font-sans  font-medium">
// //       Scheduled Blogs (placeholder)
// //     </div>
// //   );
// //   const Drafts = () => (
// //     <div className="text-xl  font-sans font-medium">
// //       Drafted Blogs (placeholder)
// //     </div>
// //   );
// //   const Inquiries = () => (
// //     <div className="text-xl font-sans  font-medium">
// //       Inquiries (placeholder)
// //     </div>
// //   );

// //   const renderContent = () => {
// //     switch (activeScreen) {
// //       case "postbooks":
// //         return <PostBooks />;
// //       case "published":
// //         return <PublishedBlogs/>
// //       // case "scheduled":
// //       //   return <Scheduled />;
// //       // case "drafts":
// //       //   return <Drafts />;
// //       // case "inquiries":
// //       //   return <Inquiries />;
// //       default:
// //         return (
// //           <>
// //             <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// //               {stats.map((s, i) => (
// //                 <StatCard key={i} {...s} />
// //               ))}
// //             </section>

// //             <section className="bg-white p-6 rounded-2xl shadow-xl">
// //               <h2 className="text-xl font-semibold font-sans  text-gray-800">
// //                 Quick Actions
// //               </h2>
// //               <p className="text-gray-500 text-sm mt-1 font-sans  mb-6">
// //                 Frequently used actions to manage your business
// //               </p>

// //               <div
// //                 className="grid
// //     grid-cols-2
// //     sm:grid-cols-3
// //     md:grid-cols-4
// //     lg:grid-cols-4
// //     gap-4 sm:gap-6"
// //               >
// //                 <ActionButton
// //                   title="Publish Books"
// //                   subtitle="Instantly create a new post"
// //                   icon={Plus}
// //                   bg="bg-indigo-50 border-indigo-200"
// //                   iconBg="bg-indigo-500"
// //                   onClick={() => setActiveScreen("postbooks")}
// //                 />

// //                 <ActionButton
// //                   title="Schedule Books"
// //                   subtitle="Plan content for later"
// //                   icon={Calendar}
// //                   bg="bg-orange-50 border-orange-200"
// //                   iconBg="bg-orange-500"
// //                   onClick={() => setActiveScreen("scheduled")}
// //                 />

// //                 <ActionButton
// //                   title="View Inquiries"
// //                   subtitle="Check messages"
// //                   icon={MessageSquare}
// //                   bg="bg-green-50 border-green-200"
// //                   iconBg="bg-green-500"
// //                   onClick={() => setActiveScreen("inquiries")}
// //                 />

// //                 <ActionButton
// //                   title="Review Drafts"
// //                   subtitle="Edit your drafts"
// //                   icon={FileEdit}
// //                   bg="bg-purple-50 border-purple-200"
// //                   iconBg="bg-purple-500"
// //                   onClick={() => setActiveScreen("drafts")}
// //                 />
// //               </div>
// //             </section>
// //           </>
// //         );
// //     }
// //   };

// //   return (
// //     <div className="flex h-screen bg-gray-50 font-[Inter]">
// //       {/* Sidebar */}
// //       <div
// //         className={`
// //   fixed inset-y-0 left-0 z-50
// //   w-64 lg:w-72
// //   bg-white shadow-xl p-6
// //   transition-transform duration-300
// //   ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
// //   lg:translate-x-0
// // `}
// //       >
// //         <div className="flex items-center mb-6">
// //           <div className="bg-indigo-600 p-2 rounded-lg mr-3">
// //             <LayoutDashboard className="w-6 h-6 text-white" />
// //           </div>
// //           <div>
// //             <h1 className="text-lg font-bold font-sans  text-gray-800">
// //               Admin Portal
// //             </h1>
// //             <p className="text-xs text-gray-500 font-sans ">Dashboard</p>
// //           </div>

// //           <button
// //             onClick={() => setIsSidebarOpen(false)}
// //             className="lg:hidden ml-auto p-1 rounded-full text-gray-500 hover:bg-gray-100"
// //           >
// //             <X className="w-6 h-6" />
// //           </button>
// //         </div>

// //         <nav className="flex-1 space-y-2">
// //           {navItems.map((item) => (
// //             <SidebarItem
// //               key={item.label}
// //               icon={item.icon}
// //               label={item.label}
// //               active={activeScreen === item.screen}
// //               onClick={() => {
// //                 setActiveScreen(item.screen);
// //                 setIsSidebarOpen(false);
// //               }}
// //             />
// //           ))}
// //         </nav>
// //       </div>

// //       {/* mobile overlay */}
// //       {isSidebarOpen && (
// //         <div
// //           className="fixed inset-0 z-40 bg-black bg-opacity-40 lg:hidden"
// //           onClick={() => setIsSidebarOpen(false)}
// //         ></div>
// //       )}

// //       {/* Main content */}
// //       <div className="flex-1 flex flex-col overflow-y-auto lg:ml-72 ml-0 transition-all duration-300">
// //         {/* Header */}
// //         <header className="sticky top-0 z-30 flex items-center justify-between bg-white/95 backdrop-blur-sm shadow-sm p-4 sm:p-6 border-b border-gray-100">
// //           <div className="flex items-center space-x-4">
// //             <button
// //               onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// //               className="lg:hidden p-2 rounded-full text-gray-600 hover:bg-gray-100"
// //             >
// //               <Menu className="w-6 h-6" />
// //             </button>
// //             <div>
// //               <h1 className="text-2xl font-sans font-bold font-sans  text-gray-900">
// //                 Dashboard / <a href="/"> Home</a>
// //               </h1>
// //               <p className="text-sm font-sans  text-gray-500 mt-0.5">
// //                 Welcome back, Admin
// //               </p>
// //             </div>
// //           </div>

// //           <div className="flex items-center space-x-4">
// //             <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100 relative">
// //               <Bell className="w-6 h-6" />
// //               <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
// //             </button>

// //             <div className="flex items-center space-x-2 hover:bg-gray-50 p-1 md:p-2 rounded-full cursor-pointer">
// //               <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold">
// //                 A
// //               </div>
// //               <div className="hidden md:block">
// //                 <p className="text-sm font-semibold text-gray-800 font-sans ">
// //                   Admin
// //                 </p>
// //                 <p className="text-xs text-gray-500 font-sans ">
// //                   Administrator
// //                 </p>
// //               </div>
// //               <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block" />
// //             </div>
// //           </div>
// //         </header>

// //         <main className="p-4 sm:p-6 lg:p-8">{renderContent()}</main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;
// import React, { useState, useEffect } from "react";
// import axios from "axios"; // axios import kiya data fetching ke liye
// import {
//   Menu,
//   Bell,
//   LayoutDashboard,
//   FileEdit,
//   BookOpen,
//   Calendar,
//   FileText,
//   MessageSquare,
//   Plus,
//   ChevronDown,
//   X,
//   ClipboardList,
//   CalendarCheck,
//   Zap,
// } from "lucide-react";

// import PostBooks from "./PostBooks"; // make sure path is correct
// import PublishedBlogs from "./PublishedBlog"; // Path corrected to match typical naming (assuming 'PublishedBlog' was a typo)

// // Sidebar Item Component (no router)
// const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`flex items-center w-full p-3 rounded-xl transition-all duration-200 text-left ${
//       active
//         ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-violet-500/40"
//         : "text-gray-600 hover:bg-gray-100"
//     } cursor-pointer`}
//   >
//     <Icona
//       className={`w-5 h-5 mr-3 ${active ? "text-white" : "text-indigo-500"}`}
//     />
//     <span className="text-sm font-medium font-sans ">{label}</span>
//   </button>
// );

// // Small UI components used in dashboard home
// const StatCard = ({ title, count, icon: Icon, bg, iconColor }) => (
//   <div className="bg-white p-6 rounded-2xl shadow-xl transition-transform hover:scale-[1.02]">
//     <div className="flex items-center justify-between">
//       <div>
//         <p className="text-gray-500 text-sm">{title}</p>
//         <h2 className="text-3xl font-bold text-gray-800 mt-1">{count}</h2>
//       </div>
//       <div className={`p-3 rounded-xl ${bg}`}>
//         <Icon className={`w-6 h-6 ${iconColor}`} />
//       </div>
//     </div>
//   </div>
// );

// const ActionButton = ({ title, subtitle, icon: Icon, bg, iconBg, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`flex flex-col items-center cursor-pointer justify-center h-40 rounded-2xl p-6 border ${bg} hover:shadow-lg hover:-translate-y-1 duration-200`}
//   >
//     <div className={`p-4 rounded-full mb-3 ${iconBg}`}>
//       <Icon className="w-8 h-8 text-white" />
//     </div>
//     <div className="text-lg font-semibold">{title}</div>
//     <div className="text-sm text-gray-500">{subtitle}</div>
//   </button>
// );

// const Dashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [activeScreen, setActiveScreen] = useState("dashboard");

//   // NEW STATE: Published books ka data aur loading state
//   const [publishedBooks, setPublishedBooks] = useState([]);
//   const [loadingStats, setLoadingStats] = useState(true);

//   // NEW FUNCTION: Data fetching
//   const fetchPublishedBooks = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/books/published");
//       setPublishedBooks(res.data);
//       setLoadingStats(false);
//     } catch (err) {
//       console.error("Error fetching published books count:", err);
//       // Fallback to 0 if API fails
//       setPublishedBooks([]);
//       setLoadingStats(false);
//     }
//   };

//   useEffect(() => {
//     fetchPublishedBooks();
//   }, []);

//   // Update: PublishedBlogs component ko bhi yeh data pass kar denge
//   const Published = () => (
//     <PublishedBlogs
//       initialBooks={publishedBooks}
//       fetchBooks={fetchPublishedBooks}
//     />
//   );

//   // --- Nav Items & Stats (Updated) ---

//   const navItems = [
//     { label: "Dashboard", icon: LayoutDashboard, screen: "dashboard" },
//     { label: "Post Books", icon: FileEdit, screen: "postbooks" },
//     { label: "Published Books", icon: BookOpen, screen: "published" },
//     // Add back if needed
//     // { label: "Scheduled Books", icon: Calendar, screen: "scheduled" },
//     // { label: "Drafted Books", icon: FileText, screen: "drafts" },
//     // { label: "Inquiries", icon: MessageSquare, screen: "inquiries" },
//   ];

//   // Stat Card sirf Published Books ke liye
//   const stats = [
//     {
//       title: "Published Books",
//       // Dynamic count use kiya
//       count: loadingStats ? "..." : publishedBooks.length,
//       icon: Zap,
//       bg: "bg-orange-100",
//       iconColor: "text-orange-600",
//     },
//   ];

//   // simple screen components for other pages (Placeholders)
//   const Scheduled = () => (
//     <div className="text-xl font-sans font-medium">
//       Scheduled Books (placeholder)
//     </div>
//   );
//   const Drafts = () => (
//     <div className="text-xl font-sans font-medium">
//       Drafted Books (placeholder)
//     </div>
//   );
//   const Inquiries = () => (
//     <div className="text-xl font-sans font-medium">Inquiries (placeholder)</div>
//   );

//   const renderContent = () => {
//     switch (activeScreen) {
//       case "postbooks":
//         // PostBook successfully publish hone ke baad stats update karne ke liye
//         return <PostBooks onPublishSuccess={fetchPublishedBooks} />;
//       case "published":
//         // Passing data to PublishedBlogs
//         return <Published />;
//       case "scheduled":
//         return <Scheduled />;
//       case "drafts":
//         return <Drafts />;
//       case "inquiries":
//         return <Inquiries />;
//       default:
//         return (
//           <>
//             <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//               {/* Only using the updated stats array */}
//               {stats.map((s, i) => (
//                 <StatCard key={i} {...s} />
//               ))}
//               {/* Add a placeholder card for better layout, or adjust grid */}
//               <div className="p-6 rounded-2xl"></div>
//               <div className="p-6 rounded-2xl"></div>
//               <div className="p-6 rounded-2xl"></div>
//             </section>

//             <section className="bg-white p-6 rounded-2xl shadow-xl">
//               <h2 className="text-xl font-semibold font-sans text-gray-800">
//                 Quick Actions
//               </h2>
//               <p className="text-gray-500 text-sm mt-1 font-sans mb-6">
//                 Frequently used actions to manage your business
//               </p>

//               <div
//                 className="grid
//     grid-cols-2
//     sm:grid-cols-3
//     md:grid-cols-4
//     lg:grid-cols-4
//     gap-4 sm:gap-6"
//               >
//                 <ActionButton
//                   title="Publish Books"
//                   subtitle="Instantly create a new post"
//                   icon={Plus}
//                   bg="bg-indigo-50 border-indigo-200"
//                   iconBg="bg-indigo-500"
//                   onClick={() => setActiveScreen("postbooks")}
//                 />

//                 <ActionButton
//                   title="Schedule Books"
//                   subtitle="Plan content for later"
//                   icon={Calendar}
//                   bg="bg-orange-50 border-orange-200"
//                   iconBg="bg-orange-500"
//                   onClick={() => setActiveScreen("scheduled")}
//                 />

//                 <ActionButton
//                   title="View Inquiries"
//                   subtitle="Check messages"
//                   icon={MessageSquare}
//                   bg="bg-green-50 border-green-200"
//                   iconBg="bg-green-500"
//                   onClick={() => setActiveScreen("inquiries")}
//                 />

//                 <ActionButton
//                   title="Review Drafts"
//                   subtitle="Edit your drafts"
//                   icon={FileEdit}
//                   bg="bg-purple-50 border-purple-200"
//                   iconBg="bg-purple-500"
//                   onClick={() => setActiveScreen("drafts")}
//                 />
//               </div>
//             </section>
//           </>
//         );
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-50 font-[Inter]">
//       {/* ... (Sidebar and Header UI remains same) ... */}
//       <div
//         className={`
//  fixed inset-y-0 left-0 z-50
//  w-64 lg:w-72
//  bg-white shadow-xl p-6
//  transition-transform duration-300
//  ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//  lg:translate-x-0
// `}
//       >
//         <div className="flex items-center mb-6">
//           <div className="bg-indigo-600 p-2 rounded-lg mr-3">
//             <LayoutDashboard className="w-6 h-6 text-white" />
//           </div>
//           <div>
//             <h1 className="text-lg font-bold font-sans text-gray-800">
//               Admin Portal
//             </h1>
//             <p className="text-xs text-gray-500 font-sans ">Dashboard</p>
//           </div>

//           <button
//             onClick={() => setIsSidebarOpen(false)}
//             className="lg:hidden ml-auto p-1 rounded-full text-gray-500 hover:bg-gray-100"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         <nav className="flex-1 space-y-2">
//           {navItems.map((item) => (
//             <SidebarItem
//               key={item.label}
//               icon={item.icon}
//               label={item.label}
//               active={activeScreen === item.screen}
//               onClick={() => {
//                 setActiveScreen(item.screen);
//                 setIsSidebarOpen(false);
//               }}
//             />
//           ))}
//         </nav>
//       </div>

//       {/* mobile overlay */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 z-40 bg-black bg-opacity-40 lg:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         ></div>
//       )}

//       {/* Main content */}
//       <div className="flex-1 flex flex-col overflow-y-auto lg:ml-72 ml-0 transition-all duration-300">
//         {/* Header */}
//         <header className="sticky top-0 z-30 flex items-center justify-between bg-white/95 backdrop-blur-sm shadow-sm p-4 sm:p-6 border-b border-gray-100">
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//               className="lg:hidden p-2 rounded-full text-gray-600 hover:bg-gray-100"
//             >
//               <Menu className="w-6 h-6" />
//             </button>
//             <div>
//               <h1 className="text-2xl font-sans font-bold text-gray-900">
//                 Dashboard / <a href="/"> Home</a>
//               </h1>
//               <p className="text-sm font-sans text-gray-500 mt-0.5">
//                 Welcome back, Admin
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center space-x-4">
//             <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100 relative">
//               <Bell className="w-6 h-6" />
//               <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
//             </button>

//             <div className="flex items-center space-x-2 hover:bg-gray-50 p-1 md:p-2 rounded-full cursor-pointer">
//               <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold">
//                 A
//               </div>
//               <div className="hidden md:block">
//                 <p className="text-sm font-semibold text-gray-800 font-sans ">
//                   Admin
//                 </p>
//                 <p className="text-xs text-gray-500 font-sans ">
//                   Administrator
//                 </p>
//               </div>
//               <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block" />
//             </div>
//           </div>
//         </header>

//         <main className="p-4 sm:p-6 lg:p-8">{renderContent()}</main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Menu,
//   Bell,
//   LayoutDashboard,
//   FileEdit,
//   BookOpen,
//   Calendar,
//   FileText,
//   MessageSquare,
//   Plus,
//   ChevronDown,
//   X,
//   ClipboardList,
//   CalendarCheck,
//   Zap,
// } from "lucide-react";

// import PostBooks from "./PostBooks";
// import PublishedBlogs from "./PublishedBlog";

// // Sidebar Item Component (Final Touches)
// const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`flex items-center w-full p-3 rounded-xl transition-all duration-200 text-left cursor-pointer transform hover:translate-x-1 ${
//       active
//         ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-violet-500/40"
//         : "text-gray-600 hover:bg-indigo-50" // Improved hover color
//     }`}
//   >
//     <Icon
//       className={`w-5 h-5 mr-3 flex-shrink-0 ${
//         active ? "text-white" : "text-indigo-500"
//       }`}
//     />
//     <span className="text-sm font-medium font-sans truncate">{label}</span>
//   </button>
// );

// // Stat Card Component (Improved Responsiveness and Shadow)
// const StatCard = ({ title, count, icon: Icon, bg, iconColor }) => (
//   <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 transition-transform hover:scale-[1.03] duration-300">
//     <div className="flex items-center justify-between">
//       <div>
//         <p className="text-gray-500 text-xs sm:text-sm font-medium">{title}</p>
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-1">
//           {count}
//         </h2>
//       </div>
//       <div className={`p-3 rounded-xl ${bg} flex-shrink-0`}>
//         <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${iconColor}`} />
//       </div>
//     </div>
//   </div>
// );

// // ActionButton Component (More prominent hover effect)
// const ActionButton = ({ title, subtitle, icon: Icon, bg, iconBg, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`flex flex-col items-center cursor-pointer justify-center h-36 sm:h-40 rounded-2xl p-4 border ${bg} hover:shadow-2xl hover:-translate-y-2 duration-300 transition-all w-full text-center`}
//   >
//     <div className={`p-4 rounded-full mb-2 sm:mb-3 ${iconBg}`}>
//       <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
//     </div>
//     <div className="text-md sm:text-lg font-bold text-gray-800">{title}</div>
//     <div className="text-xs sm:text-sm text-gray-500 mt-1 hidden sm:block">
//       {subtitle}
//     </div>
//   </button>
// );

// const Dashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [activeScreen, setActiveScreen] = useState("dashboard");

//   const [publishedBooks, setPublishedBooks] = useState([]);
//   const [loadingStats, setLoadingStats] = useState(true);

//   // --- Data Fetching ---
//   const fetchPublishedBooks = async () => {
//     setLoadingStats(true);
//     try {
//       // NOTE: Using the correct endpoint from previous discussion
//       const res = await axios.get("http://localhost:5000/api/books/published");
//       setPublishedBooks(res.data);
//     } catch (err) {
//       console.error("Error fetching published books count:", err);
//       setPublishedBooks([]);
//     } finally {
//       setLoadingStats(false);
//     }
//   };

//   useEffect(() => {
//     fetchPublishedBooks();
//   }, []);

//   // --- Screen Components ---
//   const PublishedScreen = () => (
//     <PublishedBlogs
//       initialBooks={publishedBooks}
//       fetchBooks={fetchPublishedBooks}
//     />
//   );

//   const navItems = [
//     { label: "Dashboard", icon: LayoutDashboard, screen: "dashboard" },
//     { label: "Post Books", icon: FileEdit, screen: "postbooks" },
//     { label: "Published Books", icon: BookOpen, screen: "published" },
//     // Removed other placeholders from nav for cleaner UI, can be re-added if needed
//     // { label: "Scheduled", icon: Calendar, screen: "scheduled" },
//     // { label: "Inquiries", icon: MessageSquare, screen: "inquiries" },
//   ];

//   const stats = [
//     {
//       title: "Published Books",
//       count: loadingStats ? "..." : publishedBooks.length,
//       icon: Zap,
//       bg: "bg-orange-100",
//       iconColor: "text-orange-600",
//     },
//   ];

//   const renderContent = () => {
//     switch (activeScreen) {
//       case "postbooks":
//         // onPublishSuccess prop pass kiya for dashboard stat update
//         return <PostBooks onPublishSuccess={fetchPublishedBooks} />;
//       case "published":
//         return <PublishedScreen />;
//       case "scheduled":
//         return (
//           <div className="p-10 text-xl text-gray-500 text-center bg-gray-50 rounded-xl my-4 border">
//             Scheduled Books (Placeholder)
//           </div>
//         );
//       case "drafts":
//         return (
//           <div className="p-10 text-xl text-gray-500 text-center bg-gray-50 rounded-xl my-4 border">
//             Drafted Books (Placeholder)
//           </div>
//         );
//       case "inquiries":
//         return (
//           <div className="p-10 text-xl text-gray-500 text-center bg-gray-50 rounded-xl my-4 border">
//             Inquiries (Placeholder)
//           </div>
//         );
//       default:
//         return (
//           <>
//             <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
//               {stats.map((s, i) => (
//                 <StatCard key={i} {...s} />
//               ))}
//               {/* Fill remaining slots for layout symmetry on LG screens */}
//               <div className="hidden lg:block"></div>
//               <div className="hidden lg:block"></div>
//               <div className="hidden lg:block"></div>
//             </section>

//             <hr className="my-6 border-gray-200" />

//             <section className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl">
//               <h2 className="text-xl font-extrabold font-sans text-gray-800 border-b pb-2 mb-4">
//                 Quick Actions
//               </h2>

//               <div
//                 className="grid
//     grid-cols-2
//     sm:grid-cols-3
//     lg:grid-cols-4
//     gap-4 sm:gap-6"
//               >
//                 <ActionButton
//                   title="Publish New Book"
//                   subtitle="Instantly create a new post"
//                   icon={Plus}
//                   bg="bg-indigo-50 border-indigo-200"
//                   iconBg="bg-indigo-600"
//                   onClick={() => setActiveScreen("postbooks")}
//                 />

//                 <ActionButton
//                   title="View Published"
//                   subtitle="Manage live content"
//                   icon={BookOpen}
//                   bg="bg-teal-50 border-teal-200"
//                   iconBg="bg-teal-600"
//                   onClick={() => setActiveScreen("published")}
//                 />

//                 <ActionButton
//                   title="View Inquiries"
//                   subtitle="Check customer messages"
//                   icon={MessageSquare}
//                   bg="bg-green-50 border-green-200"
//                   iconBg="bg-green-600"
//                   onClick={() => setActiveScreen("inquiries")}
//                 />

//                 <ActionButton
//                   title="Review Drafts"
//                   subtitle="Edit pending content"
//                   icon={FileEdit}
//                   bg="bg-purple-50 border-purple-200"
//                   iconBg="bg-purple-600"
//                   onClick={() => setActiveScreen("drafts")}
//                 />
//               </div>
//             </section>
//           </>
//         );
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-50 font-[Inter] overflow-hidden">
//       {" "}
//       {/* Added overflow-hidden */}
//       {/* ------------------- Sidebar ------------------- */}
//       <div
//         className={`
//  fixed inset-y-0 left-0 z-50
//  w-64 lg:w-72
//  bg-white shadow-2xl p-6
//  transform transition-transform duration-300 ease-in-out
//  ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//  lg:translate-x-0
// `}
//       >
//         <div className="flex items-center mb-10 border-b pb-4">
//           <div className="bg-indigo-600 p-2 rounded-xl mr-3 shadow-md">
//             <LayoutDashboard className="w-6 h-6 text-white" />
//           </div>
//           <div>
//             <h1 className="text-xl font-extrabold  font-sans text-gray-800">
//               Admin Portal
//             </h1>
//             <p className="text-xs  font-sans text-gray-500">
//               Dashboard Control
//             </p>
//           </div>

//           <button
//             onClick={() => setIsSidebarOpen(false)}
//             className="lg:hidden ml-auto p-2 rounded-full text-gray-500 hover:bg-gray-100"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         <nav className="flex-1 space-y-2">
//           {navItems.map((item) => (
//             <SidebarItem
//               key={item.label}
//               icon={item.icon}
//               label={item.label}
//               active={activeScreen === item.screen}
//               onClick={() => {
//                 setActiveScreen(item.screen);
//                 setIsSidebarOpen(false);
//               }}
//             />
//           ))}
//         </nav>
//       </div>
//       {/* Mobile Overlay */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 z-40 bg-black bg-opacity-40 lg:hidden transition-opacity duration-300"
//           onClick={() => setIsSidebarOpen(false)}
//         ></div>
//       )}
//       {/* ------------------- Main Content ------------------- */}
//       <div className="flex-1 flex flex-col overflow-y-auto lg:ml-72 ml-0 transition-all duration-300">
//         {/* Header (Improved Styling) */}
//         <header className="sticky top-0 z-30 flex items-center justify-between bg-white/95 backdrop-blur-sm shadow-md p-4 sm:p-6 border-b border-gray-100">
//           <div className="flex items-center space-x-3 sm:space-x-4">
//             <button
//               onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//               className="lg:hidden p-2 rounded-full text-gray-600 hover:bg-gray-100 transition"
//             >
//               <Menu className="w-6 h-6" />
//             </button>
//             <div>
//               <h1 className="text-xl sm:text-2xl fonts-sans font-bold text-gray-900 truncate">
//                 {activeScreen.charAt(0).toUpperCase() + activeScreen.slice(1)}{" "}
//                 Overiew / <a href="/"> Home </a>
//               </h1>
//               <p className="text-xs sm:text-sm font-sans text-gray-500 mt-0.5 hidden sm:block">
//                 Welcome back, Admin
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center space-x-3 sm:space-x-4">
//             <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100 relative transition">
//               <Bell className="w-6 h-6" />
//               <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
//             </button>

//             <div className="flex items-center space-x-2 hover:bg-gray-50 p-1 sm:p-2 rounded-full cursor-pointer transition">
//               <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
//                 A
//               </div>
//               <div className="hidden md:block">
//                 <p className="text-sm font-semibold font-sans text-gray-800 truncate">
//                   Admin
//                 </p>
//                 <p className="text-xs font-sans text-gray-500">Administrator</p>
//               </div>
//               <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block" />
//             </div>
//           </div>
//         </header>

//         {/* Content Area */}
//         <main className="p-4 sm:p-6 lg:p-8 flex-grow">{renderContent()}</main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;





import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Menu,
  Bell,
  LayoutDashboard,
  FileEdit,
  BookOpen,
  Calendar,
  FileText,
  MessageSquare,
  Plus,
  ChevronDown,
  X,
  ClipboardList,
  CalendarCheck,
  Zap,
} from "lucide-react";


import PostBooks from "./PostBooks";
import PublishedBlogs from "./PublishedBlog";
const APIURL= import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"
// Sidebar Item Component (Final Touches)
const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full p-3 rounded-xl transition-all duration-200 text-left cursor-pointer transform hover:translate-x-1 ${
      active
        ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-violet-500/40"
        : "text-gray-600 hover:bg-indigo-50" // Improved hover color
    }`}
  >
    <Icon
      className={`w-5 h-5 mr-3 flex-shrink-0 ${
        active ? "text-white" : "text-indigo-500"
      }`}
    />
    <span className="text-sm font-medium font-sans truncate">{label}</span>
  </button>
);

// Stat Card Component (Improved Responsiveness and Shadow)
const StatCard = ({ title, count, icon: Icon, bg, iconColor }) => (
  <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 transition-transform hover:scale-[1.03] duration-300">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-xs sm:text-sm font-medium">{title}</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-1">
          {count}
        </h2>
      </div>
      <div className={`p-3 rounded-xl ${bg} flex-shrink-0`}>
        <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${iconColor}`} />
      </div>
    </div>
  </div>
);

// ActionButton Component (More prominent hover effect)
const ActionButton = ({ title, subtitle, icon: Icon, bg, iconBg, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center cursor-pointer justify-center h-36 sm:h-40 rounded-2xl p-4 border ${bg} hover:shadow-2xl hover:-translate-y-2 duration-300 transition-all w-full text-center`}
  >
    <div className={`p-4 rounded-full mb-2 sm:mb-3 ${iconBg}`}>
      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
    </div>
    <div className="text-md sm:text-lg font-bold text-gray-800">{title}</div>
    <div className="text-xs sm:text-sm text-gray-500 mt-1 hidden sm:block">
      {subtitle}
    </div>
  </button>
);

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeScreen, setActiveScreen] = useState("dashboard");

  const [publishedBooks, setPublishedBooks] = useState([]);
  const [loadingStats, setLoadingStats] = useState(true);

  // --- Data Fetching ---
  const fetchPublishedBooks = async () => {
    setLoadingStats(true); 
    try {
      const res = await axios.get(`${APIURL}/api/books/published`);
      setPublishedBooks(res.data);
    } catch (err) {
      console.error("Error fetching published books count:", err);
      setPublishedBooks([]);
    } finally {
      setLoadingStats(false);
    }
  };

  useEffect(() => {
    fetchPublishedBooks();
  }, []);

  // --- Screen Components ---
  const PublishedScreen = () => (
    <PublishedBlogs
      initialBooks={publishedBooks}
      fetchBooks={fetchPublishedBooks}
    />
  );

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, screen: "dashboard" },
    { label: "Post Books", icon: FileEdit, screen: "postbooks" },
    { label: "Published Books", icon: BookOpen, screen: "published" },
  ];

  const stats = [
    {
      title: "Published Books",
      count: loadingStats ? "..." : publishedBooks.length,
      icon: Zap,
      bg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  const renderContent = () => {
    switch (activeScreen) {
      case "postbooks":
        return <PostBooks onPublishSuccess={fetchPublishedBooks} />;
      case "published":
        return <PublishedScreen />;
      case "scheduled":
        return (
          <div className="p-10 text-xl text-gray-500 text-center bg-gray-50 rounded-xl my-4 border">
            Scheduled Books (Placeholder)
          </div>
        );
      case "drafts":
        return (
          <div className="p-10 text-xl text-gray-500 text-center bg-gray-50 rounded-xl my-4 border">
            Drafted Books (Placeholder)
          </div>
        );
      case "inquiries":
        return (
          <div className="p-10 text-xl text-gray-500 text-center bg-gray-50 rounded-xl my-4 border">
            Inquiries (Placeholder)
          </div>
        );
      default:
        return (
          <>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
              {stats.map((s, i) => (
                <StatCard key={i} {...s} />
              ))}
            </section>

            <hr className="my-6 border-gray-200" />

            <section className="bg-white  p-4 sm:p-6 rounded-2xl shadow-xl">
              <h2 className="text-xl font-extrabold font-sans text-gray-800 border-b pb-2 mb-4">
                Quick Actions
              </h2>

              <div
                className="grid 
    grid-cols-2 
    sm:grid-cols-3 
    lg:grid-cols-4 
    gap-4 sm:gap-6"
              >
                <ActionButton
                  title="Publish New Book"
                  subtitle="Instantly create a new post"
                  icon={Plus}
                  bg="bg-indigo-50 border-indigo-200"
                  iconBg="bg-indigo-600"
                  onClick={() => setActiveScreen("postbooks")}
                />

                <ActionButton
                  title="View Published"
                  subtitle="Manage live content"
                  icon={BookOpen}
                  bg="bg-teal-50 border-teal-200"
                  iconBg="bg-teal-600"
                  onClick={() => setActiveScreen("published")}
                />

                <ActionButton
                  title="View Inquiries"
                  subtitle="Check customer messages"
                  icon={MessageSquare}
                  bg="bg-green-50 border-green-200"
                  iconBg="bg-green-600"
                  onClick={() => setActiveScreen("inquiries")}
                />

                <ActionButton
                  title="Review Drafts"
                  subtitle="Edit pending content"
                  icon={FileEdit}
                  bg="bg-purple-50 border-purple-200"
                  iconBg="bg-purple-600"
                  onClick={() => setActiveScreen("drafts")}
                />
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-[Inter] overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 lg:w-72 bg-white shadow-2xl p-6 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex items-center mb-10 border-b pb-4">
          <div className="bg-indigo-600 p-2 rounded-xl mr-3 shadow-md">
            <LayoutDashboard className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold  font-sans text-gray-800">
              Admin Portal
            </h1>
            <p className="text-xs  font-sans text-gray-500">
              Dashboard Control
            </p>
          </div>

          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden ml-auto p-2 rounded-full text-gray-500 hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              active={activeScreen === item.screen}
              onClick={() => {
                setActiveScreen(item.screen);
                setIsSidebarOpen(false);
              }}
            />
          ))}
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto lg:ml-0 ml-4 transition-all duration-300">
        {/* Header */}
        <header className="sticky top-0 z-30 flex items-center justify-between bg-white/95 backdrop-blur-sm shadow-md p-4 sm:p-6 lg:p-8 border-b border-gray-100">
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Mobile Sidebar Toggle */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-full text-gray-600 hover:bg-gray-100 transition"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Title and Subtitle */}
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-sans font-bold text-gray-900 truncate">
                {activeScreen.charAt(0).toUpperCase() + activeScreen.slice(1)}{" "}
                Overview /
                <a href="/" className="text-indigo-600">
                  {" "}
                  Home{" "}
                </a>
              </h1>
              <p className="text-xs sm:text-sm font-sans text-gray-500 mt-0.5 hidden sm:block">
                Welcome back, Admin
              </p>
            </div>
          </div>

          {/* Notification and User Info */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Notification Bell */}
            <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100 relative transition">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>

            {/* User Avatar and Dropdown */}
            <div className="flex items-center space-x-2 hover:bg-gray-50 p-1 sm:p-2 rounded-full cursor-pointer transition">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
                A
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-semibold font-sans text-gray-800 truncate">
                  Admin
                </p>
                <p className="text-xs font-sans text-gray-500">Administrator</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-4 sm:p-5 lg:p-6 flex-grow">{renderContent()}</main>
      </div>
    </div>
  );
};

export default Dashboard;
