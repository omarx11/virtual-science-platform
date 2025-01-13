"use client";

import React from "react";
import { Icon } from "@iconify-icon/react";

export default function PreLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-100 text-2xl">
      LOADING...
      <Icon icon="svg-spinners:bars-rotate-fade" width="24" height="24" />
    </div>
  );
}
