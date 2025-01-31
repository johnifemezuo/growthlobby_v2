export default function Title({
  children,
}: {
  children: React.ReactNode | string;
}) {
  return (
    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">
      {children}
    </h1>
  );
}
