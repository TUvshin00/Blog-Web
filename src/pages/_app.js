import MainLayout from "@/components/layout/MainLayout";
import "@/styles/globals.css";
import { Main } from "next/document";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
