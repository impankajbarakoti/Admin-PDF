// import React, { useState } from "react";
// import {
//   Pencil,
//   Trash2,
//   RefreshCw,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// // --- 1. Expanded Static Blog Data (20 Items) ---
// const allBlogs = [
//   // Page 1 data
//   {
//     id: 1,
//     title: "Why Your Blog Isn't Ranking on Google (Even After SEO)",
//     date: "18/11/2025",
//   },
//   {
//     id: 2,
//     title: "7 Mistakes That Stop You from Getting Google AdSense Approval",
//     date: "13/11/2025",
//   },
//   {
//     id: 3,
//     title: "How to Write Content That Ranks Without Keyword Stuffing",
//     date: "12/11/2025",
//   },
//   {
//     id: 4,
//     title: "Mastering the Art of Viral Social Media Posts in 2025",
//     date: "01/11/2025",
//   },
//   {
//     id: 5,
//     title: "10 Essential Tools for Remote Developers in 2026",
//     date: "29/10/2025",
//   },
//   {
//     id: 6,
//     title: "React vs Vue: Which Framework Should You Choose?",
//     date: "25/10/2025",
//   },
//   {
//     id: 7,
//     title: "Understanding the JavaScript Event Loop",
//     date: "20/10/2025",
//   },
//   {
//     id: 8,
//     title: "The Future of Headless CMS Architectures",
//     date: "15/10/2025",
//   },
//   { id: 9, title: "A Deep Dive into CSS Grid Layouts", date: "10/10/2025" },
//   {
//     id: 10,
//     title: "Optimizing Web Performance with Lazy Loading",
//     date: "05/10/2025",
//   },
//   // Page 2 data
//   {
//     id: 11,
//     title: "Building Accessible Forms in Modern Web Applications",
//     date: "01/10/2025",
//   },
//   {
//     id: 12,
//     title: "The Rise of Serverless Functions in Backend Development",
//     date: "25/09/2025",
//   },
//   {
//     id: 13,
//     title: "Best Practices for Naming Variables in Code",
//     date: "20/09/2025",
//   },
//   {
//     id: 14,
//     title: "Using TypeScript with React Hooks Effectively",
//     date: "15/09/2025",
//   },
//   {
//     id: 15,
//     title: "Introduction to GraphQL and Its Advantages",
//     date: "10/09/2025",
//   },
//   {
//     id: 16,
//     title: "How to Secure Your Next.js Application",
//     date: "05/09/2025",
//   },
//   {
//     id: 17,
//     title: "The Power of Custom Tailwind CSS Plugins",
//     date: "01/09/2025",
//   },
//   {
//     id: 18,
//     title: "Deploying React Apps with Vercel and Netlify",
//     date: "25/08/2025",
//   },
//   {
//     id: 19,
//     title: "Debugging Tips and Tricks for Frontend Developers",
//     date: "20/08/2025",
//   },
//   { id: 20, title: "A Beginner's Guide to Git and GitHub", date: "15/08/2025" },
// ];

// // --- Pagination Constants ---
// const ITEMS_PER_PAGE = 10;

// const PublishedBlog = ({ blogs = allBlogs }) => {
//   // --- 2. State for Pagination ---
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalBlogs = blogs.length;

//   // Calculate total pages
//   const totalPages = Math.ceil(totalBlogs / ITEMS_PER_PAGE);

//   // Calculate start and end indices for slicing the current page's data
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;

//   // Get the blogs for the current page
//   const currentBlogs = blogs.slice(startIndex, endIndex);

//   // --- Pagination Handlers ---
//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleGoToPage = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   // --- Refresh Handler ---
//   const handleRefresh = () => {
//     // In a real application, this would fetch fresh data from an API
//     console.log("Refreshing blog list...");
//     // Reset to page 1 after refresh, though we keep the static data here for simplicity
//     setCurrentPage(1);
//     alert("Blog list refreshed! (Check console for message)");
//   };

//   // --- Pagination Display Logic ---
//   const renderPaginationButtons = () => {
//     const pageNumbers = [];
//     // Simple range of 5 buttons centered around the current page
//     const start = Math.max(1, currentPage - 2);
//     const end = Math.min(totalPages, currentPage + 2);

