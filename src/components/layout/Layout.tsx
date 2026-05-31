export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <div
      className="
        min-h-screen

        bg-black
        text-white

        pt-14
      "
    >
      {children}
    </div>

  );
}