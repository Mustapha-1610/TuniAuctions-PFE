import { FaSearch } from "react-icons/fa";

interface Props {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  filterBySearch: (title: string) => void;
}

export default function SidebarSection({
  selectedCategory,
  setSelectedCategory,
  filterBySearch,
}: Props) {
  const categories = [
    "Electronics",
    "Clothing & Apparel",
    "Sports & Outdoors",
    "Home & Garden",
    "Health & Beauty",
    "Toys & Games",
    "Pet Supplies",
  ];

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <>
      <div className="flex flex-col max-w-[300px] w-full max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch max-md:mt-4">
          <div className="flex flex-col justify-center px-4 w-full text-base bg-violet-50 rounded-md text-neutral-500 max-md:pr-5">
            <div className="flex items-center px-4 py-4 rounded-md">
              <input
                type="text"
                className="flex-auto bg-transparent outline-none border-none truncate"
                placeholder="Search Product"
                onBlur={(e) => {
                  filterBySearch(e.target.value);
                }}
              />
              <FaSearch
                className="aspect-square w-5 h-5 ml-2 cursor-pointer"
                size={15}
                color="black"
              />
            </div>
          </div>

          <div className="flex flex-col p-8 mt-9 bg-violet-50 rounded-md max-md:px-5">
            <div className="text-2xl font-bold tracking-tighter leading-8 text-slate-900">
              Auction categories
            </div>
            <div className="flex flex-col items-start py-0.5 pr-20 pl-2.5 mt-5 text-base leading-7 whitespace-nowrap text-zinc-800 max-md:pr-5">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`mt-1.5 cursor-pointer ${
                    selectedCategory === category ? "text-black" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                  {selectedCategory === category && (
                    <span
                      className="ml-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory("");
                      }}
                    >
                      X
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
