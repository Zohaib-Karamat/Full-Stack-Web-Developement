interface SectionHeadingProps {
  subtitle: string;
  title?: string;
  actionButton?: React.ReactNode;
  children?: React.ReactNode;
}

export default function SectionHeading({ subtitle, title, actionButton, children }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-5 w-full mb-10">
      <div className="flex items-center gap-4">
        <div className="w-5 h-10 bg-red-500 rounded-sm" />
        <span className="text-red-500 text-base font-semibold font-poppins leading-5">
          {subtitle}
        </span>
      </div>
      
      {(title || actionButton || children) && (
        <div className="flex justify-between items-end">
          <div className="flex items-end gap-20">
            {title && (
              <h2 className="text-black text-4xl font-semibold font-inter leading-[48px] tracking-wider">
                {title}
              </h2>
            )}
            {children}
          </div>
          {actionButton && <div>{actionButton}</div>}
        </div>
      )}
    </div>
  );
}
