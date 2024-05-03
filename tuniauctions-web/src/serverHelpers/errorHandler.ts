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

export function unautherizedError(error?: string, errorCode?: unknown) {
  const response = NextResponse.json({
    success: false,
    serverError: false,
    errorCode: errorCode || null,
    errorMessage: error || null,
    authError: true,
  });
  response.cookies.set("refreshBidderToken", "", {
    expires: new Date(0),
    sameSite: "none",
    secure: true,
    httpOnly: true,
  });
  response.cookies.set("accessBidderToken", "", {
    expires: new Date(0),
    sameSite: "none",
    secure: true,
    httpOnly: true,
  });
  return response;
}

export function unautherizedAdminError(error?: string, errorCode?: unknown) {
  const response = NextResponse.json({
    success: false,
    serverError: false,
    errorCode: errorCode || null,
    errorMessage: error || null,
    authError: true,
  });
  response.cookies.set("refreshAdminToken", "", {
    expires: new Date(0),
    sameSite: "none",
    secure: true,
    httpOnly: true,
  });
  response.cookies.set("accessAdminToken", "", {
    expires: new Date(0),
    sameSite: "none",
    secure: true,
    httpOnly: true,
  });
  return response;
}
export function unautherizedSellerError(error?: string, errorCode?: unknown) {
  const response = NextResponse.json({
    success: false,
    serverError: false,
    errorCode: errorCode || null,
    errorMessage: error || null,
    authError: true,
  });
  response.cookies.set("refreshSellerToken", "", {
    expires: new Date(0),
    sameSite: "none",
    secure: true,
    httpOnly: true,
  });
  response.cookies.set("accessSellerToken", "", {
    expires: new Date(0),
    sameSite: "none",
    secure: true,
    httpOnly: true,
  });
  return response;
}
