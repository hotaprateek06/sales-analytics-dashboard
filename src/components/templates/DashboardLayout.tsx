import Footer from "@/components/atoms/Footer";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function DashboardLayout({ title, children }: Props) {
  return (
    <main
      className="min-h-screen bg-cover bg-center relative text-white flex flex-col"
      style={{ backgroundImage: "url('/images/dashboard-bg.jpg')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-slate-900/85" />

      {/* Content */}
      <div className="relative z-10 flex-1 p-6 md:p-10 space-y-8">
        <header>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-slate-400">
            Interactive sales performance overview
          </p>
        </header>

        {children}
      </div>

      {/* Footer */}
      <div className="relative z-10 px-6 md:px-10 pb-6">
        <Footer />
      </div>
    </main>
  );
}
