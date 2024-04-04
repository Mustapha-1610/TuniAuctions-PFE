interface Props {
  setPictureFiles: (prev: any) => void;
}
export default function ProductPicturesSection({ setPictureFiles }: Props) {
  return (
    <>
      <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
        <div className="flex flex-col items-center justify-center h-52 border border-2 border-gray-300 rounded-md">
          <p>Select Display Images</p>
          <label>
            <div className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
              Upload Images
            </div>
            <input
              className="hidden"
              type="file"
              multiple={true}
              onChange={(e) => {
                setPictureFiles((prevState: any) => ({
                  ...prevState,
                  productPictures: e.target.files,
                }));
              }}
            />
          </label>

          <p className="text-xs text-gray-500 mt-1">Maximum 3</p>
        </div>
      </div>
    </>
  );
}
