export default function PageTitle({
  children,
  className
}: Readonly<{
  children: React.ReactNode | string;
  className?: string;
}>) {
  return (
    <h1 className={`text-3xl lg:text-4xl xl:text-5xl font-semibold ${className}`}>
      {children}
    </h1>
  );
}