//     for (let i = start; i <= end; i++) {
//       pageNumbers.push(
//         <button
//           key={i}
//           onClick={() => handleGoToPage(i)}
//           className={`px-3 py-1 text-sm font-medium rounded-md mx-0.5 transition duration-150 ${
//             i === currentPage
//               ? "bg-blue-600 text-white shadow-lg"
//               : "text-gray-600 hover:bg-gray-200"
//           }`}
//         >
//           {i}
//         </button>
//       );
//     }
//     return pageNumbers;
//   };

//   return (
//     <div className=" bg-gray-50 min-h-screen font-sans ">
//       {/* Header Section */}
//       <header className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">Books</h1>
//           <p className="text-sm text-gray-500 mt-1">
//             Manage your book posts and content
//           </p>
//         </div>
//         <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
//           + Add Books
//         </button>
//       </header>

//       {/* --- Table Information & Refresh --- */}
//       <div className="bg-white p-4 rounded-t-xl border-b border-gray-200 shadow-sm">
//         <div className="flex justify-between items-center">
//           <div className="space-y-1">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Book Posts ({totalBlogs}) - Page {currentPage} of {totalPages}
//             </h2>
//             <p className="text-sm text-gray-500">
//               Overview of all books posts in your content library
//             </p>
//           </div>
//           <button
//             onClick={handleRefresh} // Call the refresh handler
//             className="text-gray-500 hover:text-gray-700 p-2 rounded-full transition duration-150"
//             aria-label="Refresh List"
//           >
//             <RefreshCw size={20} />
//           </button>
//         </div>
//       </div>

//       {/* --- Main Table --- */}
//       <div className="overflow-x-auto shadow-lg rounded-b-xl mb-4">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/5">
//                 Book Post
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
//                 Date
//               </th>
//               <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
//                 Actions
//               </th>
//             </tr>
//           </thead>

//           {/* Table Body - Mapping over the current page's data */}
//           <tbody className="bg-white divide-y divide-gray-200">
//             {currentBlogs.map((blog) => (
//               <tr
//                 key={blog.id}
//                 className="hover:bg-gray-50 transition duration-150"
//               >
//                 <td className="px-6 py-4">
//                   <div className="text-sm font-semibold text-gray-900">
//                     {blog.title}
//                   </div>
//                   <div className="text-xs text-gray-400 mt-1">
//                     ID: {blog.id}
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {blog.date}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                   {/* Edit Button */}
//                   <button
//                     className="text-blue-500 hover:text-blue-700 mr-3 p-1 rounded-md transition duration-150"
//                     aria-label={`Edit ${blog.title}`}
//                   >
                 
//                   </button>
//                   {/* Delete Button */}
//                   <button
//                     className="text-red-500 hover:text-red-700 p-1 rounded-md  cursor-pointer transition duration-150"
//                     aria-label={`Delete ${blog.title}`}
//                   >
//                     <Trash2 size={18} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* --- Pagination Controls --- */}
//       <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6 rounded-lg shadow-md">
//         <div className="flex-1 flex justify-between sm:hidden">
//           {/* Mobile Pagination */}
//           <button
//             onClick={handlePreviousPage}
//             disabled={currentPage === 1}
//             className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleNextPage}
//             disabled={currentPage === totalPages}
//             className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//         <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
//           {/* Desktop Pagination Status */}
//           <div>
//             <p className="text-sm text-gray-700">
//               Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
//               <span className="font-medium">
//                 {Math.min(endIndex, totalBlogs)}
//               </span>{" "}
//               of <span className="font-medium">{totalBlogs}</span> results
//             </p>
//           </div>
//           {/* Desktop Pagination Controls */}
//           <div>
//             <nav
//               className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
//               aria-label="Pagination"
//             >
//               <button
//                 onClick={handlePreviousPage}
//                 disabled={currentPage === 1}
//                 className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <span className="sr-only">Previous</span>
//                 <ChevronLeft size={16} aria-hidden="true" />
//               </button>

