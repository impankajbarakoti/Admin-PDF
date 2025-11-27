// // PostBooks.jsx
// import React, { useRef, useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   Trash2,
//   Image as ImageIcon,
//   UploadCloud,
//   Pencil,
//   CreditCard,
//   Settings,
//   HelpCircle,
// } from "lucide-react";

// // ------------------- Tab Component -------------------
// const Tab = ({ label, Icon, isActive, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`py-3 px-4 sm:px-6 flex items-center text-sm font-medium ${
//       isActive
//         ? "text-indigo-600 border-b-2 border-indigo-600"
//         : "text-gray-500 hover:text-gray-700"
//     }`}
//   >
//     {Icon && <Icon className="w-4 h-4 mr-2 hidden sm:block" />}
//     {label}
//   </button>
// );

// // ------------------- Input Component -------------------
// const FormInput = ({ label, value, onChange, maxLength, required = false, placeholder = "" }) => (
//   <div className="mb-6">
//     <label className="block text-gray-700 font-medium mb-2 text-sm">
//       {label} {required && <span className="text-red-500">*</span>}
//     </label>
//     <input
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       maxLength={maxLength}
//       placeholder={placeholder}
//       className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
//     />
//   </div>
// );

// // ------------------- Add Resource Link -------------------
// const AddResourceLink = ({ onAdd }) => {
//   const [link, setLink] = useState("");
//   return (
//     <div className="flex mb-6">
//       <input
//         value={link}
//         onChange={(e) => setLink(e.target.value)}
//         type="text"
//         placeholder="Add resource link"
//         className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:ring-indigo-500 focus:border-indigo-500 text-sm"
//       />
//       <button
//         onClick={() => {
//           if (!link) return;
//           onAdd(link);
//           setLink("");
//         }}
//         className="px-5 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700"
//       >
//         Add
//       </button>
//     </div>
//   );
// };

// // ------------------- Page Details Section -------------------
// const PageDetailsSection = ({
//   title,
//   setTitle,
//   description,
//   setDescription,
//   coverPreview,
//   onCoverClick,
//   onRemoveCover,
//   buttonText,
//   setButtonText,
// }) => (
//   <div className="space-y-6">
//     <FormInput label="Book Title" value={title} onChange={setTitle} maxLength={100} required />
//     <div className="mb-6">
//       <label className="block text-gray-700 font-medium mb-2 text-sm">
//         Cover Image *
//       </label>
//       <div
//         onClick={onCoverClick}
//         className="relative cursor-pointer w-full h-48 md:h-64 rounded-lg border border-dashed border-gray-300 bg-gray-50 overflow-hidden flex items-center justify-center"
//       >
//         {coverPreview ? (
//           <>
//             <img src={coverPreview} alt="cover" className="object-cover w-full h-full" />
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 onRemoveCover();
//               }}
//               className="absolute top-3 right-3 p-1 rounded-full bg-white shadow text-red-500"
//             >
//               <Trash2 className="w-4 h-4" />
//             </button>
//           </>
//         ) : (
//           <div className="flex flex-col items-center text-center px-4">
//             <ImageIcon className="w-8 h-8 text-gray-400 mb-2" />
//             <div className="text-sm text-gray-600">Click to upload cover image</div>
//             <div className="text-xs text-gray-400 mt-1">Recommended size: 1280x720</div>
//           </div>
//         )}
//       </div>
//     </div>
//     <FormInput
//       label="Description"
//       value={description}
//       onChange={setDescription}
//       maxLength={1000}
//       required
//     />
//     <FormInput
//       label="Button Text"
//       value={buttonText}
//       onChange={setButtonText}
//       maxLength={25}
//       required
//     />
//   </div>
// );

// // ------------------- Payment Details Section -------------------
// const PaymentDetailsSection = ({
//   files,
//   setFiles,
//   pricingType,
//   setPricingType,
//   offerDiscount,
//   setOfferDiscount,
//   price,
//   setPrice,
//   discountedPrice,
//   setDiscountedPrice,
// }) => {
//   const fileInputRef = useRef(null);

