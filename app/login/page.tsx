import { LoginForm } from "./LoginForm";

// Left-panel image: drop your own smart-lock photo at /public/door.jpg to override;
// falls back to a stock image, then a dark gradient.
const SIDE_IMAGE =
  "linear-gradient(to top, rgba(8,8,15,0.78) 0%, rgba(8,8,15,0.25) 45%, rgba(8,8,15,0.15) 100%), " +
  "url('/door.jpg'), " +
  "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b0b0f] p-3 sm:p-6">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl md:min-h-[600px] md:grid-cols-2">
        {/* LEFT — smart-lock image */}
        <div
          className="relative hidden md:block"
          style={{ backgroundImage: SIDE_IMAGE, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {/* LazyRabbit brand — top left */}
          <div className="absolute left-6 top-6 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white p-1 shadow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/lazyrabbit.png" alt="LazyRabbit" className="h-full w-full object-contain" />
            </span>
            <span className="font-display text-base font-semibold text-white drop-shadow">LazyRabbit</span>
          </div>

          {/* Tagline — bottom left */}
          <div className="absolute bottom-10 left-8 right-8">
            <h2 className="font-display text-4xl font-bold leading-[1.1] text-white drop-shadow-lg">
              Automate
              <br />
              everything.
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/85 drop-shadow">
              From lead to done — Yale service handled in just a few clicks.
            </p>
            <div className="mt-5 flex gap-1.5">
              <span className="h-1.5 w-6 rounded-full bg-white" />
              <span className="h-1.5 w-2.5 rounded-full bg-white/40" />
              <span className="h-1.5 w-2.5 rounded-full bg-white/40" />
            </div>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="relative flex flex-col justify-center px-7 py-12 sm:px-12">
          {/* IT Service First tag — top right */}
          <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            IT Service First
          </span>

          <div className="mx-auto w-full max-w-sm">
            <h1 className="font-display text-2xl font-bold text-slate-900">Welcome Admin 👋</h1>
            <p className="mb-7 mt-1 text-sm text-slate-500">Sign in to your account</p>

            <LoginForm error={Boolean(sp.error)} />

            <p className="mt-8 text-center text-xs text-slate-400">
              Authorized access only · Powered by{" "}
              <span className="font-medium text-slate-600">LazyRabbit</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