//               {/* Page Number Buttons */}
//               {renderPaginationButtons()}

//               <button
//                 onClick={handleNextPage}
//                 disabled={currentPage === totalPages}
//                 className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <span className="sr-only">Next</span>
//                 <ChevronRight size={16} aria-hidden="true" />
//               </button>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PublishedBlog;



// import React, { useState } from "react";
// import { Trash2, ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";

// // --- Static Blog Data ---
// const allBlogs = [
//   {
//     id: 1,
//     title: "Why Your Blog Isn't Ranking on Google (Even After SEO)",
//     date: "18/11/2025",
//   },
//   {
//     id: 2,
//     title: "7 Mistakes That Stop You from Getting Google AdSense Approval",
//     date: "13/11/2025",
//   },
//   {
//     id: 3,
//     title: "How to Write Content That Ranks Without Keyword Stuffing",
//     date: "12/11/2025",
//   },
//   {
//     id: 4,
//     title: "Mastering the Art of Viral Social Media Posts in 2025",
//     date: "01/11/2025",
//   },
//   {
//     id: 5,
//     title: "10 Essential Tools for Remote Developers in 2026",
//     date: "29/10/2025",
//   },
//   {
//     id: 6,
//     title: "React vs Vue: Which Framework Should You Choose?",
//     date: "25/10/2025",
//   },
//   {
//     id: 7,
//     title: "Understanding the JavaScript Event Loop",
//     date: "20/10/2025",
//   },
//   {
//     id: 8,
//     title: "The Future of Headless CMS Architectures",
//     date: "15/10/2025",
//   },
//   { id: 9, title: "A Deep Dive into CSS Grid Layouts", date: "10/10/2025" },
//   {
//     id: 10,
//     title: "Optimizing Web Performance with Lazy Loading",
//     date: "05/10/2025",
//   },
//   {
//     id: 11,
//     title: "Building Accessible Forms in Modern Web Applications",
//     date: "01/10/2025",
//   },
//   {
//     id: 12,
//     title: "The Rise of Serverless Functions in Backend Development",
//     date: "25/09/2025",
//   },
//   {
//     id: 13,
//     title: "Best Practices for Naming Variables in Code",
//     date: "20/09/2025",
//   },
//   {
//     id: 14,
//     title: "Using TypeScript with React Hooks Effectively",
//     date: "15/09/2025",
//   },
//   {
//     id: 15,
//     title: "Introduction to GraphQL and Its Advantages",
//     date: "10/09/2025",
//   },
//   {
//     id: 16,
//     title: "How to Secure Your Next.js Application",
//     date: "05/09/2025",
//   },
//   {
//     id: 17,
//     title: "The Power of Custom Tailwind CSS Plugins",
//     date: "01/09/2025",
//   },
//   {
//     id: 18,
//     title: "Deploying React Apps with Vercel and Netlify",
//     date: "25/08/2025",
//   },
//   {
//     id: 19,
//     title: "Debugging Tips and Tricks for Frontend Developers",
//     date: "20/08/2025",
//   },
//   { id: 20, title: "A Beginner's Guide to Git and GitHub", date: "15/08/2025" },
// ];

// // --- Pagination Constants ---
// const ITEMS_PER_PAGE = 10;

// const PublishedBlog = () => {
//   const [blogs, setBlogs] = useState(allBlogs);
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;
//   const currentBlogs = blogs.slice(startIndex, endIndex);

//   // Pagination Handlers
//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };
//   const handlePreviousPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };
//   const handleGoToPage = (page) => {
//     if (page >= 1 && page <= totalPages) setCurrentPage(page);
//   };

//   // Refresh Handler
//   const handleRefresh = () => {
//     setCurrentPage(1);
//     alert("Blog list refreshed!");
//   };

//   // Delete Handler
//   const handleDelete = (id) => {
//     setBlogs(blogs.filter((blog) => blog.id !== id));
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen p-4">
//       {/* Header */}
//       <header className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-3xl font-bold">Books</h1>
//           <p className="text-sm text-gray-500 mt-1">Manage your book posts</p>
//         </div>
//         <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
//           + Add Books
//         </button>
//       </header>

