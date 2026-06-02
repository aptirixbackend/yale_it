import { LoginForm } from "./LoginForm";
import { LeftPanel } from "./LeftPanel";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;

  return (
    <div className="grid min-h-screen md:grid-cols-2">
      {/* LEFT — full-height rotating smart-lock slideshow */}
      <div className="relative hidden overflow-hidden md:block">
        <LeftPanel />
      </div>

      {/* RIGHT — full-height form */}
      <div className="relative flex items-center justify-center bg-white px-6 py-12 sm:px-10">
        {/* IT Service First tag — top right */}
        <span className="absolute right-7 top-7 inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          IT Service First
        </span>

        <div className="w-full max-w-sm">
          <h1 className="font-display text-3xl font-bold text-slate-900">Welcome Admin 👋</h1>
          <p className="mb-8 mt-1.5 text-sm text-slate-500">Sign in to your account</p>

          <LoginForm error={Boolean(sp.error)} />

          <p className="mt-10 text-center text-xs text-slate-400">
            Authorized access only · Powered by{" "}
            <span className="font-medium text-slate-600">LazyRabbit</span>
          </p>
        </div>
      </div>
    </div>
  );
}