//   const onFilesAdded = (fileList) => {
//     const newFilesArr = Array.from(fileList).map((f) => ({
//       id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
//       file: f,
//       name: f.name,
//       size: f.size,
//     }));
//     setFiles((prev) => [...prev, ...newFilesArr]);
//   };

//   const removeFile = (id) => setFiles((prev) => prev.filter((f) => f.id !== id));

//   const handleAddLink = (link) => {
//     if (!link) return;
//     setFiles((prev) => [
//       ...prev,
//       {
//         id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
//         isLink: true,
//         url: link,
//         name: link,
//       },
//     ]);
//   };

//   return (
//     <div className="space-y-6">
//       {/* File Upload */}
//       <div className="p-4 border rounded-lg shadow-sm bg-white">
//         <h2 className="text-xl font-semibold mb-3">Upload Digital Files</h2>
//         <div
//           onClick={() => fileInputRef.current?.click()}
//           className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50 cursor-pointer hover:bg-gray-100 transition"
//         >
//           <UploadCloud className="w-8 h-8 text-indigo-500 mx-auto mb-3" />
//           <p className="font-semibold text-gray-700">Click or Drag & Drop</p>
//           <p className="text-sm text-gray-500">
//             Unlimited files, recommended total size under 100MB
//           </p>
//           <input
//             ref={fileInputRef}
//             type="file"
//             multiple
//             className="hidden"
//             onChange={(e) => {
//               if (e.target.files?.length) onFilesAdded(e.target.files);
//               e.target.value = null;
//             }}
//           />
//         </div>
//         <AddResourceLink onAdd={handleAddLink} />

//         {files.length > 0 && (
//           <div className="mt-3 space-y-2">
//             {files.map((f) => (
//               <div
//                 key={f.id}
//                 className="flex justify-between items-center p-2 border rounded hover:bg-gray-50"
//               >
//                 <div className="truncate">{f.isLink ? f.url : f.file.name}</div>
//                 <button onClick={() => removeFile(f.id)} className="text-red-500 hover:text-red-700">
//                   <Trash2 size={16} />
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Pricing */}
//       <div className="p-4 border rounded-lg shadow-sm bg-white">
//         <h2 className="text-xl font-semibold mb-3">Pricing</h2>
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Pricing Type</label>
//           <select
//             value={pricingType}
//             onChange={(e) => setPricingType(e.target.value)}
//             className="w-full border p-2 rounded hover:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
//           >
//             <option value="fixed">Fixed Price</option>
//             <option value="customers_decide">Customers Decide</option>
//           </select>
//         </div>

//         {pricingType === "fixed" && (
//           <FormInput label="Price" value={price} onChange={setPrice} placeholder="Enter price" required />
//         )}

//         <div className="flex items-center gap-2 mb-2">
//           <input
//             type="checkbox"
//             checked={offerDiscount}
//             onChange={() => setOfferDiscount(!offerDiscount)}
//             className="h-4 w-4"
//           />
//           <span className="font-medium">
//             Offer Discounted Price <HelpCircle className="inline w-4 h-4 text-gray-400" />
//           </span>
//         </div>

//         {offerDiscount && (
//           <FormInput
//             label="Discounted Price"
//             value={discountedPrice}
//             onChange={setDiscountedPrice}
//             placeholder="Enter discounted price"
//             required
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// // ------------------- Main Component -------------------
// const PostBooks = () => {
//   const [activeTab, setActiveTab] = useState(0); // 0=Details,1=Payment
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [coverFile, setCoverFile] = useState(null);
//   const [coverPreview, setCoverPreview] = useState(null);
//   const coverInputRef = useRef(null);
//   const [buttonText, setButtonText] = useState("Buy Now");

//   // Payment
//   const [files, setFiles] = useState([]);
//   const [pricingType, setPricingType] = useState("fixed");
//   const [offerDiscount, setOfferDiscount] = useState(true);
//   const [price, setPrice] = useState("999");
//   const [discountedPrice, setDiscountedPrice] = useState("499");

//   const handleCoverClick = () => coverInputRef.current?.click();
//   const handleRemoveCover = () => {
//     setCoverFile(null);
//     setCoverPreview(null);
//   };
//   const onCoverInputChange = (e) => {
//     if (e.target.files?.[0]) {
//       setCoverFile(e.target.files[0]);
//       setCoverPreview(URL.createObjectURL(e.target.files[0]));
//     }
//     e.target.value = null;
//   };

