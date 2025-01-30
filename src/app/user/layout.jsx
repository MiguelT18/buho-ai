export default function UserLayout({ children }) {
  return (
    <main className="bg-gradient-light dark:bg-gradient-dark min-h-dvh w-full h-full grid place-content-center max-sm:px-4">
      {children}
    </main>
  );
}