//       {/* Table */}
//       <div className="overflow-x-auto shadow-lg rounded-lg mb-4">
//         <table className="min-w-full divide-y divide-gray-200 bg-white">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase w-3/5">
//                 Book Post
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase w-1/5">
//                 Date
//               </th>
//               <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase w-1/5">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentBlogs.map((blog) => (
//               <tr key={blog.id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 text-sm font-semibold text-gray-900">
//                   {blog.title}
//                 </td>
//                 <td className="px-6 py-4 text-sm text-gray-500">{blog.date}</td>
//                 <td className="px-6 py-4 text-right text-sm">
//                   <button
//                     onClick={() => handleDelete(blog.id)}
//                     className="text-red-500 hover:text-red-700 p-1 rounded-md"
//                   >
//                     <Trash2 size={18} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-4">
//         <button
//           onClick={handlePreviousPage}
//           disabled={currentPage === 1}
//           className="px-3 py-1 border rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <div>
//           {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
//             <button
//               key={p}
//               onClick={() => handleGoToPage(p)}
//               className={`px-3 py-1 mx-1 rounded ${
//                 p === currentPage ? "bg-blue-600 text-white" : "border"
//               }`}
//             >
//               {p}
//             </button>
//           ))}
//         </div>
//         <button
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages}
//           className="px-3 py-1 border rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PublishedBlog;




// import React, { useState } from "react";
// import { Trash2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// // --- Static Book Data ---
// const allBooks = [
//   { id: 1, title: "Why Your Blog Isn't Ranking", date: "18/11/2025" },
//   {
//     id: 2,
//     title: "7 Mistakes That Stop You from Getting AdSense",
//     date: "13/11/2025",
//   },
//   {
//     id: 3,
//     title: "Write Content That Ranks Without Keyword Stuffing",
//     date: "12/11/2025",
//   },
//   {
//     id: 4,
//     title: "Mastering Viral Social Media Posts in 2025",
//     date: "01/11/2025",
//   },
//   {
//     id: 5,
//     title: "10 Essential Tools for Remote Developers",
//     date: "29/10/2025",
//   },
//   {
//     id: 6,
//     title: "React vs Vue: Which Framework to Choose?",
//     date: "25/10/2025",
//   },
//   { id: 7, title: "Understanding JS Event Loop", date: "20/10/2025" },
//   { id: 8, title: "Future of Headless CMS Architectures", date: "15/10/2025" },
//   { id: 9, title: "A Deep Dive into CSS Grid", date: "10/10/2025" },
//   {
//     id: 10,
//     title: "Optimizing Web Performance with Lazy Loading",
//     date: "05/10/2025",
//   },
//   { id: 11, title: "Building Accessible Forms", date: "01/10/2025" },
//   { id: 12, title: "Rise of Serverless Functions", date: "25/09/2025" },
// ];

// const ITEMS_PER_PAGE = 5;

// const PublishedBlog = () => {
//   const [books, setBooks] = useState(allBooks);
//   const [currentPage, setCurrentPage] = useState(1);
//   const navigate = useNavigate();

//   const totalPages = Math.ceil(books.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const endIndex = startIndex + ITEMS_PER_PAGE;
//   const currentBooks = books.slice(startIndex, endIndex);

//   // Pagination
//   const handleNextPage = () =>
//     currentPage < totalPages && setCurrentPage(currentPage + 1);
//   const handlePreviousPage = () =>
//     currentPage > 1 && setCurrentPage(currentPage - 1);
//   const handleGoToPage = (page) =>
//     page >= 1 && page <= totalPages && setCurrentPage(page);

//   // Delete Book
//   const handleDelete = (id) => setBooks(books.filter((book) => book.id !== id));

//   return (
//     <div className="bg-gray-50 min-h-screen p-4">
//       {/* Header */}
//       <header className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-3xl font-bold">Books</h1>
//           <p className="text-sm text-gray-500 mt-1">Manage your book posts</p>
//         </div>
        
//       </header>

