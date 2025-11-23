import React, { useRef, useState, useEffect } from "react";
import {
  Trash2,
  Image as ImageIcon,
  UploadCloud,
  File as FileIcon,
  Plus,
  ChevronDown,
  CreditCard,
  Settings,
  Pencil,
  Quote,
  HelpCircle,
  Package,
} from "lucide-react";

/* 
 PostBooks.jsx
 - Cover upload (click to pick), preview & remove
 - Rich text editor (bold/italic/underline) using execCommand
 - Insert image via URL OR local file (file input)
 - Dropzone file uploads + link add
 - Controlled inputs
 - Designed to render inside Dashboard content area
*/

const ToggleSwitch = ({ checked, onChange }) => (
  <button
    onClick={onChange}
    className={`relative inline-flex h-6 w-11 rounded-full transition-colors duration-200 focus:outline-none ${
      checked ? "bg-indigo-600" : "bg-gray-200"
    }`}
    role="switch"
    aria-checked={checked}
  >
    <span
      className={`inline-block h-5 w-5 rounded-full bg-white transform transition-transform ${
        checked ? "translate-x-5" : "translate-x-0"
      }`}
    />
  </button>
);

const Tab = ({ label, Icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`py-3 px-4 sm:px-6 flex items-center text-sm font-medium ${
      isActive
        ? "text-indigo-600 border-b-2 border-indigo-600"
        : "text-gray-500 hover:text-gray-700"
    }`}
  >
    {Icon && <Icon className="w-4 h-4 mr-2 hidden sm:block" />}
    {label}
  </button>
);

const FormInput = ({
  label,
  value,
  onChange,
  maxLength,
  required = false,
  placeholder = "",
}) => (
  <div className="mb-6">
    <label className="block text-gray-700 font-medium mb-2 text-sm">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        placeholder={placeholder}
        className="w-full p-3 pr-20 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
      />
      {maxLength && (
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-500 bg-white px-1">
          {value.length}/{maxLength}
        </span>
      )}
    </div>
  </div>
);

const InsertImageButton = ({ editorRef, setEditorHtml }) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [url, setUrl] = useState("");
  const fileInputRef = useRef(null);

  // Insert by URL
  const insertByURL = () => {
    if (!url) return;
    const imgHtml = `<img src="${url}" alt="inserted" style="max-width:100%; display:block; margin:8px 0;" />`;
    // Insert HTML at caret
    document.execCommand("insertHTML", false, imgHtml);
    setUrl("");
    setShowPrompt(false);
    if (editorRef.current) setEditorHtml(editorRef.current.innerHTML);
  };

  // Insert by local file
  const onLocalFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target.result;
      const imgHtml = `<img src="${src}" alt="inserted" style="max-width:100%; display:block; margin:8px 0;" />`;
      document.execCommand("insertHTML", false, imgHtml);
      if (editorRef.current) setEditorHtml(editorRef.current.innerHTML);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowPrompt((s) => !s)}
        className="p-2 hover:bg-gray-200 rounded"
      >
        <ImageIcon className="w-4 h-4" />
      </button>

      {showPrompt && (
        <div className="absolute left-20 mt-2 w-72 bg-white border border-gray-200 rounded shadow p-3 z-50">
          <div className="mb-2 text-xs text-gray-500">Insert image by URL</div>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-2 border rounded mb-2 text-sm"
            placeholder="https://..."
          />
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => setShowPrompt(false)}
              className="px-3 py-1 border rounded text-sm"
            >
              Cancel
            </button>
            <button
              onClick={insertByURL}
              className="px-3 py-1 bg-indigo-600 text-white rounded text-sm"
            >
              Insert
            </button>
          </div>

          <div className="border-t my-2" />

          <div className="text-xs text-gray-500 mb-2">
            Or upload from your device
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) onLocalFile(e.target.files[0]);
              e.target.value = null;
            }}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full px-3 py-2 bg-gray-100 rounded text-sm"
          >
            Choose image
          </button>
        </div>
      )}
    </div>
  );
};

const AddResourceLink = ({ onAdd }) => {
  const [link, setLink] = useState("");
  return (
    <div className="flex mb-6">
      <input
        value={link}
        onChange={(e) => setLink(e.target.value)}
        type="text"
        placeholder="Add resource link"
        className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:ring-indigo-500 focus:border-indigo-500 text-sm"
      />
      <button
        onClick={() => {
          if (!link) return;
          onAdd(link);
          setLink("");
        }}
        className="px-5 bg-indigo-600 text-white rounded-r-lg"
      >
        Add
      </button>
    </div>
  );
};

