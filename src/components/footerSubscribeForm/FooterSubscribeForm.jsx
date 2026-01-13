import { useForm } from "react-hook-form";

export default function FooterSubscribeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: { email: "" },
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    reset();
  };

  return (
    <div className="max-w-xl flex flex-col gap-4">
      <h5 className="text-deep-navy">Get In Touch</h5>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="flex w-full overflow-hidden rounded-md border border-lightest-gray bg-white">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-5 py-4 outline-none text-gray-700 placeholder:text-gray-400"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            })}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-45 bg-blue-primary text-white font-semibold text-lg transition hover:brightness-110 disabled:opacity-60"
          >
            {isSubmitting ? "..." : "Subscribe"}
          </button>
        </div>

        {errors.email ? (
          <p className="text-sm text-red-accent">{errors.email.message}</p>
        ) : (
          <p className="text-gray-medium">Lore imp sum dolor Amit</p>
        )}
      </form>
    </div>
  );
}