//       {/* Table */}
//       <div className="overflow-x-auto shadow-lg rounded-lg mb-4">
//         <table className="min-w-full divide-y divide-gray-200 bg-white">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase w-3/5">
//                 Book Title
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase w-1/5">
//                 Date
//               </th>
//               <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase w-1/5">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentBooks.map((book) => (
//               <tr key={book.id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 text-sm font-semibold text-gray-900">
//                   {book.title}
//                 </td>
//                 <td className="px-6 py-4 text-sm text-gray-500">{book.date}</td>
//                 <td className="px-6 py-4 text-right text-sm">
//                   <button
//                     onClick={() => handleDelete(book.id)}
//                     className="text-red-500 hover:text-red-700 p-1 rounded-md"
//                   >
//                     <Trash2 size={18} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-4">
//         <button
//           onClick={handlePreviousPage}
//           disabled={currentPage === 1}
//           className="px-3 py-1 border rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <div>
//           {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
//             <button
//               key={p}
//               onClick={() => handleGoToPage(p)}
//               className={`px-3 py-1 mx-1 rounded ${
//                 p === currentPage ? "bg-blue-600 text-white" : "border"
//               }`}
//             >
//               {p}
//             </button>
//           ))}
//         </div>
//         <button
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages}
//           className="px-3 py-1 border rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PublishedBlog;


// import React, { useEffect, useState } from "react";
// import { Trash2 } from "lucide-react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const PublishedBlogs = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);

// const fetchBooks = async () => {
//   try {
//    const res = await axios.get("http://localhost:5000/api/books/published");

//     setBooks(res.data);
//     setLoading(false);
//   } catch (err) {
//     toast.error("Failed to load books");
//     setLoading(false);
//   }
// };


//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/books/${id}`);
//       setBooks((prev) => prev.filter((b) => b._id !== id));
//       toast.success("Book deleted successfully");
//     } catch (err) {
//       toast.error("Delete failed");
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="p-4 min-h-screen bg-gray-50">
//       <ToastContainer position="top-right" />

//       <h1 className="text-2xl font-bold mb-4">Published Books</h1>

//       <div className="bg-white shadow rounded overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-6 py-3 text-left">Title</th>
//               <th className="px-6 py-3 text-left">Date</th>
//               <th className="px-6 py-3 text-right">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {books.map((b) => (
//               <tr key={b._id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4">{b.title}</td>
//                 <td className="px-6 py-4">
//                   {new Date(b.createdAt).toLocaleDateString()}
//                 </td>

//                 <td className="px-6 py-4 text-right">
//                   <button
//                     onClick={() => handleDelete(b._id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <Trash2 size={16} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PublishedBlogs;



