import StoreProvider from "@/provider/StoreProvider";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <StoreProvider>{children}</StoreProvider>
    </div>
  );
}
