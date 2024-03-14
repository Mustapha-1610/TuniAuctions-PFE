import { NextResponse } from "next/server";

export function serverErrorHandler(error: unknown) {
  return NextResponse.json({
    success: false,
    serverError: true,
    errorCode: error,
    errorMessage: "Server Error",
  });
}

export function successHandler() {
  return NextResponse.json({
    success: true,
    serverError: false,
    errorCode: null,
    errorMessage: null,
  });
}

export function accountExistsError() {
  return NextResponse.json({
    success: false,
    serverError: false,
    errorCode: null,
    errorMessage: "Account exists already !",
  });
}
