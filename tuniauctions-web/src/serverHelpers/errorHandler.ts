import { NextResponse } from "next/server";

export function serverErrorHandler(error: unknown) {
  console.log(error);
  return NextResponse.json({
    success: false,
    serverError: true,
    errorCode: error,
    errorMessage: "Server Error",
    authError: false,
  });
}

export function successHandler() {
  return NextResponse.json({
    success: true,
    serverError: false,
    errorCode: null,
    errorMessage: null,
    authError: false,
  });
}

export function userInputCausedErrors(error: string) {
  return NextResponse.json({
    success: false,
    serverError: false,
    errorCode: null,
    errorMessage: error,
    authError: false,
  });
}

export function unautherizedError(error: string, errorCode?: unknown) {
  const response = NextResponse.json({
    success: false,
    serverError: false,
    errorCode: errorCode || null,
    errorMessage: error,
    authError: true,
  });
  response.cookies.set("refreshBidderToken", "", {
    expires: new Date(0),
  });
  return response;
}
