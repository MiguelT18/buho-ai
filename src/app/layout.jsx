import ThemeProvider from "@/hooks/useTheme";
import "./globals.css";
import NotificationProvider from "@/hooks/useNotification";
import Header from "@/components/layouts/Header";

export const metadata = {
  title: "BUHO AI",
  description: "Asistente virtual para la gestión de leyes de Bolivia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased dark:bg-dark-background dark:text-difuminate-text-dark text-difuminate-text-light relative">
        <ThemeProvider>
          <NotificationProvider>
            <Header />
            {children}
          </NotificationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
