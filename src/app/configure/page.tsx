import ConfiguratorWizard from "@/components/ConfiguratorWizard";

export const metadata = { title: "Configure Your Cover" };

export default function Configure() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
      <ConfiguratorWizard />
    </main>
  );
}
