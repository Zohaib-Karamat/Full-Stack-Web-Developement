interface SectionHeadingProps {
  subtitle: string;
  title?: string;
  actionButton?: React.ReactNode;
  children?: React.ReactNode;
}

export default function SectionHeading({ subtitle, title, actionButton, children }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex w-full flex-col gap-5 sm:mb-10">
      <div className="flex items-center gap-4">
        <div className="w-5 h-10 bg-red-500 rounded-sm" />
        <span className="text-red-500 text-base font-semibold font-poppins leading-5">
          {subtitle}
        </span>
      </div>

      {(title || actionButton || children) && (
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end lg:gap-20">
            {title && (
              <h2 className="font-inter text-2xl font-semibold leading-tight tracking-normal text-black sm:text-3xl lg:text-4xl">
                {title}
              </h2>
            )}
            {children}
          </div>
          {actionButton && <div className="shrink-0">{actionButton}</div>}
        </div>
      )}
    </div>
  );
}
