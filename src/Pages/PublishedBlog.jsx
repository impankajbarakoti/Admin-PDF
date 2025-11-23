import React, { useState } from "react";
import {
  Pencil,
  Trash2,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// --- 1. Expanded Static Blog Data (20 Items) ---
const allBlogs = [
  // Page 1 data
  {
    id: 1,
    title: "Why Your Blog Isn't Ranking on Google (Even After SEO)",
    date: "18/11/2025",
  },
  {
    id: 2,
    title: "7 Mistakes That Stop You from Getting Google AdSense Approval",
    date: "13/11/2025",
  },
  {
    id: 3,
    title: "How to Write Content That Ranks Without Keyword Stuffing",
    date: "12/11/2025",
  },
  {
    id: 4,
    title: "Mastering the Art of Viral Social Media Posts in 2025",
    date: "01/11/2025",
  },
  {
    id: 5,
    title: "10 Essential Tools for Remote Developers in 2026",
    date: "29/10/2025",
  },
  {
    id: 6,
    title: "React vs Vue: Which Framework Should You Choose?",
    date: "25/10/2025",
  },
  {
    id: 7,
    title: "Understanding the JavaScript Event Loop",
    date: "20/10/2025",
  },
  {
    id: 8,
    title: "The Future of Headless CMS Architectures",
    date: "15/10/2025",
  },
  { id: 9, title: "A Deep Dive into CSS Grid Layouts", date: "10/10/2025" },
  {
    id: 10,
    title: "Optimizing Web Performance with Lazy Loading",
    date: "05/10/2025",
  },
  // Page 2 data
  {
    id: 11,
    title: "Building Accessible Forms in Modern Web Applications",
    date: "01/10/2025",
  },
  {
    id: 12,
    title: "The Rise of Serverless Functions in Backend Development",
    date: "25/09/2025",
  },
  {
    id: 13,
    title: "Best Practices for Naming Variables in Code",
    date: "20/09/2025",
  },
  {
    id: 14,
    title: "Using TypeScript with React Hooks Effectively",
    date: "15/09/2025",
  },
  {
    id: 15,
    title: "Introduction to GraphQL and Its Advantages",
    date: "10/09/2025",
  },
  {
    id: 16,
    title: "How to Secure Your Next.js Application",
    date: "05/09/2025",
  },
  {
    id: 17,
    title: "The Power of Custom Tailwind CSS Plugins",
    date: "01/09/2025",
  },
  {
    id: 18,
    title: "Deploying React Apps with Vercel and Netlify",
    date: "25/08/2025",
  },
  {
    id: 19,
    title: "Debugging Tips and Tricks for Frontend Developers",
    date: "20/08/2025",
  },
  { id: 20, title: "A Beginner's Guide to Git and GitHub", date: "15/08/2025" },
];

// --- Pagination Constants ---
const ITEMS_PER_PAGE = 10;

const PublishedBlog = ({ blogs = allBlogs }) => {
  // --- 2. State for Pagination ---
  const [currentPage, setCurrentPage] = useState(1);
  const totalBlogs = blogs.length;

  // Calculate total pages
  const totalPages = Math.ceil(totalBlogs / ITEMS_PER_PAGE);

  // Calculate start and end indices for slicing the current page's data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Get the blogs for the current page
  const currentBlogs = blogs.slice(startIndex, endIndex);

  // --- Pagination Handlers ---
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleGoToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // --- Refresh Handler ---
  const handleRefresh = () => {
    // In a real application, this would fetch fresh data from an API
    console.log("Refreshing blog list...");
    // Reset to page 1 after refresh, though we keep the static data here for simplicity
    setCurrentPage(1);
    alert("Blog list refreshed! (Check console for message)");
  };

  // --- Pagination Display Logic ---
  const renderPaginationButtons = () => {
    const pageNumbers = [];
    // Simple range of 5 buttons centered around the current page
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    for (let i = start; i <= end; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleGoToPage(i)}
          className={`px-3 py-1 text-sm font-medium rounded-md mx-0.5 transition duration-150 ${
            i === currentPage
              ? "bg-blue-600 text-white shadow-lg"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className=" bg-gray-50 min-h-screen font-sans ">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Books</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your blog posts and content
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
          + Add Books
        </button>
      </header>

      {/* --- Table Information & Refresh --- */}
      <div className="bg-white p-4 rounded-t-xl border-b border-gray-200 shadow-sm">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-gray-800">
              Blog Posts ({totalBlogs}) - Page {currentPage} of {totalPages}
            </h2>
            <p className="text-sm text-gray-500">
              Overview of all blog posts in your content library
            </p>
          </div>
          <button
            onClick={handleRefresh} // Call the refresh handler
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full transition duration-150"
            aria-label="Refresh List"
          >
            <RefreshCw size={20} />
          </button>
        </div>
      </div>

      {/* --- Main Table --- */}
      <div className="overflow-x-auto shadow-lg rounded-b-xl mb-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/5">
                Blog Post
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                Date
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body - Mapping over the current page's data */}
          <tbody className="bg-white divide-y divide-gray-200">
            {currentBlogs.map((blog) => (
              <tr
                key={blog.id}
                className="hover:bg-gray-50 transition duration-150"
              >
                <td className="px-6 py-4">
                  <div className="text-sm font-semibold text-gray-900">
                    {blog.title}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    ID: {blog.id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {blog.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  {/* Edit Button */}
                  <button
                    className="text-blue-500 hover:text-blue-700 mr-3 p-1 rounded-md transition duration-150"
                    aria-label={`Edit ${blog.title}`}
                  >
                    <Pencil size={18} />
                  </button>
                  {/* Delete Button */}
                  <button
                    className="text-red-500 hover:text-red-700 p-1 rounded-md transition duration-150"
                    aria-label={`Delete ${blog.title}`}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- Pagination Controls --- */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6 rounded-lg shadow-md">
        <div className="flex-1 flex justify-between sm:hidden">
          {/* Mobile Pagination */}
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          {/* Desktop Pagination Status */}
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
              <span className="font-medium">
                {Math.min(endIndex, totalBlogs)}
              </span>{" "}
              of <span className="font-medium">{totalBlogs}</span> results
            </p>
          </div>
          {/* Desktop Pagination Controls */}
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeft size={16} aria-hidden="true" />
              </button>

              {/* Page Number Buttons */}
              {renderPaginationButtons()}

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="sr-only">Next</span>
                <ChevronRight size={16} aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishedBlog;