//   // ------------------- Cloudinary Upload -------------------
//   const uploadToCloudinary = async (file, type = "image") => {
//   const formData = new FormData();
//   formData.append("file", file);
//   formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

//   const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

//   const endpoint =
//     type === "image"
//       ? `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
//       : `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

//   const res = await axios.post(endpoint, formData);
//   return res.data.secure_url;
// };

//   // ------------------- Save & Next -------------------
//   const handleSaveAndNext = () => {
//     if (!title || !description || !coverFile) return toast.error("Please fill all details & upload cover!");
//     toast.success("Page Details Saved!");
//     setActiveTab(1);
//   };

//   // ------------------- Save & Publish -------------------
//   const handleSaveAndPublish = async () => {
//     if (!title || !description || !coverFile || files.length === 0) {
//       return toast.error("Fill all details & upload files!");
//     }
//     toast.info("Publishing book...");

//     try {
//       // 1️⃣ Upload cover
//       const coverUrl = await uploadToCloudinary(coverFile, "image");

//       // 2️⃣ Upload book files
//       const uploadedFiles = await Promise.all(
//         files.map(async (f) => {
//           if (f.isLink) return { name: f.name, url: f.url };
//           const url = await uploadToCloudinary(f.file, "file");
//           return { name: f.file.name, url };
//         })
//       );

//       // 3️⃣ Save book data to backend
//      await axios.post("http://localhost:5000/api/books", {
//        title,
//        description,
//        coverUrl,
//        files: uploadedFiles,
//        pricing: { type: pricingType, price, discountedPrice },
//        buttonText,
//        published: true,
//      });

//       toast.success("Book Published Successfully!");
//       setActiveTab(0);
//       setTitle("");
//       setDescription("");
//       setCoverFile(null);
//       setCoverPreview(null);
//       setFiles([]);
//     } catch (error) {
//       console.error(error);
//       toast.error("Publishing failed!");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 w-full">
//       <ToastContainer position="top-right" autoClose={2000} />
//       <div className="w-full bg-white overflow-hidden rounded-lg shadow-md">
//         <div className="flex border-b border-gray-200 bg-white p-2 sm:p-0">
//           <Tab label="Page Details" Icon={Pencil} isActive={activeTab === 0} onClick={() => setActiveTab(0)} />
//           <Tab
//             label="Payment Page Details"
//             Icon={CreditCard}
//             isActive={activeTab === 1}
//             onClick={() => setActiveTab(1)}
//           />
//           <Tab label="Advanced Settings" Icon={Settings} isActive={activeTab === 2} onClick={() => setActiveTab(2)} />
//         </div>

//         <div className="p-4 sm:p-6 lg:p-8">
//           {activeTab === 0 && (
//             <>
//               <input
//                 ref={coverInputRef}
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={onCoverInputChange}
//               />
//               <PageDetailsSection
//                 title={title}
//                 setTitle={setTitle}
//                 description={description}
//                 setDescription={setDescription}
//                 coverPreview={coverPreview}
//                 onCoverClick={handleCoverClick}
//                 onRemoveCover={handleRemoveCover}
//                 buttonText={buttonText}
//                 setButtonText={setButtonText}
//               />
//               <div className="mt-8 flex justify-end">
//                 <button
//                   onClick={handleSaveAndNext}
//                   className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 shadow-lg"
//                 >
//                   Save and Next
//                 </button>
//               </div>
//             </>
//           )}

//           {activeTab === 1 && (
//             <>
//               <PaymentDetailsSection
//                 files={files}
//                 setFiles={setFiles}
//                 pricingType={pricingType}
//                 setPricingType={setPricingType}
//                 offerDiscount={offerDiscount}
//                 setOfferDiscount={setOfferDiscount}
//                 price={price}
//                 setPrice={setPrice}
//                 discountedPrice={discountedPrice}
//                 setDiscountedPrice={setDiscountedPrice}
//               />
//               <div className="mt-8 flex justify-end gap-4">
//                 <button
//                   onClick={() => setActiveTab(0)}
//                   className="px-6 py-3 bg-gray-200 rounded-xl hover:bg-gray-300 shadow"
//                 >
//                   Previous
//                 </button>
//                 <button
//                   onClick={handleSaveAndPublish}
//                   className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 shadow-lg"
//                 >
//                   Save and Publish
//                 </button>
//               </div>
//             </>
//           )}

