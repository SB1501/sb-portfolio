export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-3xl px-6 py-6 text-sm">
        © {new Date().getFullYear()} Shane Bunting
      </div>
    </footer>
  );
}