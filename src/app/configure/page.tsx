import Configurator3DClient from "@/components/Configurator3DClient";
import Sidebar from "@/components/Sidebar";

export const metadata = { title: "Design My Lounge Chair" };

export default function Configure() {
  return (
    <main className="flex min-h-screen">
      <div className="flex-grow">
        <Configurator3DClient />
      </div>
      <Sidebar />
    </main>
  );
}
