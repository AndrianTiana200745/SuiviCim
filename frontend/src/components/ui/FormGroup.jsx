export default function FormGroup({ children, columns = 2 }) {
  return (
    <div className={`grid gap-4 ${columns === 2 ? "md:grid-cols-2" : "grid-cols-1"}`}>
      {children}
    </div>
  );
}

