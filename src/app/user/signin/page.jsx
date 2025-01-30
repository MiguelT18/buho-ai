"use client";

import { PrimaryButton } from "@/components/Buttons";
import { OwlIcon } from "@/components/icons";
import Input from "@/components/Input";
import { useNotification } from "@/hooks/useNotification";
import Link from "next/link";

export default function SignIn() {
  const { showNotification } = useNotification();

  return (
    <form className="bg-light-background dark:bg-dark-background p-2 rounded-xl border w-full max-w-[600px] mx-auto">
      <header className="flex flex-col items-center pt-2 px-2">
        <Link href="/">
          <OwlIcon className="size-20" />
        </Link>
        <h1 className="text-lg font-bold dark:text-white text-black">
          Inicia Sesión
        </h1>
        <p className="max-sm:text-center">
          Ingresa a tu cuenta de Buho Ai, tu asistente legal en tiempo real.
        </p>
      </header>

      <main className="px-2 space-y-2 mt-4 [&>label]:block">
        <label htmlFor="email" className="space-y-2">
          <span className="text-black dark:text-white">
            Correo electrónico:
          </span>
          <Input type="text" placeholder="juanperez@gmail.com" id="email" />
        </label>

        <label htmlFor="password" className="space-y-2">
          <span className="text-black dark:text-white">Contraseña:</span>
          <Input type="text" placeholder="******" id="password" />
        </label>
      </main>

      <footer className="p-2 mt-2">
        <PrimaryButton
          width="full"
          onClick={() =>
            showNotification("Funcionalidad aún no disponible", "error")
          }
        >
          Iniciar Sesión
        </PrimaryButton>

        <span className="w-full inline-block text-sm text-center mt-4 [&>a]:dark:text-difuminate-text-dark [&>a]:ml-1 [&>a]:text-difuminate-text-light dark:text-white text-black transition-all">
          ¿Aún no tienes una cuenta?
          <Link
            href="/user/signup"
            className="hover:underline hover:dark:text-primary-color hover:text-secondary-color"
          >
            Regístrate
          </Link>
        </span>

        <span className="w-full inline-block text-sm text-center mt-2 [&>a]:dark:text-difuminate-text-dark [&>a]:ml-1 [&>a]:text-difuminate-text-light dark:text-white text-black transition-all">
          ¿Ovidaste tu contraseña?
          <Link
            href={"#"}
            onClick={() =>
              showNotification("Funcionalidad aún no disponible", "error")
            }
            className="hover:underline hover:dark:text-primary-color hover:text-secondary-color"
          >
            Restablecer contraseña
          </Link>
        </span>
      </footer>
    </form>
  );
}
