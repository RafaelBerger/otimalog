import "../styles/about-section-structure.css";

interface ContentShowcaseProps {
  children: React.ReactNode;
  src: string;
  isReversed: boolean;
  isLighter: boolean;
}

function ContentShowcase({
  children,
  src,
  isReversed,
  isLighter,
}: ContentShowcaseProps) {
  return (
    <section
      className={`section-container ${isLighter ? "lighter-color" : ""}`}
    >
      {isReversed ? (
        <>
          <div className="image-content-reversed">
            <div>
              <img src={src} alt="Illustration" />
            </div>
          </div>
          <div className="text-content">{children}</div>
        </>
      ) : (
        <>
          <div className="text-content">{children}</div>
          <div className="image-content">
            <div>
              <img src={src} alt="Illustration" />
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default ContentShowcase;
