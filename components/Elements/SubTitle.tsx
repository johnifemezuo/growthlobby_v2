export default function SubTitle({children}:{children: React.ReactNode | string}) {
  return (
    <h1 className="uppercase text-zinc-600 text-sm lg:text-base font-medium">{children}</h1>
  );
}
