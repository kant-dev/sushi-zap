"use client"

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import TabsProducts from "@/components/layout/Products/TabsProducts";
import TabsSkelleton from "@/components/layout/Products/TabsSkelleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Header/>
      
      <div className="mx-3">
        <Suspense fallback={<TabsSkelleton/>}>
          <TabsProducts/>
        </Suspense>
      </div>

      <Footer/>
    </div>
  );
}
