function ArrowRightIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Button({ children, showIcon = false, className = '' }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-1.5 rounded-[4px] bg-nexcent-green px-6 py-2.5 text-xs font-medium leading-4 text-white transition-opacity hover:opacity-90 ${className}`}
    >
      <span>{children}</span>
      {showIcon && <ArrowRightIcon />}
    </button>
  )
}
