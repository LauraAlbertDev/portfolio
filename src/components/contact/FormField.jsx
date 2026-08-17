export const FormField = ({ id, label, type, placeholder, value, error, onChange, onBlur }) => (
    <div>
        <div className="flex justify-between items-center mb-2">
            <label htmlFor={id} className="block text-sm font-medium text-foreground/80">
                {label}
            </label>
            {error && (
                <span id={`${id}-error`} role="alert" className="text-xs text-red-400 font-medium">
                    {error}
                </span>
            )}
        </div>
        <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
            className={`w-full px-4 py-3 bg-surface rounded-xl border outline-none transition-all placeholder:text-muted-foreground/30 text-white ${
                error
                    ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-border focus:border-primary focus:ring-1 focus:ring-primary"
            }`}
        />
    </div>
);