//           {activeTab === 2 && <div className="p-6 text-gray-500 text-center">Coming Soon</div>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostBooks;

// PostBooks.jsx (Updated for Beautiful UI and Responsiveness)

import React, { useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Trash2,
  Image as ImageIcon,
  UploadCloud,
  Pencil,
  CreditCard,
  Settings,
  HelpCircle,
} from "lucide-react";

const APIURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

// ------------------- Tab Component (Improved Styling) -------------------
const Tab = ({ label, Icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`py-3 px-3 sm:px-6 flex items-center text-sm font-semibold transition duration-200 ease-in-out cursor-pointer ${
      isActive
        ? "text-indigo-700 border-b-3 border-indigo-600 bg-indigo-50"
        : "text-gray-500 hover:text-indigo-600 hover:bg-gray-50"
    }`}
  >
        {Icon && <Icon className="w-4 h-4 mr-2 hidden sm:block" />}    {label} {" "}
  </button>
);

// ------------------- FormInput Component (Improved Styling) -------------------
const FormInput = ({
  label,
  value,
  onChange,
  maxLength,
  required = false,
  placeholder = "",
  type = "text",
}) => (
  <div className="mb-6">
       {" "}
    <label className="block text-gray-700 font-semibold mb-2 text-sm">
            {label} {required && <span className="text-red-500">*</span>}   {" "}
    </label>
       {" "}
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      maxLength={maxLength}
      placeholder={placeholder}
      type={type} // Added type support
      className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
    />
     {" "}
  </div>
);

// ------------------- Add Resource Link (Improved Styling) -------------------
const AddResourceLink = ({ onAdd }) => {
  const [link, setLink] = useState("");
  return (
    <div className="flex mb-6 mt-4">
           {" "}
      <input
        value={link}
        onChange={(e) => setLink(e.target.value)}
        type="url"
        placeholder="Add external resource link (e.g., Google Drive link)"
        className="flex-grow p-3 border border-gray-300 rounded-l-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
      />
           {" "}
      <button
        onClick={() => {
          if (!link) return;
          onAdd(link);
          setLink("");
        }}
        className="px-5 bg-indigo-600 text-white font-sans font-semibold rounded-r-xl hover:bg-indigo-700 transition duration-150 shadow-md disabled:opacity-50"
        disabled={!link}
      >
                Add      {" "}
      </button>
         {" "}
    </div>
  );
};

// ------------------- Page Details Section (Improved UI) -------------------
const PageDetailsSection = ({
  title,
  setTitle,
  description,
  setDescription,
  coverPreview,
  onCoverClick,
  onRemoveCover,
  buttonText,
  setButtonText,
}) => (
  <div className="space-y-6  font-sans bg-white p-6 rounded-xl shadow-inner">
       {" "}
    <FormInput
      label="Book Title"
      value={title}
      onChange={setTitle}
      maxLength={100}
      required
      placeholder="Enter the main title"
    />
       {/* Cover Image Upload Area */}   {" "}
    <div className="mb-6">
           {" "}
      <label className="block text-gray-700  font-sans font-semibold mb-2 text-sm">
                Cover Image *      {" "}
      </label>
           {" "}
      <div
        onClick={onCoverClick}
        className="relative cursor-pointer w-full h-48 md:h-64 rounded-xl border-3 border-dashed border-indigo-300 bg-indigo-50 overflow-hidden flex items-center justify-center transition duration-200 hover:border-indigo-500 hover:bg-indigo-100"
      >
               {" "}
        {coverPreview ? (
          <>
                       {" "}
            <img
              src={coverPreview}
              alt="cover"
              className="object-cover w-full h-full"
            />
                       {" "}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemoveCover();
              }}
              className="absolute top-3 right-3 p-2 sm:p-3 md:p-4 rounded-full bg-red-500 shadow-lg text-white hover:bg-red-600 transition duration-150 z-10"
              title="Remove Cover Image"
            >
              <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
                     {" "}
          </>
        ) : (
          <div className="flex flex-col items-center text-center px-4">
                        <ImageIcon className="w-10 h-10 text-indigo-400 mb-3" />
                       {" "}
            <div className="text-md text-indigo-600  font-sans font-semibold">
              Click to upload cover image
            </div>
                       {" "}
            <div className="text-xs  font-sans text-gray-500 mt-1">
              PNG, JPG, SVG. Max 5MB.
            </div>
                     {" "}
          </div>
        )}
             {" "}
      </div>
         {" "}
    </div>
    {/* Description Input */}
    <div className="mb-6">
      <label className="block text-gray-700 font-semibold   font-sans mb-2 text-sm">
        Description {<span className="text-red-500">*</span>}
      </label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={1000}
        rows={4}
        placeholder="Describe your book/resource..."
        className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 resize-none"
      />
      <p className="text-xs text-right  font-sans text-gray-500 mt-1">
        {description.length} / 1000 characters
      </p>
    </div>
       {" "}
    <FormInput
      label="Call-to-Action Button Text"
      value={buttonText}
      onChange={setButtonText}
      maxLength={25}
      required
      placeholder="e.g., Buy Now, Download, Learn More"
    />
     {" "}
  </div>
);

