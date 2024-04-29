"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LoadingButton } from "./LoadingButton";
import { Button, ButtonProps } from "../ui/button";
import { toast } from "react-hot-toast";

export default function LogoutButton({
  children,
  className = "",
  variant = "default",
}: ButtonProps) {
  const router = useRouter();
  const doLogout = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/logout`,
      {
        credentials: "include",
      }
    );

    return await res.json();
  };
  const clearCookies = async () => {
    const res = await fetch(`/api/clear-cookies`, {
      credentials: "include",
    });

    return await res.json();
  };
  const handleLogout = async () => {
    await doLogout();
    await clearCookies();
    window.localStorage.clear();
    router.push("/login");
    toast.success("Logged Out");
  };
  return (
    <Button variant={variant} onClick={handleLogout} className={`${className}`}>
      {children}
    </Button>
  );
}
