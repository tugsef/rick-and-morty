import StoreProvider from "@/Provider/StoreProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <StoreProvider>{children}</StoreProvider>
    </div>
  );
}
