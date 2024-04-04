import { useState } from "react";
import { MdErrorOutline, MdCheckCircle } from "react-icons/md";

interface Props {
  videoLength: number;
  setAuctionListingForm: (value: any) => void;
}

export default function PromotionalVideoSection({
  setAuctionListingForm,
  videoLength,
}: Props) {
  const [errMessage, setErrMessage] = useState<string>();
  const [successMessage, setSuccessMessage] = useState<string>();

  async function handleVideoLengthCheck(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { value } = e.target;
    setSuccessMessage("");
    setErrMessage("");
    if (value) {
      const regex =
        /(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = value.match(regex);
      const test = match && match[2].length == 11 ? match[2] : false;

      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${test}&part=contentDetails&key=AIzaSyCW7auDDsv6NW_PbLH_0fsuSrxsp0aEUTs`,
        {
          method: "GET",
        }
      );

      const resData = await res.json();
      const videoDuration = resData.items[0].contentDetails.duration;
      let length = videoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

      length = length.slice(1).map(function (x: string) {
        if (x != null) {
          return x.replace(/\D/, "");
        }
      });

      let hours = parseInt(length[0]) || 0;
      let minutes = parseInt(length[1]) || 0;
      let seconds = parseInt(length[2]) || 0;

      const youtubeVideoDuration = hours * 3600 + minutes * 60 + seconds;
      if (youtubeVideoDuration > videoLength) {
        setErrMessage("Video longer than required");
        setAuctionListingForm((prev: any) => ({
          ...prev,
          promotionalVideo: "",
        }));
      } else {
        setSuccessMessage("Video added successfully");
        setAuctionListingForm((prev: any) => ({
          ...prev,
          promotionalVideo: value,
        }));
      }
    }
  }

  return (
    <div className="w-full sm:w-1/2">
      <div className="flex flex-col items-center justify-center h-52 border border-2 border-gray-300 rounded-md">
        <p>Insert Promotional Video Link</p>

        <input
          className="mt-1 p-2 w-96 border border-gray-300 rounded-md "
          placeholder="Promotional Description"
          onBlur={handleVideoLengthCheck}
        />

        <p className="text-xs text-gray-500 mt-1">Maximum 60s</p>
        {errMessage && (
          <div className="flex items-center mt-1">
            <MdErrorOutline className="text-red-500 mr-1" />
            <p className="text-red-500">{errMessage}</p>
          </div>
        )}
        {successMessage && (
          <div className="flex items-center mt-1">
            <MdCheckCircle className="text-green-500 mr-1" />
            <p className="text-green-500">{successMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}
