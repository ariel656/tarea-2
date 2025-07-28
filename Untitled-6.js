import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(`¡Bienvenido ${data.email}!`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2>Inicia sesión</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        {...register("email", { required: "El correo es obligatorio" })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        type="password"
        placeholder="Contraseña"
        {...register("password", {
          required: "La contraseña es obligatoria",
          minLength: { value: 6, message: "Mínimo 6 caracteres" },
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}

      <button type="submit">Entrar</button>
    </form>
  );
}