const PageDetailsSection = ({
  title,
  setTitle,
  coverPreview,
  onCoverClick,
  onRemoveCover,
  editorHtml,
  setEditorHtml,
  buttonText,
  setButtonText,
  isCategoryEnabled,
  setIsCategoryEnabled,
  isAboutMeEnabled,
  setIsAboutMeEnabled,
}) => {
  const editorRef = useRef(null);
  const [boldActive, setBoldActive] = useState(false);
  const [italicActive, setItalicActive] = useState(false);
  const [underlineActive, setUnderlineActive] = useState(false);

  const applyFormat = (cmd) => {
    document.execCommand(cmd, false, null);
    setTimeout(() => {
      if (editorRef.current) setEditorHtml(editorRef.current.innerHTML);
    }, 0);
    editorRef.current?.focus();
  };

  useEffect(() => {
    const handler = () => {
      try {
        setBoldActive(document.queryCommandState("bold"));
        setItalicActive(document.queryCommandState("italic"));
        setUnderlineActive(document.queryCommandState("underline"));
      } catch {}
    };
    document.addEventListener("selectionchange", handler);
    return () => document.removeEventListener("selectionchange", handler);
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">
        Tell us about your Payment Page
      </h2>

      <FormInput
        label=" Page Title"
        value={title}
        onChange={setTitle}
        maxLength={75}
        required
      />

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2 text-sm">
          Cover Image *
        </label>
        <div
          onClick={onCoverClick}
          className="relative cursor-pointer w-full h-48 md:h-64 rounded-lg border border-dashed border-gray-300 bg-gray-50 overflow-hidden flex items-center justify-center"
        >
          {coverPreview ? (
            <>
              <img
                src={coverPreview}
                alt="cover"
                className="object-cover w-full h-full"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveCover();
                }}
                className="absolute top-3 right-3 p-1 rounded-full bg-white shadow text-red-500"
                aria-label="Remove image"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center text-center px-4">
              <ImageIcon className="w-8 h-8 text-gray-400 mb-2" />
              <div className="text-sm text-gray-600">
                Click to upload cover image
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Recommended size: 1280x720
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2 text-sm">
          Description *
        </label>
        <div className="border border-gray-300 rounded-lg">
          <div className="flex items-center p-2 border-b space-x-2 text-gray-600 bg-gray-50 rounded-t-lg">
            <button
              onClick={() => applyFormat("bold")}
              className={`p-2 rounded ${
                boldActive ? "bg-indigo-600 text-white" : "hover:bg-gray-200"
              }`}
              title="Bold"
            >
              <strong>B</strong>
            </button>
            <button
              onClick={() => applyFormat("italic")}
              className={`p-2 rounded ${
                italicActive ? "bg-indigo-600 text-white" : "hover:bg-gray-200"
              }`}
              title="Italic"
            >
              <em>I</em>
            </button>
            <button
              onClick={() => applyFormat("underline")}
              className={`p-2 rounded ${
                underlineActive
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-200"
              }`}
              title="Underline"
            >
              <span className="underline">U</span>
            </button>

            <div className="border-l h-6 mx-2" />
            <InsertImageButton
              editorRef={editorRef}
              setEditorHtml={setEditorHtml}
            />
            <div className="ml-auto text-xs text-gray-500">
              Tip: Select text then press the buttons
            </div>
          </div>

         <div
  ref={editorRef}
  contentEditable
  suppressContentEditableWarning
  className="min-h-[160px] p-4 bg-white rounded-b-lg outline-none text-sm"
  onInput={(e) => setEditorHtml(e.currentTarget.innerHTML)}
  dangerouslySetInnerHTML={{ __html: editorHtml }}
  dir="ltr"
  style={{
    direction: "ltr",
    unicodeBidi: "plaintext",
    textAlign: "left",
    whiteSpace: "pre-wrap"
  }}
/>

        </div>
      </div>

      <FormInput
        label="Button Text"
        value={buttonText}
        onChange={setButtonText}
        maxLength={25}
        required
      />

      {/* <div className="pt-4 space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">
          Optional Sections
        </h3>

        <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <p className="text-base font-medium text-gray-700">
              All Category & Many More
            </p>
            <ToggleSwitch
              checked={isCategoryEnabled}
              onChange={() => setIsCategoryEnabled(!isCategoryEnabled)}
            />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-100 rounded-md mb-3">
            <span className="text-sm text-gray-600">8 items added</span>
          </div>
          <button className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700">
            <Pencil className="w-4 h-4 mr-2" /> Modify Gallery
          </button>
        </div>

        <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <p className="text-base font-medium text-gray-700">About Me</p>
            <ToggleSwitch
              checked={isAboutMeEnabled}
              onChange={() => setIsAboutMeEnabled(!isAboutMeEnabled)}
            />
          </div>
          <button
            className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700"
            disabled={!isAboutMeEnabled}
          >
            <Pencil className="w-4 h-4 mr-2" /> Modify About Me
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <button className="flex items-center justify-center p-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            <Quote className="w-4 h-4 mr-2" /> 99 Testimonials
          </button>
          <button className="flex items-center justify-center p-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            <HelpCircle className="w-4 h-4 mr-2" /> FAQ
          </button>
          <button className="flex items-center justify-center p-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            <Package className="w-4 h-4 mr-2" /> Showcase Products
          </button>
        </div>
      </div> */}
    </div>
  );
};

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
  limitQuantity,
  setLimitQuantity,
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

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer?.files?.length) onFilesAdded(e.dataTransfer.files);
  };
  const onDragOver = (e) => e.preventDefault();
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
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">
        Upload your digital files
      </h2>

      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50 cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <UploadCloud className="w-8 h-8 text-indigo-500 mx-auto mb-3" />
        <p className="font-semibold text-gray-700">Upload or drag & drop</p>
        <p className="text-sm text-gray-500">
          Unlimited files, recommended total size under 100MB
        </p>
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
      </div>

      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-sm text-gray-500">OR</span>
        <div className="flex-grow border-t border-gray-300" />
      </div>

      <AddResourceLink onAdd={handleAddLink} />

      <div className="flex justify-between items-end mb-2">
        <p className="font-medium text-gray-700">Uploads ({files.length})</p>
        <p className="text-sm text-gray-500">
          Total files size not tracked (demo)
        </p>
      </div>

      <div className="space-y-3">
        {files.length === 0 && (
          <div className="p-4 text-sm text-gray-500 bg-white border border-gray-200 rounded">
            No uploads yet
          </div>
        )}
        {files.map((f) => (
          <div
            key={f.id}
            className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-white shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <FileIcon className="w-5 h-5 text-gray-500" />
              <div>
                <div className="text-sm text-gray-700">{f.name}</div>
                <div className="text-xs text-gray-400">
                  {f.isLink
                    ? "Resource link"
                    : `${(f.size / 1024).toFixed(2)} KB`}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={f.isLink ? f.url : URL.createObjectURL(f.file)}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 text-sm"
              >
                Open
              </a>
              <button
                onClick={() => removeFile(f.id)}
                className="text-gray-400 hover:text-red-500 p-1 rounded-full"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-gray-800 pt-4">Pricing</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => setPricingType("fixed")}
          className={`p-4 rounded-xl border-2 text-left ${
            pricingType === "fixed"
              ? "border-indigo-600 bg-indigo-50"
              : "border-gray-300 bg-white"
          }`}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium text-gray-800">Fixed Price</p>
              <p className="text-sm text-gray-500">
                Charge a one-time fixed pay
              </p>
            </div>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                pricingType === "fixed"
                  ? "border-indigo-600 bg-indigo-600"
                  : "border-gray-400"
              }`}
            >
              {pricingType === "fixed" && (
                <div className="w-2 h-2 rounded-full bg-white" />
              )}
            </div>
          </div>
        </button>

        <button
          onClick={() => setPricingType("customers_decide")}
          className={`p-4 rounded-xl border-2 text-left ${
            pricingType === "customers_decide"
              ? "border-indigo-600 bg-indigo-50"
              : "border-gray-300 bg-white"
          }`}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium text-gray-800">
                Customers decide price
              </p>
              <p className="text-sm text-gray-500">
                Let customers pay any price
              </p>
            </div>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                pricingType === "customers_decide"
                  ? "border-indigo-600 bg-indigo-600"
                  : "border-gray-400"
              }`}
            >
              {pricingType === "customers_decide" && (
                <div className="w-2 h-2 rounded-full bg-white" />
              )}
            </div>
          </div>
        </button>
      </div>

      {pricingType === "fixed" && (
        <FormInput
          label="Price"
          value={price}
          onChange={setPrice}
          placeholder="Enter price"
          required
        />
      )}

      <div className="flex items-center space-x-2 pt-2">
        <input
          id="discount"
          type="checkbox"
          checked={offerDiscount}
          onChange={() => setOfferDiscount(!offerDiscount)}
          className="rounded text-indigo-600 h-4 w-4 border-gray-300"
        />
        <label htmlFor="discount" className="text-sm font-medium text-gray-700">
          Offer discounted price{" "}
          <HelpCircle className="w-4 h-4 inline ml-1 text-gray-400" />
        </label>
      </div>

      {offerDiscount && (
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2 text-sm">
            Discounted price <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              ₹
            </span>
            <input
              type="number"
              value={discountedPrice}
              onChange={(e) => setDiscountedPrice(e.target.value)}
              className="w-full p-3 pl-8 pr-44 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-green-600 font-semibold bg-white px-1">
              {price && `₹ ${price}`}
            </span>
          </div>
        </div>
      )}

    </div>
  );
};