// ------------------- Payment Details Section (Improved UI) -------------------
const PaymentDetailsSection = ({
  files,
  setFiles,
  pricingType,
  setPricingType,
  offerDiscount,
  setOfferDiscount,
  price,
  setPrice,
  discountedPrice,
  setDiscountedPrice,
}) => {
  const fileInputRef = useRef(null);

  const onFilesAdded = (fileList) => {
    const newFilesArr = Array.from(fileList).map((f) => ({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      file: f,
      name: f.name,
      size: f.size,
    }));
    setFiles((prev) => [...prev, ...newFilesArr]);
  };

  const removeFile = (id) =>
    setFiles((prev) => prev.filter((f) => f.id !== id));

  const handleAddLink = (link) => {
    if (!link) return;
    setFiles((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        isLink: true,
        url: link,
        name: link,
      },
    ]);
  };

  return (
    <div className="space-y-8 bg-white p-6 rounded-xl shadow-inner">
            {/* File Upload Card */}     {" "}
      <div className="p-5 border border-indigo-200 rounded-xl shadow-md bg-indigo-50">
               {" "}
        <h2 className="text-xl font-bold  font-sans text-indigo-700 mb-4">
          Files & Content
        </h2>
               {/* Upload Drop Zone */}       {" "}
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-indigo-400 rounded-xl p-8 text-center bg-white cursor-pointer hover:bg-gray-50 transition duration-200"
        >
                   {" "}
          <UploadCloud className="w-10 h-10 text-indigo-500 mx-auto mb-3" />   
               {" "}
          <p className="font-bold  font-sans text-indigo-700">
            Click or Drag & Drop Files
          </p>
                   {" "}
          <p className="text-sm text-gray-500  font-sans mt-1">
                        PDFs, Zips, Images (Files should be the actual product).
                     {" "}
          </p>
                   {" "}
          <input
            ref={fileInputRef}
            type="file"
            multiple
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.length) onFilesAdded(e.target.files);
              e.target.value = null;
            }}
          />
                 {" "}
        </div>
        {/* Resource Link Input */}
                <AddResourceLink onAdd={handleAddLink} />       {" "}
        {files.length > 0 && (
          <div className="mt-5 space-y-2 border-t pt-4">
            <p className="font-semibold  font-sans text-gray-700">
              Attached Resources:
            </p>
                       {" "}
            {files.map((f) => (
              <div
                key={f.id}
                className="flex justify-between items-center p-3 border rounded-xl bg-white shadow-sm hover:border-red-400 transition"
              >
                               {" "}
                <div className="truncate text-sm font-medium text-gray-800">
                  {f.isLink ? f.url : f.name}
                </div>
                               {" "}
                <button
                  onClick={() => removeFile(f.id)}
                  className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 transition cursor-pointer"
                  title="Remove File"
                >
                                    <Trash2 size={16} />               {" "}
                </button>
                             {" "}
              </div>
            ))}
                     {" "}
          </div>
        )}
             {" "}
      </div>
            {/* Pricing Card */}     {" "}
      <div className="p-5 border border-green-200 rounded-xl shadow-md bg-green-50">
               {" "}
        <h2 className="text-xl font-bold text-green-700   font-sans mb-4">
          Pricing Setup
        </h2>
               {" "}
        <div className="mb-4">
                   {" "}
          <label className="block mb-1 font-semibold  font-sans text-gray-700">
            Pricing Type
          </label>
          
          <select
            value={pricingType}
            onChange={(e) => setPricingType(e.target.value)}
            className="w-full border p-3 rounded-xl shadow-sm hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          >
                        <option value="fixed">Fixed Price</option>           {" "}
            <option value="customers_decide">
              Customers Decide (Pay What You Want)
            </option>
                     {" "}
          </select>
                 {" "}
        </div>
               {" "}
        {pricingType === "fixed" && (
          <FormInput
            label="Base Price (₹)"
            value={price}
            onChange={setPrice}
            placeholder="Enter price in Rupees"
            required
            type="number"
          />
        )}
               {" "}
        <div
          className="flex items-center gap-3 mb-4 mt-6 p-2 rounded-lg hover:bg-green-100 transition duration-150 cursor-pointer"
          onClick={() => setOfferDiscount(!offerDiscount)}
        >
                   {" "}
          <input
            type="checkbox"
            checked={offerDiscount}
            onChange={() => setOfferDiscount(!offerDiscount)}
            className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded cursor-pointer"
          />
                   {" "}
          <span className="font-semibold  font-sans text-gray-700">
                        Offer Discounted Price{" "}
            <HelpCircle className="inline w-4 h-4 text-green-500 ml-1" />       
             {" "}
          </span>
                 {" "}
        </div>
               {" "}
        {offerDiscount && (
          <FormInput
            label="Discounted Price (₹)"
            value={discountedPrice}
            onChange={setDiscountedPrice}
            placeholder="Enter discounted price in Rupees"
            required
            type="number"
          />
        )}
             {" "}
      </div>
         {" "}
    </div>
  );
};

