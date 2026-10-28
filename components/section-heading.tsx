type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  level?: 1 | 2 | 3;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  level = 2,
}: SectionHeadingProps) {
  const Tag = level === 1 ? "h1" : level === 3 ? "h3" : "h2";
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className={`eyebrow ${dark ? "text-terracotta-300" : ""}`}>
        {eyebrow}
      </p>
      <Tag
        className={`mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl ${
          dark ? "text-cream" : "text-sage-900"
        }`}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-cream/75" : "text-ink/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