// PostBooks root: ties PageDetailsSection and PaymentDetailsSection together
const PostBooks = () => {
  const [activeTab, setActiveTab] = useState("details");

  // Page details
  const [title, setTitle] = useState("Trendy Reel Bundle");
  const [coverFile, setCoverFile] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const coverInputRef = useRef(null);

  const [editorHtml, setEditorHtml] = useState(
    "Take your content game to the next level with the All-in-One Reel Bundle — a complete package of ready-to-use, high-converting reel templates..."
  );
  const [buttonText, setButtonText] = useState("Buy Now");
  const [isCategoryEnabled, setIsCategoryEnabled] = useState(true);
  const [isAboutMeEnabled, setIsAboutMeEnabled] = useState(false);

  // Payment
  const [files, setFiles] = useState([]);
  const [pricingType, setPricingType] = useState("fixed");
  const [offerDiscount, setOfferDiscount] = useState(true);
  const [price, setPrice] = useState("999");
  const [discountedPrice, setDiscountedPrice] = useState("49");
  const [limitQuantity, setLimitQuantity] = useState(false);

  // Cover handlers
  const onCoverSelected = (file) => {
    if (!file) return;
    setCoverFile(file);
    const reader = new FileReader();
    reader.onload = (e) => setCoverPreview(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleCoverClick = () => coverInputRef.current?.click();
  const handleRemoveCover = () => {
    setCoverFile(null);
    setCoverPreview(null);
  };

  const onCoverInputChange = (e) => {
    if (e.target.files?.[0]) onCoverSelected(e.target.files[0]);
    e.target.value = null;
  };

  const handleSaveAndPublish = () => {
    const payload = {
      title,
      buttonText,
      coverFileName: coverFile?.name || null,
      descriptionHtml: editorHtml,
      options: {
        categoriesEnabled: isCategoryEnabled,
        aboutMeEnabled: isAboutMeEnabled,
      },
      uploads: files.map((f) =>
        f.isLink
          ? { type: "link", url: f.url }
          : { type: "file", name: f.name, size: f.size }
      ),
      pricing: {
        pricingType,
        price,
        discountedPrice: offerDiscount ? discountedPrice : null,
        limitQuantity,
      },
    };
    console.log("Publish payload:", payload);
    alert("Save & Publish clicked — check console for payload.");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-0 w-full">
      <div className="w-full bg-white overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-white p-2 sm:p-0">
          <Tab
            label="Page Details"
            Icon={Pencil}
            isActive={activeTab === "details"}
            onClick={() => setActiveTab("details")}
          />
          <Tab
            label="Payment Page Details"
            Icon={CreditCard}
            isActive={activeTab === "payment"}
            onClick={() => setActiveTab("payment")}
          />
          <Tab
            label="Advanced Settings"
            Icon={Settings}
            isActive={activeTab === "advanced"}
            onClick={() => setActiveTab("advanced")}
          />
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          {activeTab === "details" && (
            <>
              <input
                ref={coverInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onCoverInputChange}
              />
              <PageDetailsSection
                title={title}
                setTitle={setTitle}
                coverPreview={coverPreview}
                onCoverClick={handleCoverClick}
                onRemoveCover={handleRemoveCover}
                editorHtml={editorHtml}
                setEditorHtml={setEditorHtml}
                buttonText={buttonText}
                setButtonText={setButtonText}
                isCategoryEnabled={isCategoryEnabled}
                setIsCategoryEnabled={setIsCategoryEnabled}
                isAboutMeEnabled={isAboutMeEnabled}
                setIsAboutMeEnabled={setIsAboutMeEnabled}
              />
            </>
          )}

          {activeTab === "payment" && (
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
              limitQuantity={limitQuantity}
              setLimitQuantity={setLimitQuantity}
            />
          )}

          {activeTab === "advanced" && (
            <div className="p-6 text-gray-500">
              Advanced Settings Content Here...
              <p className="mt-3 text-sm text-gray-400">
                (Placeholder - add advanced options)
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end space-x-4">
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveAndPublish}
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 shadow-lg"
            >
              Save and Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBooks;