// ------------------- Main Component (Improved Layout and Buttons) -------------------
const PostBooks = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverFile, setCoverFile] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const coverInputRef = useRef(null);
  const [buttonText, setButtonText] = useState("Buy Now"); // Payment

  const [files, setFiles] = useState([]);
  const [pricingType, setPricingType] = useState("fixed");
  const [offerDiscount, setOfferDiscount] = useState(true);
  const [price, setPrice] = useState("999");
  const [discountedPrice, setDiscountedPrice] = useState("499");

  const handleCoverClick = () => coverInputRef.current?.click();
  const handleRemoveCover = () => {
    setCoverFile(null);
    setCoverPreview(null);
  };
  const onCoverInputChange = (e) => {
    if (e.target.files?.[0]) {
      setCoverFile(e.target.files[0]);
      setCoverPreview(URL.createObjectURL(e.target.files[0]));
    }
    e.target.value = null;
  }; // ------------------- Cloudinary Upload -------------------

  const uploadToCloudinary = async (file, type = "image") => {
    // ... (logic remains same)
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

    const endpoint =
      type === "image"
        ? `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
        : `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

    const res = await axios.post(endpoint, formData);
    return res.data.secure_url;
  }; // ------------------- Save & Next -------------------

  const handleSaveAndNext = () => {
    if (!title || !description || !coverFile)
      return toast.error("Please fill all details & upload cover!");
    toast.success("Page Details Saved!");
    setActiveTab(1);
  }; // ------------------- Save & Publish -------------------

  const handleSaveAndPublish = async () => {
    if (!title || !description || !coverFile || files.length === 0) {
      return toast.error("Fill all details & upload files!");
    }
    toast.info("Publishing book...");

    try {
      // 1️⃣ Upload cover
      const coverUrl = await uploadToCloudinary(coverFile, "image"); // 2️⃣ Upload book files

      const uploadedFiles = await Promise.all(
        files.map(async (f) => {
          if (f.isLink) return { name: f.name, url: f.url };
          const url = await uploadToCloudinary(f.file, "file");
          return { name: f.file.name, url };
        })
      ); // 3️⃣ Save book data to backend (Using absolute URL as discussed)

      await axios.post(`${APIURL}/api/books`, {
        title,
        description,
        coverUrl,
        files: uploadedFiles,
        pricing: { type: pricingType, price, discountedPrice },
        buttonText,
        published: true,
      });

      toast.success("Book Published Successfully!");
      setActiveTab(0);
      setTitle("");
      setDescription("");
      setCoverFile(null);
      setCoverPreview(null);
      setFiles([]);
    } catch (error) {
      console.error(error);
      toast.error("Publishing failed! Check console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex justify-center w-full">
            <ToastContainer position="top-right" autoClose={2000} />     {" "}
      <div className="w-full max-w-4xl bg-white overflow-hidden rounded-2xl shadow-2xl">
               {/* Tab Navigation */}       {" "}
        <div className="flex border-b border-gray-200 bg-white  font-sans shadow-sm sticky top-0 z-10">
           {" "}
          <Tab
            label="Page Details"
            Icon={Pencil}
            isActive={activeTab === 0}
            onClick={() => setActiveTab(0)}
          />
                   {" "}
          <Tab
            label="Payment & Files"
            Icon={CreditCard}
            isActive={activeTab === 1}
            onClick={() => handleSaveAndNext()} // Ensure details are filled before moving
          />
                   {" "}
          <Tab
            label="Settings"
            Icon={Settings}
            isActive={activeTab === 2}
            onClick={() => setActiveTab(2)}
          />
                 {" "}
        </div>
               {" "}
        <div className="p-4 sm:p-8">
                   {" "}
          {activeTab === 0 && (
            <>
                           {" "}
              <input
                ref={coverInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onCoverInputChange}
              />
              <h2 className="text-2xl font-extrabold  font-sans text-gray-800 mb-6  pb-2">
                Book Information
              </h2>
                           {" "}
              <PageDetailsSection
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                coverPreview={coverPreview}
                onCoverClick={handleCoverClick}
                onRemoveCover={handleRemoveCover}
                buttonText={buttonText}
                setButtonText={setButtonText}
              />
                           {" "}
              <div className="mt-8 flex justify-end">
                               {" "}
                <button
                  onClick={handleSaveAndNext}
                  className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg transition duration-150 transform hover:scale-[1.02] disabled:opacity-50"
                  disabled={!title || !description || !coverFile}
                >
                                    Save & Next →                {" "}
                </button>
                             {" "}
              </div>
                         {" "}
            </>
          )}
                   {" "}
          {activeTab === 1 && (
            <>
              <h2 className="text-2xl font-extrabold  font-sans text-gray-800 mb-6 border-b pb-2">
                Pricing & Content
              </h2>
                           {" "}
              <PaymentDetailsSection
                files={files}
                setFiles={setFiles}
                pricingType={pricingType}
                setPricingType={setPricingType}
                offerDiscount={offerDiscount}
                setOfferDiscount={setOfferDiscount}
                price={price}
                setPrice={setPrice}
                discountedPrice={discountedPrice}
                setDiscountedPrice={setDiscountedPrice}
              />
                           {" "}
              <div className="mt-8 flex justify-end gap-4">
                               {" "}
                <button
                  onClick={() => setActiveTab(0)}
                  className="px-8 py-3 bg-gray-300 rounded-xl hover:bg-gray-400 font-semibold shadow transition duration-150"
                >
                                    ← Previous                {" "}
                </button>
                               {" "}
                <button
                  onClick={handleSaveAndPublish}
                  className="px-8 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 shadow-lg transition duration-150 transform hover:scale-[1.02] disabled:opacity-50"
                  disabled={
                    !title || !description || !coverFile || files.length === 0
                  }
                >
                                    Publish Book! 🚀                {" "}
                </button>
                             {" "}
              </div>
                         {" "}
            </>
          )}
                   {" "}
          {activeTab === 2 && (
            <div className="p-10 text-xl text-gray-500 text-center bg-gray-50 rounded-xl my-4 border">
              Advanced Settings are Coming Soon!
            </div>
          )}
                 {" "}
        </div>
             {" "}
      </div>
         {" "}
    </div>
  );
};

export default PostBooks;