import React, { useEffect, useState } from "react";
import { Trash2, Eye, X } from "lucide-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const APIURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
// ------------------- ViewBookModal Component (Enhanced UI) -------------------
const ViewBookModal = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl transform scale-100 transition-transform duration-300 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-indigo-50 border-b border-indigo-200 p-5 flex justify-between items-center z-10">
          <h2 className="text-2xl font-extrabold  font-sans text-indigo-700 truncate">
            Book Details: {book.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-indigo-500 hover:bg-indigo-200 transition duration-200 hover:text-indigo-800 cursor-pointer"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          {/* Cover Image Confirmation */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-lg font-semibold  font-sans text-gray-800 mb-3 flex items-center">
              Cover Image
            </p>
            <img
              src={book.coverUrl}
              alt={book.title}
              className="w-full h-auto max-h-80 object-contain rounded-lg shadow-md transition duration-300 transform hover:scale-[1.01]"
            />
          </div>

          {/* Main Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DetailItem label="Book Title" value={book.title} />
            <DetailItem
              label="Date Published"
              value={new Date(book.createdAt).toLocaleDateString()}
            />
            <DetailItem
              label="Price"
              value={`₹ ${book.discountedPrice || book.price}`}
            />{" "}
            {/* Change to INR */}
            <DetailItem
              label="Pricing Type"
              value={book.pricingType || "Fixed"}
            />
          </div>

          {/* Description */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-lg font-semibold  font-sans text-gray-800 mb-2">
              Description
            </p>
            <p className="text-gray-600   font-sans leading-relaxed text-sm">
              {book.description}
            </p>
          </div>

          {/* Files Confirmation */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-lg font-semibold  font-sans text-gray-800 mb-3">
              Attached Files ({book.files.length})
            </p>
            <ul className="divide-y divide-gray-100 border border-gray-100 rounded-lg">
              {book.files.map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-3 text-sm hover:bg-gray-50 transition"
                >
                  <span className="font-medium text-gray-700 truncate">
                    {file.name}
                  </span>
                  <span className="text-xs text-indigo-500 ml-2">
                    (
                    {file.url.includes("res.cloudinary")
                      ? "Uploaded"
                      : "External Link"}
                    )
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-5 border-t flex justify-end bg-gray-50 rounded-b-xl">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-indigo-600 text-white   font-sans rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper Component for Details
const DetailItem = ({ label, value }) => (
  <div>
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="mt-1 text-base text-gray-900 font-semibold truncate">
      {value}
    </dd>
  </div>
);

// ------------------- PublishedBlogs Component (Enhanced UI) -------------------
const PublishedBlogs = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBook, setSelectedBook] = useState(null);

  const fetchBooks = async () => {
    try {
      const res = await axios.get(`${APIURL}/api/books/published`);
      setBooks(res.data);
      setLoading(false);
    } catch (err) {
      toast.error("Failed to load books");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;

    try {
      await axios.delete(`${APIURL}/api/books/${id}`);
      setBooks((prev) => prev.filter((b) => b._id !== id));
      toast.success("Book deleted successfully");
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  const handleView = (book) => {
    setSelectedBook(book);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading)
    return (
      <div className="p-10 text-center text-lg  font-sans text-indigo-600 bg-gray-50 min-h-screen">
        Loading published books...
      </div>
    );

  return (
    <div className="p-4 sm:p-8 min-h-screen  bg-gray-50">
      <ToastContainer position="top-right" />
      <h1 className="text-3xl font-extrabold  font-sans text-gray-800 mb-6 border-b pb-2">
        📖 Published Books Dashboard
      </h1>

      {books.length === 0 ? (
        <div className="text-center p-10 bg-white rounded-lg shadow-md text-gray-500">
          <p className="text-xl  font-sans">No books published yet.</p>
        </div>
      ) : (
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-100">
              <tr>
                <th className="px-6 py-4  font-sans text-left text-sm font-bold text-indigo-700 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6  font-sans py-4 text-left text-sm font-bold text-indigo-700 uppercase tracking-wider hidden sm:table-cell">
                  Price
                </th>
                <th className="px-6 py-4 text-left  font-sans text-sm font-bold text-indigo-700 uppercase tracking-wider hidden md:table-cell">
                  Date
                </th>
                <th className="px-6 py-4 text-right  font-sans text-sm font-bold text-indigo-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {books.map((b) => (
                <tr
                  key={b._id}
                  className="hover:bg-indigo-50 transition duration-150"
                >
                  <td className="px-6 py-4  font-sans font-medium text-gray-900 truncate max-w-xs">
                    {b.title}
                  </td>
                  <td className="px-6   font-sans py-4 text-gray-700 hidden sm:table-cell">
                    <span className="font-bold">
                      ₹ {b.discountedPrice || b.price}
                    </span>{" "}
                    {/* Change to INR */}
                  </td>
                  <td className="px-6  font-sans py-4 text-sm text-gray-500 hidden md:table-cell">
                    {new Date(b.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-4  font-sans text-right flex justify-end space-x-3">
                    {/* View Button */}
                    <button
                      onClick={() => handleView(b)}
                      className="text-indigo-600 hover:text-indigo-800 p-2 rounded-full hover:bg-indigo-200 transition duration-200 cursor-pointer"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(b._id)}
                      className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-200 transition duration-200 cursor-pointer"
                      title="Delete Book"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal Render */}
      <ViewBookModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
      />
    </div>
  );
};

export default PublishedBlogs;
