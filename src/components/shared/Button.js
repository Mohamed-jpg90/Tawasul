import Link from "next/link";
import "./shared.css";

export default function Button({
  text,
  to = "/",
  primary = true,
}) {
  return (
    <Link
      href={to}
      className={primary ? "primaryButton" : "secondaryButton"}
    >
      {text}
    </Link>
  );
}