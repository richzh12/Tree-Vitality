import Link from 'next/link';
import styles from './SignupPage.module.css';

const SignupPage = () => {
  return (
    <div className={styles.background}>
      <div class="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
        <div class="max-w-md w-full mx-auto border border-gray-300 rounded-lg p-8 bg-white">
          <div class="text-center text-3xl font-bold mb-8 text-black">
            <h2>Crear cuenta</h2>
          </div>

          <form>
            <div class="space-y-6">
              <div>
                <label class="text-gray-800 text-sm mb-2 block">Correo Electrónico</label>
                <input name="email" type="text" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Introduzca su correo" />
              </div>
              <div>
                <label class="text-gray-800 text-sm mb-2 block">Contraseña</label>
                <input name="password" type="password" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Introduzca una contraseña" />
              </div>
              <div>
                <label class="text-gray-800 text-sm mb-2 block">Confirmar Contraseña</label>
                <input name="cpassword" type="password" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Vuelva a introducir su contraseña" />
              </div>
            </div>

            <div class="!mt-12">
              <button type="button" class="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                Crear cuenta
              </button>
            </div>
              <p class="text-gray-800 text-sm mt-6 text-center">Ya tiene una cuenta? <Link href="../../auth-page/login" class="text-blue-600 font-semibold hover:underline ml-1">Inicie sesión aquí</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;