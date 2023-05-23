export default function Divider({
  color = "rgba(255, 255, 255, 0.2)",
}: {
  color?: string;
}) {
  return (
    <div
      className="w-full max-w-5xl mx-auto h-px border-b mt-4"
      style={{ borderColor: color }}
    />
  );
}
