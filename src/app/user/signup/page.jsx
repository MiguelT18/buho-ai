"use client";

import { PrimaryButton } from "@/components/Buttons";
import { OwlIcon } from "@/components/icons";
import Input from "@/components/Input";
import { useNotification } from "@/hooks/useNotification";
import Link from "next/link";

export default function SignUp() {
  const { showNotification } = useNotification();

  return (
    <form className="bg-light-background dark:bg-dark-background p-2 rounded-xl border w-full max-w-[600px] mx-auto">
      <header className="flex flex-col items-center pt-2">
        <Link href="/">
          <OwlIcon className="size-20" />
        </Link>
        <h1 className="text-lg font-bold dark:text-white text-black">
          Crear una Cuenta
        </h1>
        <p className="max-sm:text-center">
          Crea una cuenta en Buho AI, tu asistente legal en tiempo real.
        </p>
      </header>

      <main className="px-2">
        <div className="flex gap-2 mt-5 [&>label]:block">
          <label htmlFor="fullName" className="space-y-2">
            <span className="text-black dark:text-white">Nombre completo:</span>
            <Input type="text" placeholder="Juan Perez" id="fullName" />
          </label>
          <label htmlFor="email" className="space-y-2">
            <span className="text-black dark:text-white">
              Correo electrónico:
            </span>
            <Input type="text" placeholder="juanperez@gmail.com" id="email" />
          </label>
        </div>

        <div className="space-y-2 my-2 [&>label]:block">
          <label htmlFor="password" className="space-y-2">
            <span className="text-black dark:text-white">Contraseña:</span>
            <Input type="text" placeholder="******" id="password" />
          </label>
          <label htmlFor="passwordRepeated" className="space-y-2">
            <span className="text-black dark:text-white">
              Repetir contraseña:
            </span>
            <Input type="text" placeholder="******" id="passwordRepeated" />
          </label>
        </div>
      </main>

      <footer className="p-2 mt-2">
        <PrimaryButton
          width="full"
          onClick={() =>
            showNotification("Funcionalidad aún no disponible", "error")
          }
        >
          Crear Cuenta
        </PrimaryButton>

        <label
          htmlFor="terms"
          className="w-fit flex items-center gap-2 text-sm cursor-pointer mt-5"
        >
          <input type="checkbox" id="terms" className="size-4" />
          Acepto los{" "}
          <button
            type="button"
            onClick={() =>
              showNotification("Funcionalidad aún no disponible", "error")
            }
            className="hover:underline text-black dark:text-white"
          >
            términos y condiciones
          </button>
        </label>

        <span className="w-full inline-block text-sm text-center mt-4 [&>a]:dark:text-difuminate-text-dark [&>a]:text-difuminate-text-light dark:text-white text-black transition-all">
          ¿Ya tienes una cuenta?{" "}
          <Link
            href="/user/signin"
            className="hover:underline hover:dark:text-primary-color hover:text-secondary-color"
          >
            Iniciar Sesión
          </Link>
        </span>
      </footer>
    </form>
  );
}
