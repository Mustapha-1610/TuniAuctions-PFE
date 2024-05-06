import { verifyMailResponse } from "@/app/api/bidder/verify/route";
import VerifiedComponent from "./components/verified";
import PreverifiedComponent from "./components/preverified";
import ExpiredComponent from "./components/expired";

export default async function VerifyMailPage({
  params,
}: {
  params: { token: string };
}) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/bidder/verify`,
    {
      method: "POST",
      body: JSON.stringify({
        mailToken: params.token,
      }),
      cache: "no-cache",
    }
  );
  const resData: verifyMailResponse = await data.json();

  if (resData.verified) {
    return <VerifiedComponent />;
  } else if (resData.preverified) {
    return <PreverifiedComponent />;
  } else if (resData.expired && resData.bidderEmail) {
    return <ExpiredComponent email={resData.bidderEmail} />;
  }
}
