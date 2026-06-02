"use client";

export default function Footer() {
  return (
    <footer className="border-t border-th px-6 py-8">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <p className="text-[11px] text-mt">
          &copy; {new Date().getFullYear()}
        </p>
        <p className="text-[11px] text-mt">Built with Next.js</p>
      </div>
    </footer>
  );
}
